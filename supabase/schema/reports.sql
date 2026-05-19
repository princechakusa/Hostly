-- Content reports (users reporting listings or other users)
-- Run in Supabase SQL Editor

create table if not exists reports (
  id          uuid primary key default gen_random_uuid(),
  target_type text not null check (target_type in ('listing','user')),
  target_id   uuid not null,
  reason      text not null,
  reported_by uuid references auth.users(id) on delete set null,
  status      text not null default 'open' check (status in ('open','resolved')),
  created_at  timestamptz not null default now()
);

alter table reports enable row level security;

-- Anyone authenticated can submit a report
create policy "Authenticated users can report"
  on reports for insert
  to authenticated
  with check (reported_by = auth.uid());

-- Users can read their own reports
create policy "Users read own reports"
  on reports for select
  to authenticated
  using (reported_by = auth.uid());

-- Prevent duplicate reports from same user on same target
create unique index if not exists uq_report
  on reports (target_id, reported_by);
