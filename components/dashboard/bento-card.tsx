"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

export const tileVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 24 }
  }
};

type BentoCardProps = {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
};

export function BentoCard({ children, className, ariaLabel }: BentoCardProps) {
  return (
    <motion.article
      aria-label={ariaLabel}
      variants={tileVariants}
      whileHover={{ scale: 1.012, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "relative overflow-hidden rounded-[10px] border border-[#2a2a35] bg-[#18181f] p-5 outline-none transform-gpu will-change-transform transition-[border-color] duration-200 hover:border-[#38384a]",
        className
      )}
    >
      <span aria-hidden="true" className="grain-layer pointer-events-none absolute inset-0 -z-10" />
      {children}
    </motion.article>
  );
}
