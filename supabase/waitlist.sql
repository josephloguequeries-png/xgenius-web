create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  user_type text,
  betting_experience text,
  main_interest text,
  preferred_markets text[] default '{}',
  pricing_interest text,
  source_page text,
  created_at timestamptz not null default now()
);

create index if not exists waitlist_created_at_idx on public.waitlist (created_at desc);
create index if not exists waitlist_source_page_idx on public.waitlist (source_page);
create index if not exists waitlist_pricing_interest_idx on public.waitlist (pricing_interest);
