create extension if not exists pgcrypto;

create table if not exists public.analytics_events (
  id uuid primary key default gen_random_uuid(),
  event_name text not null,
  page text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists analytics_events_created_at_idx
  on public.analytics_events (created_at desc);

create index if not exists analytics_events_event_name_idx
  on public.analytics_events (event_name);

create index if not exists analytics_events_page_idx
  on public.analytics_events (page);

alter table public.analytics_events enable row level security;

-- Service role bypasses RLS. Keep client roles blocked until proper internal auth is added.
drop policy if exists "No client access to analytics_events" on public.analytics_events;
create policy "No client access to analytics_events"
  on public.analytics_events
  for all
  to anon, authenticated
  using (false)
  with check (false);
