"use client";

import {
  Atom, BookOpenCheck, BrainCircuit, Code2, Database,
  GraduationCap, LineChart, LucideIcon, NotebookPen, Orbit, Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import { BentoCard } from "@/components/dashboard/bento-card";
import type { Course } from "@/types/course";

const courseIcons: Record<string, LucideIcon> = {
  Atom, BookOpenCheck, BrainCircuit, Code2, Database,
  GraduationCap, LineChart, NotebookPen, Orbit, Sparkles
};

const iconStyles = [
  { bg: "bg-[#1e1e3a]", border: "border-indigo-500/30", text: "text-indigo-400" },
  { bg: "bg-[#1e1530]", border: "border-violet-500/30", text: "text-violet-400" },
  { bg: "bg-[#0e1e30]", border: "border-blue-500/30",   text: "text-blue-400"   },
  { bg: "bg-[#0d2020]", border: "border-emerald-500/30", text: "text-emerald-400" }
];

const progressColors = ["bg-indigo-500", "bg-violet-500", "bg-blue-500", "bg-emerald-500"];

export function CourseCard({ course, index }: { course: Course; index: number }) {
  const Icon = courseIcons[course.iconName] ?? BookOpenCheck;
  const style = iconStyles[index % iconStyles.length];

  return (
    <BentoCard className="min-h-60" ariaLabel={`${course.title}, ${course.progress}% complete`}>
      <header className="flex items-start justify-between gap-4">
        <span className={`flex size-12 shrink-0 items-center justify-center rounded-[8px] border ${style.border} ${style.bg} ${style.text}`}>
          <Icon aria-hidden="true" className="size-5" />
        </span>
        <span className="rounded-full border border-[#2a2a35] bg-[#111118] px-3 py-1 text-xs font-medium text-[#8b8b9e]">
          Active
        </span>
      </header>

      <h2 className="mt-6 text-balance text-xl font-semibold leading-tight text-[#f1f1f5]">
        {course.title}
      </h2>

      <footer className="mt-8">
        <p className="flex items-center justify-between text-sm text-[#8b8b9e]">
          <span>Progress</span>
          <span className="font-semibold text-[#f1f1f5]">{course.progress}%</span>
        </p>
        <span className="mt-3 block h-2 overflow-hidden rounded-full bg-[#2a2a35]">
          <motion.span
            aria-hidden="true"
            initial={{ width: "0%" }}
            animate={{ width: `${course.progress}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 22, delay: 0.25 + index * 0.08 }}
            className={`block h-full rounded-full ${progressColors[index % progressColors.length]}`}
          />
        </span>
      </footer>
    </BentoCard>
  );
}
