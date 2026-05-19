-- Server-side content moderation (#2)
-- Run in Supabase SQL Editor

create or replace function check_listing_content()
returns trigger language plpgsql as $$
declare
  banned_words text[] := array[
    'scam','fraud','fake','stolen','illegal','drugs','weapon','gun',
    'pirated','counterfeit','smuggle','smuggling','bribe','corrupt'
  ];
  w text;
  content text;
begin
  content := lower(coalesce(new.title,'') || ' ' || coalesce(new.description,''));
  foreach w in array banned_words loop
    if content like '%' || w || '%' then
      raise exception 'Listing contains prohibited content: %', w;
    end if;
  end loop;
  return new;
end;
$$;

drop trigger if exists trg_listing_moderation on listings;
create trigger trg_listing_moderation
  before insert or update on listings
  for each row execute function check_listing_content();
