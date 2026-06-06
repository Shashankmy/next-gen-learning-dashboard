"use client";

import { motion } from "framer-motion";

const skeletonTiles = [
  "md:col-span-2 xl:col-span-2 min-h-[21rem]",
  "min-h-60", "min-h-60", "min-h-60", "min-h-60", "min-h-60",
  "md:col-span-2 xl:col-span-2 min-h-80"
];

export function DashboardSkeleton() {
  return (
    <section className="grid min-h-dvh md:grid-cols-[5rem_minmax(0,1fr)]">
      <aside className="hidden min-h-dvh border-r border-[#1e1e28] bg-[#111118] px-3 py-4 md:block">
        <nav aria-label="Loading navigation" className="space-y-4">
          <span className="block size-12 rounded-[8px] bg-[#1e1e28]" />
          <span className="block h-11 rounded-[8px] bg-[#1e1e28]" />
          <span className="block h-11 rounded-[8px] bg-[#1a1a22]" />
          <span className="block h-11 rounded-[8px] bg-[#1a1a22]" />
        </nav>
      </aside>
      <main className="px-4 pb-24 pt-5 sm:px-6 md:pb-8 lg:px-8">
        <header className="mb-6">
          <span className="block h-4 w-48 rounded-full bg-[#1e1e28]" />
          <span className="mt-3 block h-9 w-72 rounded-full bg-[#2a2a35]" />
        </header>
        <section aria-label="Loading dashboard tiles" className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {skeletonTiles.map((cls, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0.4 }}
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.05 }}
              className={`${cls} overflow-hidden rounded-[10px] border border-[#2a2a35] bg-[#18181f] p-5`}
            >
              <span className="block h-11 w-11 rounded-[8px] bg-[#2a2a35]" />
              <span className="mt-8 block h-5 w-3/4 rounded-full bg-[#2a2a35]" />
              <span className="mt-3 block h-4 w-1/2 rounded-full bg-[#22222c]" />
              <span className="mt-8 block h-2 w-full rounded-full bg-[#22222c]" />
            </motion.article>
          ))}
        </section>
      </main>
    </section>
  );
}
