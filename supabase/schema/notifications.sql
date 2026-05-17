-- ───────────────────────────────────────────────────────────
-- Notifications table for Hostly
-- Run this in the Supabase SQL editor to create the table,
-- enable RLS, and add the policies the client expects.
-- ───────────────────────────────────────────────────────────

create table if not exists public.notifications (
  id          text primary key,
  user_id     uuid not null references auth.users(id) on delete cascade,
  title       text not null,
  body        text default '',
  type        text default 'info',
  read        boolean not null default false,
  created_at  timestamptz not null default now(),
  meta        jsonb default '{}'::jsonb
);

create index if not exists notifications_user_created_idx
  on public.notifications (user_id, created_at desc);

create index if not exists notifications_user_unread_idx
  on public.notifications (user_id) where read = false;

alter table public.notifications enable row level security;

-- A user can read only their own notifications
drop policy if exists "own notifications: select" on public.notifications;
create policy "own notifications: select"
  on public.notifications for select
  using (auth.uid() = user_id);

-- A user can mark their own notifications as read / update meta
drop policy if exists "own notifications: update" on public.notifications;
create policy "own notifications: update"
  on public.notifications for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- The app inserts notifications via the user's session; allow that.
-- (System notifications should be inserted server-side with the service-role key.)
drop policy if exists "own notifications: insert" on public.notifications;
create policy "own notifications: insert"
  on public.notifications for insert
  with check (auth.uid() = user_id);

-- A user can delete their own notifications
drop policy if exists "own notifications: delete" on public.notifications;
create policy "own notifications: delete"
  on public.notifications for delete
  using (auth.uid() = user_id);

-- Enable Postgres Changes (Realtime) on this table:
-- Supabase Dashboard → Database → Replication → enable for `notifications`.
