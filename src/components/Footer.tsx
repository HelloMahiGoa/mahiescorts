import Link from "next/link";
import { goaAreas } from "@/data/goaAreas";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:+918121426651"
            className="rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-rose-700"
          >
            Call Now
          </a>
          <a
            href="https://wa.me/918121426651"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-green-600 bg-white px-6 py-3 text-sm font-semibold text-green-700 transition hover:bg-green-50"
          >
            WhatsApp
          </a>
        </div>

        <p className="mb-6 text-center text-sm text-zinc-600">
          Escorts in Goa • Call Girls Goa • Goa Call Girls • Premium companionship across Goa
        </p>

        <div className="mb-6 flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm">
          <Link href="/about" className="text-rose-600 hover:underline">About</Link>
          <Link href="/services" className="text-rose-600 hover:underline">Services</Link>
          <Link href="/blog" className="text-rose-600 hover:underline">Blog</Link>
          <Link href="/contact" className="text-rose-600 hover:underline">Contact</Link>
        </div>

        <div className="mb-8">
          <h3 className="mb-3 text-center text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Service Areas — Goa
          </h3>
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm">
            {goaAreas.map((area) => (
              <li key={area.slug}>
                <Link href={`/areas/${area.slug}`} className="text-rose-600 hover:underline">
                  {area.name} Escorts
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Mahi Escorts. All Rights Reserved. Goa Escorts & Call Girls.
        </p>
      </div>
    </footer>
  );
}
