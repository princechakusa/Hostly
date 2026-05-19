-- Error tracking (#13)
-- Run in Supabase SQL Editor

create table if not exists error_logs (
  id          uuid primary key default gen_random_uuid(),
  type        text not null,
  message     text,
  source      text,
  stack       text,
  user_id     uuid references auth.users(id) on delete set null,
  user_agent  text,
  created_at  timestamptz default now()
);

alter table error_logs enable row level security;

-- Only the service role can read error logs (admins via dashboard)
create policy "Service role only read"
  on error_logs for select
  using (false);

-- Authenticated and anonymous users can insert their own errors
create policy "Anyone can log errors"
  on error_logs for insert
  with check (true);

-- Auto-delete logs older than 30 days (keep table small)
create or replace function prune_error_logs()
returns void language plpgsql as $$
begin
  delete from error_logs where created_at < now() - interval '30 days';
end;
$$;
-- select cron.schedule('prune-error-logs', '0 2 * * *', 'select prune_error_logs()');
