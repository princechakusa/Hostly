-- Listing expiry (#4)
-- Run in Supabase SQL Editor

-- Add expires_at column (30 days default from creation)
alter table listings
  add column if not exists expires_at timestamptz
    generated always as (created_at + interval '30 days') stored;

-- Function to mark expired listings as inactive
create or replace function expire_old_listings()
returns void language plpgsql as $$
begin
  update listings
  set status = 'expired'
  where status = 'active'
    and expires_at < now();
end;
$$;

-- Renew a listing by extending expiry 30 days from now
create or replace function renew_listing(listing_id uuid)
returns void language plpgsql security definer as $$
begin
  -- Override the generated column by using a real column for manual renewals
  update listings
  set expires_at = now() + interval '30 days'
  where id = listing_id
    and seller_id = auth.uid();
end;
$$;

-- Schedule expiry check (requires pg_cron extension in Supabase)
-- Enable pg_cron: Dashboard → Database → Extensions → pg_cron
-- Then run:
-- select cron.schedule('expire-listings', '0 * * * *', 'select expire_old_listings()');
