"use client";

import { MessageCircleMore, Sparkles } from "lucide-react";
import { BentoCard } from "@/components/dashboard/bento-card";

export function MentorCard() {
  return (
    <BentoCard className="min-h-60" ariaLabel="Mentor signal">
      <header className="flex items-center justify-between gap-4">
        <span className="flex size-11 items-center justify-center rounded-[8px] border border-violet-500/30 bg-[#1a0f2e] text-violet-400">
          <Sparkles aria-hidden="true" className="size-5" />
        </span>
        <span className="rounded-full border border-emerald-600/30 bg-[#0d2018] px-3 py-1 text-xs font-medium text-emerald-400">
          Live
        </span>
      </header>

      <h2 className="mt-7 text-2xl font-semibold leading-tight text-[#f1f1f5]">
        Mentor review is ready for your async state lesson.
      </h2>

      <footer className="mt-8 flex items-center gap-2 text-sm text-[#8b8b9e]">
        <MessageCircleMore aria-hidden="true" className="size-4 text-violet-400" />
        3 notes waiting
      </footer>
    </BentoCard>
  );
}
