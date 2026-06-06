"use client";

import { AlertCircle } from "lucide-react";
import { BentoCard } from "@/components/dashboard/bento-card";
import { CourseCard } from "@/components/dashboard/course-card";
import type { Course } from "@/types/course";

export function CourseSection({ courses, coursesError }: { courses: Course[]; coursesError: string | null }) {
  if (coursesError) {
    return (
      <BentoCard className="min-h-60 md:col-span-2" ariaLabel="Course sync unavailable">
        <span className="flex size-11 items-center justify-center rounded-[8px] border border-rose-500/30 bg-[#2a0e14]">
          <AlertCircle aria-hidden="true" className="size-5 text-rose-400" />
        </span>
        <h2 className="mt-6 text-2xl font-semibold text-[#f1f1f5]">Course sync unavailable</h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-rose-400/80">{coursesError}</p>
      </BentoCard>
    );
  }

  if (courses.length === 0) {
    return (
      <BentoCard className="min-h-60 md:col-span-2" ariaLabel="No active courses">
        <h2 className="text-2xl font-semibold text-[#f1f1f5]">No active courses</h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-[#8b8b9e]">Supabase returned an empty courses table.</p>
      </BentoCard>
    );
  }

  return courses.map((course, index) => (
    <CourseCard key={course.id} course={course} index={index} />
  ));
}
