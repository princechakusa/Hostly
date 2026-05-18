create table if not exists user_saves (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid not null references auth.users(id) on delete cascade,
  listing_id   text not null,
  saved_at     timestamptz not null default now(),
  unique(user_id, listing_id)
);

alter table user_saves enable row level security;

create policy "Users manage own saves"
  on user_saves for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
