# Next-Gen Learning Dashboard

**Live demo → [next-gen-learning-dashboard-eight-peach.vercel.app](https://next-gen-learning-dashboard-eight-peach.vercel.app/)**

A high-fidelity student dashboard for the Frontend Intern Challenge. It uses the Next.js App Router, Supabase server-side data fetching, Tailwind CSS, Framer Motion, and Lucide React.

## Stack

- Next.js App Router with React Server Components
- Supabase Postgres via `@supabase/supabase-js`
- Tailwind CSS dark-mode interface
- Framer Motion for staggered loads, card springs, progress animation, skeleton pulses, and navigation layout highlights
- Lucide React icons rendered dynamically from the Supabase `icon_name` field

## Server and Client Split

`app/page.tsx` is a Server Component. It calls `getCourses()` from `lib/courses.ts`, which creates a Supabase client using server-only environment variables and queries the `courses` table.

The animated dashboard lives in client components under `components/dashboard/`. Course data is passed from the Server Component into `DashboardShell`, so Framer Motion handles interaction and entrance animation without moving database access into the browser.

## Supabase Setup

1. Create a Supabase project.
2. Open the SQL editor and run `supabase/schema.sql`.
3. Copy `.env.example` to `.env.local`.
4. Fill in:

```bash
SUPABASE_URL="https://your-project-ref.supabase.co"
SUPABASE_ANON_KEY="your-supabase-anon-key"
```

The seed script inserts four mock courses:

- Advanced React Patterns
- Supabase Data Modeling
- Motion Systems for UI
- AI-Assisted Study Design

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run typecheck
npm run build
```

## Notes

- Hover and entrance animations use transform and opacity to avoid layout shifts.
- Sidebar highlights use Framer Motion `layoutId` springs.
- Course progress bars animate from `0%` to the Supabase value on first render.
- `app/loading.tsx` renders a Framer Motion skeleton while the route is streaming.
- Database failures are rendered as an in-dashboard error state instead of crashing the route.
