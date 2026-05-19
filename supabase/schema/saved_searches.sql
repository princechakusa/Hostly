-- Saved searches (#10)
-- Run in Supabase SQL Editor

create table if not exists saved_searches (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  query       text,
  category    text,
  saved_at    timestamptz default now(),
  last_check  timestamptz default now(),
  constraint  uq_saved_search unique (user_id, query, category)
);

alter table saved_searches enable row level security;

create policy "Users manage their own saved searches"
  on saved_searches for all
  using (user_id = auth.uid())
  with check (user_id = auth.uid());
