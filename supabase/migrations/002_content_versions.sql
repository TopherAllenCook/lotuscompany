-- Version snapshots — one row per publish action, last 10 kept
create table if not exists content_versions (
  id         bigserial   primary key,
  data       jsonb       not null default '{}',
  created_at timestamptz not null default now()
);

-- Admins only — no public SELECT policy (service key used server-side)
alter table content_versions enable row level security;
