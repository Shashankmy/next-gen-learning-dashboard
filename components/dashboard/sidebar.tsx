"use client";

import { Dispatch, SetStateAction } from "react";
import {
  BarChart3, BookOpenCheck, Compass, Home,
  PanelLeftClose, PanelLeftOpen, Settings, Trophy
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "courses", label: "Courses", icon: BookOpenCheck },
  { id: "paths", label: "Paths", icon: Compass },
  { id: "insights", label: "Insights", icon: BarChart3 },
  { id: "wins", label: "Wins", icon: Trophy },
  { id: "settings", label: "Settings", icon: Settings }
];

type SidebarProps = {
  activeItem: string;
  setActiveItem: Dispatch<SetStateAction<string>>;
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
};

export function Sidebar({ activeItem, setActiveItem, collapsed, setCollapsed }: SidebarProps) {
  return (
    <aside className={cn(
      "hidden min-h-dvh border-r border-[#1e1e28] bg-[#111118] px-3 py-4 md:block",
      collapsed ? "w-20" : "w-20 lg:w-64"
    )}>
      <nav aria-label="Primary navigation" className="sticky top-4 flex h-[calc(100dvh-2rem)] flex-col">
        <header className="mb-8 flex items-center justify-between">
          <span className="flex size-12 items-center justify-center rounded-[8px] border border-indigo-500/40 bg-[#1e1e3a] text-lg font-semibold text-indigo-300">
            N
          </span>
          <button
            type="button"
            aria-label={collapsed ? "Expand navigation" : "Collapse navigation"}
            onClick={() => setCollapsed(v => !v)}
            className={cn(
              "hidden size-10 items-center justify-center rounded-[8px] border border-[#2a2a35] bg-[#1a1a22] text-[#8b8b9e] outline-none transition-colors hover:bg-[#22222c] hover:text-[#c4c4d4] focus-visible:ring-2 focus-visible:ring-indigo-500 lg:flex",
              collapsed && "lg:hidden"
            )}
          >
            <PanelLeftClose aria-hidden="true" className="size-4" />
          </button>
          {collapsed && (
            <button
              type="button"
              aria-label="Expand navigation"
              onClick={() => setCollapsed(false)}
              className="hidden size-10 items-center justify-center rounded-[8px] border border-[#2a2a35] bg-[#1a1a22] text-[#8b8b9e] outline-none transition-colors hover:bg-[#22222c] hover:text-[#c4c4d4] focus-visible:ring-2 focus-visible:ring-indigo-500 lg:flex"
            >
              <PanelLeftOpen aria-hidden="true" className="size-4" />
            </button>
          )}
        </header>

        <ul className="space-y-1">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  aria-label={item.label}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setActiveItem(item.id)}
                  className={cn(
                    "relative flex h-11 w-full items-center gap-3 overflow-hidden rounded-[8px] px-3 text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500",
                    isActive ? "text-indigo-200" : "text-[#8b8b9e] hover:bg-[#1a1a22] hover:text-[#c4c4d4]"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="desktop-nav-highlight"
                      className="absolute inset-0 rounded-[8px] border border-indigo-500/30 bg-[#1e1e3a]"
                      transition={{ type: "spring", stiffness: 420, damping: 30 }}
                    />
                  )}
                  <Icon aria-hidden="true" className="relative size-5 shrink-0" />
                  <span className={cn("relative hidden truncate text-left lg:block", collapsed && "lg:hidden")}>
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <footer className="mt-auto rounded-[8px] border border-[#2a2a35] bg-[#111118] p-3">
          <p className={cn("hidden text-xs leading-5 text-[#5a5a6e] lg:block", collapsed && "lg:hidden")}>
            System score
          </p>
          <p className="mt-1 text-xl font-semibold text-[#f1f1f5]">94</p>
        </footer>
      </nav>
    </aside>
  );
}

export function MobileNav({ activeItem, setActiveItem }: Pick<SidebarProps, "activeItem" | "setActiveItem">) {
  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-3 bottom-3 z-40 rounded-[10px] border border-[#2a2a35] bg-[#111118] p-2 shadow-[0_4px_24px_rgba(0,0,0,0.5)] md:hidden"
    >
      <ul className="grid grid-cols-5 gap-1">
        {navItems.slice(0, 5).map(item => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          return (
            <li key={item.id}>
              <button
                type="button"
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setActiveItem(item.id)}
                className={cn(
                  "relative flex h-12 w-full items-center justify-center overflow-hidden rounded-[8px] outline-none transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500",
                  isActive ? "text-indigo-300" : "text-[#5a5a6e]"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="mobile-nav-highlight"
                    className="absolute inset-0 rounded-[8px] border border-indigo-500/30 bg-[#1e1e3a]"
                    transition={{ type: "spring", stiffness: 420, damping: 30 }}
                  />
                )}
                <Icon aria-hidden="true" className="relative size-5" />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
