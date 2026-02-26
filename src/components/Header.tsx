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
      <header className="sticky top-0 z-50 border-b border-rose-200/60 bg-white/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo — same as footer */}
          <Link href="/" className="flex shrink-0 flex-col items-start">
            <span className="font-handwriting text-xl font-bold text-zinc-900 md:text-2xl">
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                Mahi Escorts
              </span>
            </span>
            <div className="mt-1 flex gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            </div>
          </Link>

          {/* Desktop nav — clean, logo-style accents */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition hover:bg-rose-50 hover:text-rose-700"
              >
                {label}
              </Link>
            ))}
            <div className="relative ml-1" ref={areasRef}>
              <button
                type="button"
                onClick={() => setAreasOpen((o) => !o)}
                className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition hover:bg-rose-50 hover:text-rose-700"
                aria-expanded={areasOpen}
                aria-haspopup="true"
              >
                Areas
                <ChevronDown className={`h-4 w-4 transition duration-200 ${areasOpen ? "rotate-180 text-rose-500" : "text-zinc-400"}`} />
              </button>
              {areasOpen && (
                <div className="absolute left-0 top-full z-50 mt-1.5 w-72 overflow-hidden rounded-xl border border-rose-200/80 bg-white py-2 shadow-xl shadow-rose-900/10">
                  <div className="flex items-center gap-1.5 border-b border-rose-100 px-4 py-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Service areas</p>
                  </div>
                  <Link
                    href="/areas"
                    className="block border-b border-rose-100 px-4 py-2.5 text-sm font-medium text-rose-600 transition hover:bg-rose-50"
                    onClick={() => setAreasOpen(false)}
                  >
                    View all areas →
                  </Link>
                  <ul className="max-h-64 overflow-y-auto py-1">
                    {goaAreas.map((area) => (
                      <li key={area.slug}>
                        <Link
                          href={`/areas/${area.slug}`}
                          className="block px-4 py-2 text-sm text-zinc-600 transition hover:bg-rose-50 hover:text-rose-700"
                          onClick={() => setAreasOpen(false)}
                        >
                          {area.name}
                          <span className="ml-1.5 text-xs text-zinc-400">{area.description}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </nav>

          {/* CTAs — gradient (logo-style) + WhatsApp */}
          <div className="hidden items-center gap-2 md:flex">
            <a
              href="tel:+918121426651"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
            >
              <PhoneIcon className="h-4 w-4" />
              Call
            </a>
            <a
              href="https://wa.me/918121426651"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-green-500/80 bg-white px-4 py-2 text-sm font-semibold text-green-700 transition hover:bg-green-50"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="rounded-lg p-2.5 text-zinc-600 transition hover:bg-rose-50 hover:text-rose-700 md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-pink-200/80 via-rose-300/80 to-transparent" />
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm md:hidden"
          aria-hidden
          onClick={() => setMobileOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-sm transform bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col border-l border-rose-200/60">
          <div className="flex items-center justify-between border-b border-rose-100 px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="font-handwriting text-lg font-bold text-zinc-900">
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                  Menu
                </span>
              </span>
              <div className="flex gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              </div>
            </div>
            <button
              type="button"
              className="rounded-lg p-2 text-zinc-500 transition hover:bg-rose-50 hover:text-rose-700"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-4 py-5">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-zinc-600 transition hover:bg-rose-50 hover:text-rose-700"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="mt-5 border-t border-rose-100 pt-4">
              <p className="flex items-center gap-1.5 px-4 pb-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                Areas in Goa
              </p>
              <Link
                href="/areas"
                className="block rounded-lg px-4 py-2.5 text-sm font-medium text-rose-600 hover:bg-rose-50"
                onClick={() => setMobileOpen(false)}
              >
                View all areas
              </Link>
              <ul className="mt-1 space-y-0.5">
                {goaAreas.map((area) => (
                  <li key={area.slug}>
                    <Link
                      href={`/areas/${area.slug}`}
                      className="block rounded-lg px-4 py-2 text-sm text-zinc-600 hover:bg-rose-50 hover:text-rose-700"
                      onClick={() => setMobileOpen(false)}
                    >
                      {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <div className="border-t border-rose-100 p-4 space-y-2">
            <a
              href="tel:+918121426651"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 py-3.5 text-sm font-semibold text-white shadow-md"
              onClick={() => setMobileOpen(false)}
            >
              <PhoneIcon className="h-4 w-4" />
              Call
            </a>
            <a
              href="https://wa.me/918121426651"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-green-500/80 bg-white py-3.5 text-sm font-semibold text-green-700 hover:bg-green-50"
              onClick={() => setMobileOpen(false)}
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
