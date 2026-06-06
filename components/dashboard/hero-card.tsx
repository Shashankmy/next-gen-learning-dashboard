"use client";

import { Flame, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { BentoCard } from "@/components/dashboard/bento-card";

export function HeroCard() {
  return (
    <BentoCard className="min-h-[21rem] md:col-span-2 xl:col-span-2" ariaLabel="Welcome back, daily streak overview">
      <header className="flex items-center justify-between gap-4">
        <p className="rounded-full border border-indigo-500/40 bg-[#1e1e3a] px-3 py-1 text-sm font-medium text-indigo-300">
          Daily launch
        </p>
        <span className="flex items-center gap-2 rounded-full border border-amber-600/40 bg-[#2a1e08] px-3 py-1 text-sm font-semibold text-amber-400">
          <Flame aria-hidden="true" className="size-4" />
          18 day streak
        </span>
      </header>

      <section className="mt-10 max-w-xl">
        <h1 className="text-balance text-4xl font-semibold leading-[1.05] text-[#f1f1f5] sm:text-5xl">
          Welcome back, Shash
        </h1>
        <p className="mt-5 max-w-lg text-base leading-7 text-[#8b8b9e]">
          Your strongest learning window is open. Keep today focused on the course that moves your roadmap forward fastest.
        </p>
      </section>

      <footer className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {[["42h", "Deep work"], ["7", "Lessons queued"], ["91%", "Weekly goal"]].map(([value, label], i) => (
          <motion.span
            key={label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 240, damping: 24, delay: 0.35 + i * 0.08 }}
            className="rounded-[8px] border border-[#2a2a35] bg-[#111118] p-4"
          >
            <span className="flex items-center gap-2 text-2xl font-semibold text-[#f1f1f5]">
              {value}
              {i === 2 && <Zap aria-hidden="true" className="size-4 text-indigo-400" />}
            </span>
            <span className="mt-1 block text-xs uppercase tracking-[0.16em] text-[#5a5a6e]">
              {label}
            </span>
          </motion.span>
        ))}
      </footer>
    </BentoCard>
  );
}
