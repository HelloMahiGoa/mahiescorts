import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactBanner from "@/components/ContactBanner";

export const metadata: Metadata = {
  title: "About Us | Mahi Escorts Goa",
  description:
    "About Mahi Escorts — Goa escorts and call girls service. Who we are, how we work, and why we focus on discretion and real profiles across Panjim, Calangute, Baga, Anjuna.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page title — Premier heading style */}
      <section className="border-b border-rose-200/60 bg-gradient-to-b from-rose-50/40 to-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
            About us
          </span>
          <h1 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
            <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
              About Mahi Escorts Goa
            </span>
          </h1>
          <div className="mx-auto mt-4 flex justify-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-sm text-zinc-600 sm:text-base">
            We run a straightforward Goa escorts and call girls service. No hype — just real profiles, clear
            communication and discretion across Panjim, Calangute, Baga, Anjuna and nearby areas.
          </p>
        </div>
      </section>

      {/* Who we are — image left, text right (Premier style) */}
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
                We only operate in Goa. Panjim, Calangute, Baga, Anjuna, Candolim, Vagator and a few other
                pockets. That means we know the area, we know what&apos;s doable for in-call and out-call, and we
                don&apos;t overpromise. If you&apos;re staying in one of these areas, we can help. If not, we&apos;ll
                tell you straight.
              </p>
              <p className="mt-3 text-sm text-zinc-700 sm:text-base">
                Our job is to match you with the right person, get the time and place sorted, and stay out of
                the way. No drama, no follow-up spam. You message when you need someone; we reply with options and
                a clear rate. That&apos;s it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we stand for — bordered card (left border) */}
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
                  <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 text-xs font-bold">✓</span>
                  <span><strong className="text-zinc-800">Discretion.</strong> We don&apos;t share your number or details. What you tell us stays with us.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 text-xs font-bold">✓</span>
                  <span><strong className="text-zinc-800">Real profiles.</strong> No stock photos. Every picture is the person you&apos;ll meet.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 text-xs font-bold">✓</span>
                  <span><strong className="text-zinc-800">Clear communication.</strong> We spell out what&apos;s on offer and what isn&apos;t before you book.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 text-xs font-bold">✓</span>
                  <span><strong className="text-zinc-800">No fake promises.</strong> We tell you what&apos;s doable for your dates and area. No overselling.</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[380px] overflow-hidden rounded-r-3xl border border-zinc-200 bg-zinc-100 lg:h-[420px]">
              <Image
                src="/images/2.avif"
                alt="Goa escorts - discretion and professionalism"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What we offer — 4 gradient cards (like homepage) */}
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

      {/* Why choose us — text left, image right */}
      <section className="border-t border-zinc-200 bg-white py-16">
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
                We keep it simple. You want company in Goa — for a few hours, a dinner, an event or a full
                evening. We have a list of escorts and call girls who work with us in Panjim, Calangute, Baga,
                Anjuna and nearby. You tell us when, where and what you&apos;re after; we suggest who&apos;s free and
                give you a straight answer on rate.
              </p>
              <p className="mt-3 text-sm text-zinc-700 sm:text-base">
                We don&apos;t do advance payment or deposits. You pay when you meet. We don&apos;t upsell at the door.
                Repeat clients come back because the experience is consistent: same discretion, same clarity, no
                drama.
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

      {/* CTA strip */}
      <section className="border-t border-rose-200/60 bg-rose-50/50 py-12">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-zinc-700">
            Ready to book? Check our services or get in touch.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/services"
              className="rounded-lg border-2 border-rose-500/60 bg-white px-6 py-3 text-sm font-semibold text-rose-700 transition hover:bg-rose-50"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="rounded-lg bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
