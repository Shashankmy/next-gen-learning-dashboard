"use client";

import { AlertTriangle, RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-dvh items-center justify-center px-6 py-10">
      <section className="max-w-md rounded-[8px] border border-white/10 bg-white/[0.04] p-6 shadow-glow backdrop-blur">
        <span className="flex size-12 items-center justify-center rounded-[8px] border border-rose-300/20 bg-rose-400/10 text-rose-200">
          <AlertTriangle aria-hidden="true" className="size-5" />
        </span>
        <h1 className="mt-5 text-2xl font-semibold text-white">Dashboard paused</h1>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          {error.message || "The learning dashboard could not render this session."}
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 inline-flex items-center gap-2 rounded-[8px] border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white outline-none transition-colors hover:bg-white/15 focus-visible:ring-2 focus-visible:ring-teal-200"
        >
          <RotateCcw aria-hidden="true" className="size-4" />
          Retry
        </button>
      </section>
    </main>
  );
}
