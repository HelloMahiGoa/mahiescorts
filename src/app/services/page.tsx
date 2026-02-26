import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services | Mahi Escorts Goa — In-Call & Out-Call",
  description:
    "Goa escorts service: in-call, out-call, 24/7. Panjim, Calangute, Baga, Anjuna. Discreet booking. What we offer and how to book.",
};

const intimateServices = [
  "Blowjob",
  "French Kiss",
  "Anal",
  "Pussy Licking",
  "69 Position",
  "Erotic Massage",
  "Cum in Mouth",
  "Cum on Body",
  "Handjob",
  "Multiple Positions",
  "Role Play",
  "Striptease",
  "Doggy Style",
  "Cowgirl",
  "Deep Throat",
  "Sensual Massage",
  "Body to Body",
  "GFE",
  "Dinner Date",
  "Overnight",
  "Shower Together",
  "Kissing & Cuddling",
  "Light BDSM",
  "Duo / Threesome",
  "Face Sitting",
  "Tantric Massage",
];

export default function ServicesPage() {
  return (
    <>
      {/* Page title — Premier heading style */}
      <section className="border-b border-rose-200/60 bg-gradient-to-b from-rose-50/40 to-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
            What we offer
          </span>
          <h1 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
            <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
              Escorts Service in Goa — In-Call & Out-Call
            </span>
          </h1>
          <div className="mx-auto mt-4 flex justify-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-sm text-zinc-600 sm:text-base">
            We offer in-call at discreet locations and out-call to your hotel or place. Book anytime — we
            reply through the day. Same discretion and clear rates whether you choose our place or yours.
          </p>
        </div>
      </section>

      {/* In-Call — image left, text right */}
      <section className="bg-[#fff5f7] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-pink-200/60">
              <Image
                src="/images/1.avif"
                alt="In-call service Goa - discreet location"
                width={640}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
                Our place
              </span>
              <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                  In-Call Service
                </span>
              </h2>
              <div className="mt-4 flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              </div>
              <p className="mt-4 text-sm text-zinc-700 sm:text-base">
                In-call means you come to us. We have discreet locations in North Goa and Panjim — private,
                comfortable and set up for your visit. When you book, we&apos;ll send you the address once we&apos;ve
                confirmed the time and the girl.
              </p>
              <p className="mt-3 text-sm text-zinc-700 sm:text-base">
                Good if you prefer a fixed spot and don&apos;t want anyone coming to your hotel. Same standards:
                real profiles, clear rate, no surprises. Tell us your area (e.g. Calangute, Panjim) and we&apos;ll
                suggest what&apos;s doable for in-call from there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Out-Call — text left, image right */}
      <section className="border-t border-zinc-200 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
                Your place
              </span>
              <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                  Out-Call Service
                </span>
              </h2>
              <div className="mt-4 flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              </div>
              <p className="mt-4 text-sm text-zinc-700 sm:text-base">
                Out-call means we come to you — your hotel, resort, apartment or residence. We cover Panjim,
                Calangute, Baga, Anjuna, Candolim, Vagator and nearby areas. You tell us where you&apos;re staying;
                we confirm if we can send someone and at what rate.
              </p>
              <p className="mt-3 text-sm text-zinc-700 sm:text-base">
                Most of our Goa escorts and call girls bookings are out-call. Travellers prefer it: you stay in
                your room, she turns up at the agreed time. We don&apos;t need your room number until we&apos;re
                confirming the booking. Discreet and straightforward.
              </p>
            </div>
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-pink-200/60">
              <Image
                src="/images/2.avif"
                alt="Out-call service Goa - we come to your hotel"
                width={640}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 & availability — bordered card */}
      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative border-l-4 border-rose-500 bg-white py-8 pl-8 pr-6 shadow-md">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
              Availability
            </span>
            <h2 className="font-handwriting mt-1 text-2xl font-bold text-zinc-900 sm:text-3xl">
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                24/7 Booking — When We Reply
              </span>
            </h2>
            <div className="mt-3 flex gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            </div>
            <p className="mt-4 text-sm text-zinc-700">
              You can message us any time. We check WhatsApp through the day — afternoon and evening you&apos;ll
              usually get a reply within an hour or two. Late night or early morning might take a bit longer. A
              real person reads and answers; we don&apos;t use bots.
            </p>
            <p className="mt-3 text-sm text-zinc-700">
              Need someone for the same evening? Message as early as you can so we can confirm who&apos;s free and
              give you a rate. We don&apos;t promise instant booking, but we do our best to get you sorted quickly.
            </p>
          </div>
        </div>
      </section>

      {/* Areas we cover — short strip */}
      <section className="border-t border-zinc-200 bg-[#fff5f7] py-12">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
            Coverage
          </span>
          <h2 className="font-handwriting mt-1 text-2xl font-bold text-zinc-900 sm:text-3xl">
            <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
              All Goa Areas
            </span>
          </h2>
          <div className="mx-auto mt-3 flex justify-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          </div>
          <p className="mt-4 text-sm text-zinc-600">
            Panjim, Calangute, Baga, Anjuna, Candolim, Vagator, Margao, Colva, Benaulim, Arambol and surrounding
            areas. In-call at fixed spots in North Goa and Panjim; out-call wherever you&apos;re staying in these
            zones. Same discretion and quality everywhere.
          </p>
        </div>
      </section>

      {/* Services available — pills (same as homepage Services component) */}
      <section className="border-t border-zinc-200 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
              With our escorts
            </span>
            <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                Services Available with Our Goa Escorts
              </span>
            </h2>
            <div className="mx-auto mt-4 flex justify-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            </div>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {intimateServices.map((name) => (
              <span
                key={name}
                className="rounded-full border border-rose-200 bg-rose-50/50 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:border-rose-300 hover:bg-rose-100"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How to book — CTA */}
      <section className="border-t border-rose-200/60 bg-rose-50/50 py-16">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
            Book now
          </span>
          <h2 className="font-handwriting mt-1 text-2xl font-bold text-zinc-900 sm:text-3xl">
            <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
              How to Book
            </span>
          </h2>
          <div className="mx-auto mt-3 flex justify-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          </div>
          <p className="mt-6 text-sm text-zinc-600">
            Call or WhatsApp us. Tell us your area, when you want (today, tomorrow, next week), and whether
            you prefer in-call or out-call. We&apos;ll confirm availability, suggest a profile and give you a
            clear rate. No advance payment — you pay when you meet.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+918121426651"
              className="rounded-lg bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/918121426651"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-2 border-green-600 bg-white px-6 py-3 text-sm font-semibold text-green-700 transition hover:bg-green-50"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
