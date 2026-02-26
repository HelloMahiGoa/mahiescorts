import Link from "next/link";
import { goaAreas } from "@/data/goaAreas";

export default function Footer() {
  return (
    <footer className="border-t border-rose-200/60 bg-gradient-to-b from-rose-50/40 to-zinc-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="font-handwriting text-2xl font-bold text-zinc-900">
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                Mahi Escorts
              </span>
            </h2>
            <div className="mt-2 flex gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600">
              Escorts and call girls in Goa. Discreet booking, in-call or out-call across Panjim, Calangute, Baga and Anjuna.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Quick links
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm text-zinc-600">
              <li><Link href="/about" className="hover:text-rose-600 hover:underline">About</Link></li>
              <li><Link href="/services" className="hover:text-rose-600 hover:underline">Services</Link></li>
              <li><Link href="/blog" className="hover:text-rose-600 hover:underline">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-rose-600 hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Service areas */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Service areas
            </h3>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-zinc-600 sm:gap-x-6">
              {goaAreas.map((area) => (
                <li key={area.slug}>
                  <Link href={`/areas/${area.slug}`} className="hover:text-rose-600 hover:underline">
                    {area.name} Escorts
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {/* Copyright bar */}
      <div className="border-t border-zinc-200 bg-zinc-100/80 py-4">
        <p className="text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Mahi Escorts. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
