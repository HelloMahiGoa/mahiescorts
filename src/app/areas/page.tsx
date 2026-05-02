import type { Metadata } from "next";
import Link from "next/link";
import { goaAreas } from "@/data/goaAreas";
import MarketingSubpageShell from "@/components/site/MarketingSubpageShell";

export const metadata: Metadata = {
  title: "Goa Escorts by Area | Panjim, Calangute, Baga, Anjuna & More",
  description:
    "Find escorts and call girls in Goa by area: Panjim, Calangute, Baga, Anjuna, Candolim, Vagator, Morjim, Palolem, Margao, Colva and more.",
};

export default function AreasPage() {
  return (
    <MarketingSubpageShell
      heroBadge="Areas"
      heroTitle="Escorts in Goa — By Area"
      heroSubtitle="Choose your location. We offer in-call and out-call across North and South Goa — each area page has local copy, profiles and the same discreet WhatsApp booking flow."
      heroImageAlt="Goa escorts by area — Panjim, beaches, South Goa"
      introBand={{
        eyebrow: "Coverage",
        title: "Pick Where You Are Staying",
        lead: "Tap an area for dedicated profiles and how we handle timing, hotels and beaches there.",
      }}
    >
      <section className="bg-[#fff5f7] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {goaAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}-escorts`}
                className="group relative overflow-hidden rounded-3xl border border-white/80 bg-white p-6 shadow-xl shadow-pink-200/40 transition hover:-translate-y-1 hover:border-pink-200 hover:shadow-2xl"
              >
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
                  {area.name}
                </span>
                <h2 className="font-handwriting mt-2 text-2xl font-bold text-zinc-900">
                  <span className="bg-gradient-to-r from-pink-600 via-rose-600 to-amber-600 bg-clip-text text-transparent group-hover:from-pink-500 group-hover:via-rose-500 group-hover:to-amber-500">
                    {area.name} escorts
                  </span>
                </h2>
                <div className="mt-3 flex gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{area.description}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-rose-600 transition group-hover:gap-2">
                  View profiles <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-gradient-to-b from-zinc-900 to-black py-12">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-zinc-400">
            Not sure which area fits your hotel?{" "}
            <Link href="/contact" className="font-semibold text-pink-300 underline-offset-2 hover:text-pink-200 hover:underline">
              Message us on WhatsApp
            </Link>{" "}
            with your location — we will route you to the right belt.
          </p>
        </div>
      </section>
    </MarketingSubpageShell>
  );
}
