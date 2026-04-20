-- Phase 1: content_overrides table
-- Two rows: key='draft' and key='published'
-- Apply this in the Supabase SQL editor for project ejbulfnysfubsbyzfoxc

create table if not exists content_overrides (
  key        text        primary key,
  data       jsonb       not null default '{}',
  updated_at timestamptz not null default now()
);

-- Seed both rows
insert into content_overrides (key, data)
values ('draft', '{}'), ('published', '{}')
on conflict (key) do nothing;

-- RLS: public can read published; writes require service key (bypasses RLS)
alter table content_overrides enable row level security;

create policy "public read published"
  on content_overrides for select
  using (key = 'published');
