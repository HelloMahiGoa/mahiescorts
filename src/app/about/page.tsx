import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactBanner from "@/components/ContactBanner";
import MarketingSubpageShell from "@/components/site/MarketingSubpageShell";

export const metadata: Metadata = {
  title: "About Us | Mahi Escorts Goa",
  description:
    "About Mahi Escorts — Goa escorts and call girls service. Who we are, how we work, and why we focus on discretion and real profiles across Panjim, Calangute, Baga, Anjuna.",
};

export default function AboutPage() {
  return (
    <MarketingSubpageShell
      heroBadge="About us"
      heroTitle="About Mahi Escorts Goa"
      heroSubtitle="A straightforward Goa escorts and call girls service — real profiles, clear communication and discretion across Panjim, Calangute, Baga, Anjuna and nearby areas."
      heroImageAlt="About Mahi Escorts Goa"
      introBand={{
        eyebrow: "Overview",
        title: "Who We Are",
        lead: "We are not a big agency — we work with a limited roster so standards stay high and the fake-profile mess stays out.",
        finePrint: "Goa only. We know what is doable for in-call and out-call and we do not overpromise.",
      }}
    >
      <section className="bg-[#fff5f7] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-pink-200/60">
              <Image
                src="/images/1.avif"
                alt="Mahi Escorts Goa - who we are"
                width={640}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
                Who we are
              </span>
              <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                  A Small Operation Focused on Goa
                </span>
              </h2>
              <div className="mt-4 flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              </div>
              <p className="mt-4 text-sm text-zinc-700 sm:text-base">
                We&apos;re not a big agency. We work with a limited number of escorts and call girls in Goa so we
                can keep standards high and avoid the fake-profile mess you see elsewhere. Everyone on our list
                is someone we&apos;ve verified — real photos, real people.
              </p>
              <p className="mt-3 text-sm text-zinc-700 sm:text-base">
                We only operate in Goa. Panjim, Calangute, Baga, Anjuna, Candolim, Vagator and a few other pockets.
                That means we know the area, we know what&apos;s doable for in-call and out-call, and we don&apos;t
                overpromise. If you&apos;re staying in one of these areas, we can help. If not, we&apos;ll tell you
                straight.
              </p>
              <p className="mt-3 text-sm text-zinc-700 sm:text-base">
                Our job is to match you with the right person, get the time and place sorted, and stay out of the
                way. No drama, no follow-up spam. You message when you need someone; we reply with options and a
                clear rate. That&apos;s it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative border-l-4 border-rose-500 bg-white py-8 pl-8 pr-6 shadow-md lg:py-10">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
                Our approach
              </span>
              <h2 className="font-handwriting mt-1 text-2xl font-bold text-zinc-900 sm:text-3xl">
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                  What We Stand For
                </span>
              </h2>
              <div className="mt-3 flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              </div>
              <ul className="mt-6 space-y-3 text-sm text-zinc-700">
                <li className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-xs font-bold text-rose-600">
                    ✓
                  </span>
                  <span>
                    <strong className="text-zinc-800">Discretion.</strong> We don&apos;t share your number or
                    details. What you tell us stays with us.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-xs font-bold text-rose-600">
                    ✓
                  </span>
                  <span>
                    <strong className="text-zinc-800">Real profiles.</strong> No stock photos. Every picture is
                    the person you&apos;ll meet.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-xs font-bold text-rose-600">
                    ✓
                  </span>
                  <span>
                    <strong className="text-zinc-800">Clear communication.</strong> We spell out what&apos;s on
                    offer and what isn&apos;t before you book.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-xs font-bold text-rose-600">
                    ✓
                  </span>
                  <span>
                    <strong className="text-zinc-800">No fake promises.</strong> We tell you what&apos;s doable
                    for your dates and area. No overselling.
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative h-[380px] overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl shadow-black/30 lg:h-[420px]">
              <Image
                src="/images/2.avif"
                alt="Goa escorts - discretion and professionalism"
                fill
                className="object-cover opacity-95"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff5f7] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
              What we offer
            </span>
            <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                What You Get When You Book With Us
              </span>
            </h2>
            <div className="mx-auto mt-4 flex justify-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            </div>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-gradient-to-b from-[#ff4b9a] to-[#ff0b73] px-5 py-6 text-center text-white shadow-lg">
              <p className="text-sm font-semibold">100% Privacy</p>
              <p className="mt-1 text-xs opacity-90">Your details stay with us. No sharing, no spam.</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-b from-[#ff4b9a] to-[#ff0b73] px-5 py-6 text-center text-white shadow-lg">
              <p className="text-sm font-semibold">Verified Profiles</p>
              <p className="mt-1 text-xs opacity-90">Real photos, real people. No fake or stock images.</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-b from-[#ff4b9a] to-[#ff0b73] px-5 py-6 text-center text-white shadow-lg">
              <p className="text-sm font-semibold">In-Call & Out-Call</p>
              <p className="mt-1 text-xs opacity-90">Our place or your hotel — across Goa&apos;s main areas.</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-b from-[#ff4b9a] to-[#ff0b73] px-5 py-6 text-center text-white shadow-lg">
              <p className="text-sm font-semibold">Clear Rates</p>
              <p className="mt-1 text-xs opacity-90">We quote before you confirm. No surprise add-ons.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff5f7] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
                Why us
              </span>
              <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                  Why Choose Mahi Escorts
                </span>
              </h2>
              <div className="mt-4 flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              </div>
              <p className="mt-4 text-sm text-zinc-700 sm:text-base">
                We keep it simple. You want company in Goa — for a few hours, a dinner, an event or a full evening.
                We have a list of escorts and call girls who work with us in Panjim, Calangute, Baga, Anjuna and
                nearby. You tell us when, where and what you&apos;re after; we suggest who&apos;s free and give you
                a straight answer on rate.
              </p>
              <p className="mt-3 text-sm text-zinc-700 sm:text-base">
                We don&apos;t do advance payment or deposits. You pay when you meet. We don&apos;t upsell at the
                door. Repeat clients come back because the experience is consistent: same discretion, same clarity,
                no drama.
              </p>
              <p className="mt-3 text-sm text-zinc-700 sm:text-base">
                If that sounds like what you&apos;re looking for, get in touch. We&apos;re here to help — no
                pressure, no hype.
              </p>
            </div>
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-pink-200/60">
              <Image
                src="/images/1.avif"
                alt="Goa escorts - why choose Mahi Escorts"
                width={640}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-gradient-to-b from-zinc-900 to-black py-12">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-zinc-300">Ready to book? Check our services or get in touch.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/services"
              className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-500/30 transition hover:opacity-95"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <ContactBanner />
    </MarketingSubpageShell>
  );
}
