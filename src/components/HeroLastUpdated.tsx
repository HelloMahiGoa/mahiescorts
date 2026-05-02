"use client";

import { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";

const IST = "Asia/Kolkata";

function formatIstLong(d: Date) {
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: IST,
  });
}

function formatIstIsoDate(d: Date) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: IST,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(d);
}

/**
 * Shown in every Hero — date refreshes on each visit (client) so it tracks the
 * current calendar day in India, even when the route is statically generated.
 */
export default function HeroLastUpdated() {
  const [label, setLabel] = useState<string | null>(null);
  const [iso, setIso] = useState<string | null>(null);

  useEffect(() => {
    const now = new Date();
    setLabel(formatIstLong(now));
    setIso(formatIstIsoDate(now));
  }, []);

  return (
    <div
      className="inline-flex max-w-full shrink-0 self-start items-stretch gap-0 overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-r from-white/[0.08] to-white/[0.04] shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-md sm:self-center"
      aria-live="polite"
    >
      <div className="flex items-center justify-center bg-gradient-to-b from-amber-500/25 to-pink-500/20 px-3.5 sm:px-4">
        <CalendarDays className="h-5 w-5 text-amber-200/95 sm:h-5 sm:w-5" aria-hidden />
      </div>
      <div className="flex min-w-0 flex-col justify-center px-4 py-2.5 sm:py-3 sm:pl-4 sm:pr-5">
        <span className="text-[10px] font-semibold uppercase leading-none tracking-[0.18em] text-pink-200/90">
          Last updated
        </span>
        {label && iso ? (
          <time
            dateTime={iso}
            className="mt-1.5 truncate font-handwriting text-base font-bold leading-tight tracking-tight text-white sm:text-lg"
          >
            <span className="bg-gradient-to-r from-amber-100 via-pink-100 to-purple-100 bg-clip-text text-transparent">
              {label}
            </span>
          </time>
        ) : (
          <span
            className="mt-1.5 block h-[1.25rem] w-40 animate-pulse rounded-md bg-white/10 sm:h-6 sm:w-48"
            aria-hidden
          />
        )}
      </div>
    </div>
  );
}
