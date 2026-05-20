-- ══════════════════════════════════════════════════════════════
-- PaMarket Supabase migrations
-- Run this once in your Supabase SQL Editor:
-- https://supabase.com/dashboard/project/gxgytumhknmnwspxjzxw/sql
-- ══════════════════════════════════════════════════════════════

-- ── 1. Paid Ads (ads stored server-side so ALL users see them) ──
create table if not exists paid_ads (
  id            uuid primary key default gen_random_uuid(),
  type          text not null check(type in ('banner','spotlight')),
  business_name text,
  headline      text,
  tagline       text,
  image_url     text,
  bg_color      text default '#1A3A8F',
  link_url      text,
  target_cat    text,
  starts_at     timestamptz default now(),
  ends_at       timestamptz,
  active        boolean default true,
  priority      integer default 0,
  -- Client / billing
  client_name   text,
  client_phone  text,
  client_email  text,
  price_paid    numeric(10,2) default 0,
  payment_method text,
  payment_ref   text,
  -- Performance metrics
  impressions   integer default 0,
  clicks        integer default 0,
  created_at    timestamptz default now(),
  updated_at    timestamptz default now()
);

alter table paid_ads enable row level security;
drop policy if exists "anon read paid_ads"   on paid_ads;
drop policy if exists "anon write paid_ads"  on paid_ads;
create policy "anon read paid_ads"  on paid_ads for select using (true);
create policy "anon write paid_ads" on paid_ads for all    using (true);

-- ── 2. App Settings (single-row config read by the PWA on boot) ──
create table if not exists app_settings (
  id         integer primary key default 1,
  settings   jsonb not null default '{}',
  updated_at timestamptz default now()
);
insert into app_settings(id, settings)
values(1, '{"requireListingApproval":false,"autoApproveVerified":true,"allowImageUploads":true,"signupPaused":false,"requirePhoneVerification":false,"enablePremiumListings":false,"freeOnly":false}')
on conflict(id) do nothing;

alter table app_settings enable row level security;
drop policy if exists "anon read settings"  on app_settings;
drop policy if exists "anon write settings" on app_settings;
create policy "anon read settings"  on app_settings for select using (true);
create policy "anon write settings" on app_settings for all    using (true);

-- ── 2a. Paid Ads: extra columns added after initial table creation ──
alter table paid_ads add column if not exists client_user_id uuid;
alter table paid_ads add column if not exists listing_id uuid;

-- ── 3a. Profiles: ensure all columns exist ──
alter table profiles add column if not exists verification_pending boolean default false;
alter table profiles add column if not exists verified boolean default false;
alter table profiles add column if not exists cv jsonb;
alter table profiles add column if not exists open_to_work boolean default false;

-- ── 3. Verifications (ID doc + selfie for admin review) ──
create table if not exists verifications (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid unique,
  id_doc        text,
  selfie        text,
  status        text not null default 'pending' check(status in ('pending','approved','rejected')),
  admin_note    text,
  submitted_at  timestamptz default now(),
  reviewed_at   timestamptz,
  reviewed_by   text
);

alter table verifications enable row level security;
drop policy if exists "anon read verifications"  on verifications;
drop policy if exists "anon write verifications" on verifications;
create policy "anon read verifications"  on verifications for select using (true);
create policy "anon write verifications" on verifications for all    using (true);

-- ── 4. Reports (content flags + support messages) ──
create table if not exists reports (
  id            uuid primary key default gen_random_uuid(),
  reporter_id   uuid,
  target_type   text,
  target_id     text,
  reason        text,
  reported_by   text,
  status        text not null default 'open' check(status in ('open','resolved')),
  created_at    timestamptz default now()
);
alter table reports enable row level security;
drop policy if exists "anon read reports"  on reports;
drop policy if exists "anon write reports" on reports;
create policy "anon read reports"  on reports for select using (true);
create policy "anon write reports" on reports for all    using (true);

-- ── 5. Applications (job applications) ──
create table if not exists applications (
  id               uuid primary key default gen_random_uuid(),
  job_id           uuid,
  job_title        text,
  company          text,
  applicant_id     uuid,
  applicant_name   text,
  applicant_phone  text,
  applicant_email  text,
  message          text,
  status           text not null default 'pending',
  employer_id      uuid,
  applied_at       timestamptz default now()
);
alter table applications enable row level security;
drop policy if exists "anon read applications"  on applications;
drop policy if exists "anon write applications" on applications;
create policy "anon read applications"  on applications for select using (true);
create policy "anon write applications" on applications for all    using (true);

-- ── 6. Notifications ──
create table if not exists notifications (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid,
  title      text,
  body       text,
  type       text,
  read       boolean default false,
  created_at timestamptz default now()
);
alter table notifications enable row level security;
drop policy if exists "anon read notifications"  on notifications;
drop policy if exists "anon write notifications" on notifications;
create policy "anon read notifications"  on notifications for select using (true);
create policy "anon write notifications" on notifications for all    using (true);

-- ── 7. Storage bucket for ad images ──
-- Run this ONCE in Supabase SQL Editor:
insert into storage.buckets (id, name, public)
values ('ad-images', 'ad-images', true)
on conflict (id) do nothing;

drop policy if exists "ad images public read"   on storage.objects;
drop policy if exists "ad images anon upload"   on storage.objects;
drop policy if exists "ad images anon update"   on storage.objects;
drop policy if exists "ad images anon delete"   on storage.objects;
create policy "ad images public read"   on storage.objects for select using (bucket_id = 'ad-images');
create policy "ad images anon upload"   on storage.objects for insert with check (bucket_id = 'ad-images');
create policy "ad images anon update"   on storage.objects for update using (bucket_id = 'ad-images');
create policy "ad images anon delete"   on storage.objects for delete using (bucket_id = 'ad-images');
