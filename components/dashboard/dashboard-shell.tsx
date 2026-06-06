"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ActivityCard } from "@/components/dashboard/activity-card";
import { CourseSection } from "@/components/dashboard/course-section";
import { FocusCard } from "@/components/dashboard/focus-card";
import { HeroCard } from "@/components/dashboard/hero-card";
import { MentorCard } from "@/components/dashboard/mentor-card";
import { MobileNav, Sidebar } from "@/components/dashboard/sidebar";
import type { Course } from "@/types/course";

const gridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08
    }
  }
};

export function DashboardShell({
  courses,
  coursesError
}: {
  courses: Course[];
  coursesError: string | null;
}) {
  const [activeItem, setActiveItem] = useState("home");
  const [collapsed, setCollapsed] = useState(false);

  return (
    <section className="grid min-h-dvh md:grid-cols-[auto_minmax(0,1fr)]">
      <Sidebar
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
      <MobileNav activeItem={activeItem} setActiveItem={setActiveItem} />

      <main className="min-w-0 px-4 pb-24 pt-5 sm:px-6 md:pb-8 lg:px-8">
        <header className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <section>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#5a5a6e]">
              Student command center
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#f1f1f5] md:text-3xl">
              Learning Dashboard
            </h2>
          </section>
          <p className="rounded-full border border-[#2a2a35] bg-[#18181f] px-4 py-2 text-sm text-[#8b8b9e]">
            {coursesError ? "Sync paused" : "Synced from Supabase"}
          </p>
        </header>

        <motion.section
          aria-label="Dashboard tiles"
          variants={gridVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4"
        >
          <HeroCard />
          <FocusCard />
          <MentorCard />
          <CourseSection courses={courses} coursesError={coursesError} />
          <ActivityCard />
        </motion.section>
      </main>
    </section>
  );
}
