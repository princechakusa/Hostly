-- Supabase Storage: listings-photos bucket
-- Run this in the Supabase SQL editor (Dashboard → SQL Editor)
-- IMPORTANT: You must also enable the Storage extension in Dashboard → Database → Extensions

-- Create the public bucket (5 MB per file, JPEG/PNG/WebP only)
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'listings-photos',
  'listings-photos',
  true,
  5242880,
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do nothing;

-- Allow anyone to read photos (listings are public)
create policy "Public read for listing photos"
  on storage.objects for select
  using (bucket_id = 'listings-photos');

-- Authenticated users can upload into their own sub-folder: listings/{user_id}/...
create policy "Authenticated users can upload listing photos"
  on storage.objects for insert
  to authenticated
  with check (
    bucket_id = 'listings-photos'
    and split_part(name, '/', 1) = 'listings'
    and split_part(name, '/', 2) = auth.uid()::text
  );

-- Users can delete only their own photos
create policy "Users can delete their own listing photos"
  on storage.objects for delete
  to authenticated
  using (
    bucket_id = 'listings-photos'
    and split_part(name, '/', 2) = auth.uid()::text
  );
