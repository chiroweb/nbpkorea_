-- Run this in Supabase SQL Editor

-- popups table
create table if not exists popups (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  image_url text not null,
  link_url text,
  is_active boolean not null default true,
  start_date timestamptz not null,
  end_date timestamptz not null,
  created_at timestamptz not null default now()
);

-- news table
create table if not exists news (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  category text not null,
  title text not null,
  excerpt text not null,
  image_url text not null default '',
  read_time text not null default '5분',
  content jsonb not null default '[]'::jsonb,
  is_published boolean not null default true,
  date text not null,
  created_at timestamptz not null default now()
);

-- Enable RLS (Row Level Security)
alter table popups enable row level security;
alter table news enable row level security;

-- Allow public read access
create policy "Public read popups" on popups for select using (true);
create policy "Public read news" on news for select using (true);

-- Allow anon full access (since we handle auth at the app level)
create policy "Anon all popups" on popups for all using (true) with check (true);
create policy "Anon all news" on news for all using (true) with check (true);
