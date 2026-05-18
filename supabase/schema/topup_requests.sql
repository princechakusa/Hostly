-- Manual top-up requests (EcoCash / OneMoney / bank transfers)
-- Run in Supabase SQL Editor

create table if not exists topup_requests (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  user_name   text,
  amount      numeric(12,2) not null check (amount > 0),
  method      text not null,
  reference   text not null,
  status      text not null default 'pending' check (status in ('pending','approved','rejected')),
  created_at  timestamptz not null default now(),
  reviewed_at timestamptz,
  constraint  uq_topup_ref unique (reference)
);

alter table topup_requests enable row level security;

-- Users can insert and view their own requests
create policy "Users manage their own topup requests"
  on topup_requests for all
  to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());
