"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import { BentoCard } from "@/components/dashboard/bento-card";
import { cn } from "@/lib/utils";

const intensityClasses = [
  "bg-[#1e1e28]",
  "bg-[#3d2a08]",
  "bg-[#7c4e10]",
  "bg-[#b86a0e]",
  "bg-[#d97706]"
];

export function ActivityCard() {
  const cells = useMemo(
    () => Array.from({ length: 84 }, (_, i) => {
      const wave = Math.sin(i * 0.72) + Math.cos(i * 0.27);
      return Math.max(0, Math.min(4, Math.round(wave + 2)));
    }), []
  );

  return (
    <BentoCard className="min-h-80 md:col-span-2 xl:col-span-2" ariaLabel="Learning activity">
      <header className="flex items-start justify-between gap-4">
        <section>
          <p className="text-sm font-medium text-amber-500">Activity pulse</p>
          <h2 className="mt-2 text-2xl font-semibold text-[#f1f1f5]">Momentum map</h2>
        </section>
        <span className="flex size-11 items-center justify-center rounded-[8px] border border-amber-600/30 bg-[#2a1e08] text-amber-500">
          <Activity aria-hidden="true" className="size-5" />
        </span>
      </header>

      <section aria-label="84 day contribution graph" className="mt-8 grid grid-flow-col grid-rows-7 gap-1.5 overflow-hidden">
        {cells.map((intensity, i) => (
          <motion.span
            key={i}
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.82 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.15 + i * 0.006 }}
            className={cn("aspect-square min-w-3 rounded-[3px]", intensityClasses[intensity])}
          />
        ))}
      </section>

      <footer className="mt-8 flex flex-wrap items-center justify-between gap-4 text-sm text-[#8b8b9e]">
        <span>12 week rhythm</span>
        <span className="font-semibold text-[#f1f1f5]">+24% consistency</span>
      </footer>
    </BentoCard>
  );
}
