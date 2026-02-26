"use client";

import { useState, useEffect } from "react";
import { ChevronUp, MessageCircle } from "lucide-react";

const WHATSAPP = "918121426651";

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3 sm:bottom-8 sm:right-8">
      {/* Scroll to top — gradient (logo-style) with three dots */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="group flex flex-col items-center transition-all duration-300 hover:scale-105"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white shadow-lg shadow-rose-500/30 ring-2 ring-white transition group-hover:shadow-xl group-hover:shadow-rose-500/40">
            <ChevronUp className="h-6 w-6" strokeWidth={2.5} />
          </span>
          <span className="mt-1.5 flex gap-1">
            <span className="h-1 w-1 rounded-full bg-pink-500 opacity-80 group-hover:opacity-100" />
            <span className="h-1 w-1 rounded-full bg-rose-500 opacity-80 group-hover:opacity-100" />
            <span className="h-1 w-1 rounded-full bg-amber-400 opacity-80 group-hover:opacity-100" />
          </span>
        </button>
      )}

      {/* WhatsApp — green with gradient ring to match theme */}
      <a
        href={`https://wa.me/${WHATSAPP}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex flex-col items-center transition-all duration-300 hover:scale-105"
      >
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 ring-2 ring-white transition group-hover:bg-green-600 group-hover:shadow-xl group-hover:shadow-green-500/40">
          {/* Gradient ring (theme accent) */}
          <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-pink-500/30 via-rose-500/30 to-amber-500/30 opacity-0 blur-sm transition group-hover:opacity-100" />
          <MessageCircle className="relative h-7 w-7" strokeWidth={2} />
        </span>
        <span className="mt-1.5 flex gap-1">
          <span className="h-1 w-1 rounded-full bg-green-500/80 group-hover:bg-green-600" />
          <span className="h-1 w-1 rounded-full bg-green-500/60 group-hover:bg-green-600" />
          <span className="h-1 w-1 rounded-full bg-green-500/40 group-hover:bg-green-600" />
        </span>
      </a>
    </div>
  );
}
