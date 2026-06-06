# Next-Gen Learning Dashboard

**Live → [next-gen-learning-dashboard-eight-peach.vercel.app](https://next-gen-learning-dashboard-eight-peach.vercel.app/)**

Built for the Frontend Intern Challenge. A student dashboard that pulls real course data from Supabase and animates everything with Framer Motion.

## What's in it

- Next.js App Router — data fetching happens server-side in `app/page.tsx`, nothing sensitive hits the browser
- Supabase Postgres for course data (title, progress, icon)
- Tailwind CSS for styling, dark mode only
- Framer Motion for the entrance animations, sidebar highlight transitions, and progress bar fills
- Lucide icons — the icon rendered on each course card is driven by the `icon_name` column in the DB, so adding a new course with a different icon just works

## Running locally

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and fill in your Supabase project URL and anon key. Then run the SQL in `supabase/schema.sql` to set up the table and seed data.

```env
SUPABASE_URL=your-project-url
SUPABASE_ANON_KEY=your-anon-key
```

## How the data flows

The page component is a server component — it fetches courses from Supabase before anything renders. That data gets passed down to `DashboardShell` which is where all the client-side animation stuff lives. Keeps the DB logic and the animation logic completely separate.

If Supabase is unreachable or the query fails, the dashboard renders an error state inside the grid instead of crashing the whole page.

## A few implementation notes

- All animations use `transform` and `opacity` — no layout shifts
- The sidebar nav highlight uses `layoutId` so it springs between items instead of just swapping classes
- Course progress bars animate from 0 to the actual value on first render using a spring
- `app/loading.tsx` shows an animated skeleton while the server is fetching
