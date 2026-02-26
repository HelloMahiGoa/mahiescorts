"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { goaAreas } from "@/data/goaAreas";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const areasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!areasOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (areasRef.current && !areasRef.current.contains(e.target as Node)) setAreasOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [areasOpen]);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-zinc-900 via-rose-950/90 to-zinc-900 shadow-lg shadow-black/20 backdrop-blur-md">
        {/* Subtle shine overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
        <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
          {/* Logo — bold & gradient */}
          <Link href="/" className="group flex shrink-0 items-center gap-3">
            <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-rose-700 shadow-lg shadow-rose-500/30 ring-2 ring-rose-400/30 transition group-hover:shadow-rose-500/50 group-hover:ring-rose-400/50">
              <span className="text-lg font-black text-white">M</span>
            </span>
            <div>
              <span className="block text-xl font-bold tracking-tight text-white drop-shadow-sm md:text-2xl">
                Mahi <span className="bg-gradient-to-r from-rose-300 to-pink-400 bg-clip-text text-transparent">Escorts</span>
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-rose-400/90">Goa</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 md:flex">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="group relative rounded-lg px-4 py-2.5 text-sm font-medium text-zinc-300 transition hover:text-white"
              >
                <span className="relative z-10">{label}</span>
                <span className="absolute inset-0 rounded-lg bg-white/5 opacity-0 transition hover:opacity-100" />
                <span className="absolute bottom-1.5 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-gradient-to-r from-rose-400 to-pink-400 transition-all duration-300 group-hover:w-3/4" />
              </Link>
            ))}
            <div className="relative ml-1" ref={areasRef}>
              <button
                type="button"
                onClick={() => setAreasOpen((o) => !o)}
                className="relative flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-medium text-zinc-300 transition hover:text-white"
                aria-expanded={areasOpen}
                aria-haspopup="true"
              >
                <span className="relative z-10">Areas</span>
                <span className="absolute inset-0 rounded-lg bg-white/5 opacity-0 transition opacity-200 hover:opacity-100" />
                <ChevronDown className={`relative z-10 h-4 w-4 transition duration-200 ${areasOpen ? "rotate-180 text-rose-400" : ""}`} />
              </button>
              {areasOpen && (
                <div className="absolute left-0 top-full z-50 mt-2 w-80 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/95 py-2 shadow-2xl shadow-black/40 backdrop-blur-xl">
                  <div className="border-b border-white/10 px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-rose-400/90">Service areas</p>
                  </div>
                  <Link
                    href="/areas"
                    className="block border-b border-white/10 px-4 py-3 text-sm font-medium text-rose-300 transition hover:bg-white/5 hover:text-rose-200"
                    onClick={() => setAreasOpen(false)}
                  >
                    View all areas →
                  </Link>
                  <ul className="max-h-72 overflow-y-auto py-2">
                    {goaAreas.map((area) => (
                      <li key={area.slug}>
                        <Link
                          href={`/areas/${area.slug}`}
                          className="block px-4 py-2.5 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
                          onClick={() => setAreasOpen(false)}
                        >
                          <span className="font-medium">{area.name}</span>
                          <span className="ml-1.5 text-xs text-zinc-500">{area.description}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </nav>

          {/* CTAs — eye-catching */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="tel:+918121426651"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-rose-500/30 transition hover:from-rose-400 hover:to-rose-500 hover:shadow-rose-500/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <PhoneIcon className="relative h-4 w-4" />
              <span className="relative">Call Now</span>
            </a>
            <a
              href="https://wa.me/918121426651"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl border-2 border-emerald-400/80 bg-emerald-500/10 px-5 py-2.5 text-sm font-semibold text-emerald-300 transition hover:border-emerald-400 hover:bg-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/20"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="rounded-xl p-2.5 text-zinc-400 transition hover:bg-white/10 hover:text-white md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Bottom accent line */}
        <div className="h-px bg-gradient-to-r from-transparent via-rose-500/50 to-transparent" />
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
          aria-hidden
          onClick={() => setMobileOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-sm transform bg-gradient-to-b from-zinc-900 to-zinc-950 shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col border-l border-white/10">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
            <span className="bg-gradient-to-r from-rose-300 to-pink-400 bg-clip-text text-lg font-bold text-transparent">Menu</span>
            <button
              type="button"
              className="rounded-xl p-2 text-zinc-400 transition hover:bg-white/10 hover:text-white"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-4 py-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block rounded-xl px-4 py-3.5 text-base font-medium text-zinc-300 transition hover:bg-white/5 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="mt-4">
              <p className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-rose-400/80">Areas in Goa</p>
              <Link
                href="/areas"
                className="block rounded-xl px-4 py-3 text-base font-medium text-rose-300 transition hover:bg-white/5"
                onClick={() => setMobileOpen(false)}
              >
                View all areas
              </Link>
              <ul className="mt-1 space-y-0.5">
                {goaAreas.map((area) => (
                  <li key={area.slug}>
                    <Link
                      href={`/areas/${area.slug}`}
                      className="block rounded-xl px-4 py-2.5 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-zinc-200"
                      onClick={() => setMobileOpen(false)}
                    >
                      {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <div className="border-t border-white/10 p-4 space-y-3">
            <a
              href="tel:+918121426651"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 py-4 text-base font-semibold text-white shadow-lg shadow-rose-500/30"
              onClick={() => setMobileOpen(false)}
            >
              <PhoneIcon className="h-5 w-5" />
              Call Now
            </a>
            <a
              href="https://wa.me/918121426651"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-emerald-400/80 bg-emerald-500/10 py-4 text-base font-semibold text-emerald-300"
              onClick={() => setMobileOpen(false)}
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
