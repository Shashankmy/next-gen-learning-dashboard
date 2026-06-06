create extension if not exists "pgcrypto";

create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null check (progress >= 0 and progress <= 100),
  icon_name text not null default 'BookOpenCheck',
  created_at timestamp with time zone not null default now()
);

alter table public.courses enable row level security;

drop policy if exists "Courses are readable" on public.courses;

create policy "Courses are readable"
on public.courses
for select
to anon
using (true);

insert into public.courses (title, progress, icon_name)
select seed.title, seed.progress, seed.icon_name
from (
  values
    ('Advanced React Patterns', 75, 'Code2'),
    ('Supabase Data Modeling', 62, 'Database'),
    ('Motion Systems for UI', 88, 'Orbit'),
    ('AI-Assisted Study Design', 47, 'BrainCircuit')
) as seed(title, progress, icon_name)
where not exists (
  select 1
  from public.courses existing
  where existing.title = seed.title
);
