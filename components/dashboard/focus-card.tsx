"use client";

import { Clock3, Target } from "lucide-react";
import { BentoCard } from "@/components/dashboard/bento-card";

export function FocusCard() {
  return (
    <BentoCard className="min-h-60" ariaLabel="Next focus block">
      <header className="flex items-center justify-between gap-4">
        <span className="flex size-11 items-center justify-center rounded-[8px] border border-rose-500/30 bg-[#2a0e14] text-rose-400">
          <Target aria-hidden="true" className="size-5" />
        </span>
        <span className="text-sm font-medium text-rose-400">Next up</span>
      </header>

      <h2 className="mt-7 text-2xl font-semibold leading-tight text-[#f1f1f5]">
        Refactor one tricky pattern into a reusable hook.
      </h2>

      <footer className="mt-8 flex items-center gap-2 text-sm text-[#8b8b9e]">
        <Clock3 aria-hidden="true" className="size-4 text-rose-500" />
        32 minute sprint
      </footer>
    </BentoCard>
  );
}
