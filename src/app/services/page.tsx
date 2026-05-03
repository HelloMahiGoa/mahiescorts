import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle, Phone } from "lucide-react";
import MarketingSubpageShell from "@/components/site/MarketingSubpageShell";

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

const intimateMid = Math.ceil(intimateServices.length / 2);
const intimateServicesFirst = intimateServices.slice(0, intimateMid);
const intimateServicesSecond = intimateServices.slice(intimateMid);

export default function ServicesPage() {
  return (
    <MarketingSubpageShell
      heroBadge="What we offer"
      heroTitle="Escorts Service in Goa"
      heroSubtitle="In-call at discreet locations and out-call to your hotel or place across Panjim, Calangute, Baga, Anjuna and nearby. Book anytime — we reply through the day. Same discretion and clear rates whether you choose our place or yours."
      heroImageAlt="Goa escorts services — in-call and out-call"
      introBand={{
        eyebrow: "Overview",
        title: "Straightforward Goa Bookings",
        lead: "We confirm timings, in-call vs out-call, and what you are looking for before anyone travels — so there are no surprises when you meet.",
        finePrint: "No advance payment. You pay when you meet.",
      }}
    >
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
      <section className="bg-[#fff5f7] py-16">
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

      {/* 24/7 — dark band like homepage rates */}
      <section className="bg-zinc-900 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-400">
              Availability
            </span>
            <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-white sm:text-4xl">
              <span className="bg-gradient-to-r from-pink-300 via-rose-300 to-amber-300 bg-clip-text text-transparent">
                24/7 Booking — When We Reply
              </span>
            </h2>
            <div className="mx-auto mt-4 flex justify-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-400" />
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            </div>
          </div>
          <div className="mt-10 space-y-4 text-center text-sm leading-relaxed text-zinc-300 sm:text-base">
            <p>
              You can message us any time. We check WhatsApp through the day — afternoon and evening you&apos;ll
              usually get a reply within an hour or two. Late night or early morning might take a bit longer. A
              real person reads and answers; we don&apos;t use bots.
            </p>
            <p>
              Need someone for the same evening? Message as early as you can so we can confirm who&apos;s free and
              give you a rate. We don&apos;t promise instant booking, but we do our best to get you sorted quickly.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage — pink */}
      <section className="bg-[#fff5f7] py-12">
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
          <p className="mt-4 text-sm text-zinc-600 sm:text-base">
            Panjim, Calangute, Baga, Anjuna, Candolim, Vagator, Margao, Colva, Benaulim, Arambol, Morjim, Palolem
            and surrounding areas. In-call at fixed spots in North Goa and Panjim; out-call wherever you&apos;re
            staying in these zones. Same discretion and quality everywhere.
          </p>
        </div>
      </section>

      {/* Intimate services — image left, text right (same layout as In-Call) */}
      <section className="bg-[#fff5f7] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-pink-200/60">
              <Image
                src="/images/what-to expect.avif"
                alt="Goa escorts — intimate services and what to expect"
                width={640}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
                With our escorts
              </span>
              <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                  Popular intimate services
                </span>
              </h2>
              <div className="mt-4 flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              </div>
              <p className="mt-4 text-sm text-zinc-700 sm:text-base">
                Every booking is different — what is on the table depends on the profile, your comfort, and what
                you agree on WhatsApp before you meet. The list below is a menu of common requests; not every
                item applies to every girl or every night.
              </p>
              <p className="mt-3 text-sm text-zinc-700 sm:text-base">
                Ask when you message if something matters to you — we would rather say no on chat than leave you
                awkward at the door.
              </p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {intimateServicesFirst.map((name) => (
                  <li
                    key={name}
                    className="flex gap-2 text-sm text-zinc-700 sm:text-base"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-rose-500" />
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Intimate services — text left, image right (same layout as Out-Call) */}
      <section className="bg-[#fff5f7] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
                With our escorts
              </span>
              <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                  More ways to spend time together
                </span>
              </h2>
              <div className="mt-4 flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              </div>
              <p className="mt-4 text-sm text-zinc-700 sm:text-base">
                Longer windows — dinner, overnight, shower together, GFE-style pacing — need clearer planning on
                WhatsApp so timing and rate match what you both expect.
              </p>
              <p className="mt-3 text-sm text-zinc-700 sm:text-base">
                Duos and anything that needs extra coordination should be named in your first message; we route
                you to profiles who actually work that way in Goa.
              </p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {intimateServicesSecond.map((name) => (
                  <li
                    key={name}
                    className="flex gap-2 text-sm text-zinc-700 sm:text-base"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-rose-500" />
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-pink-200/60">
              <Image
                src="/images/enjoyable.avif"
                alt="Goa escorts — extended services and companionship"
                width={640}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA — match Hero buttons */}
      <section className="border-t border-white/10 bg-gradient-to-b from-zinc-900 to-black py-16">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-400">
            Book now
          </span>
          <h2 className="font-handwriting mt-1 text-3xl font-bold text-white sm:text-4xl">
            <span className="bg-gradient-to-r from-pink-300 via-rose-300 to-amber-300 bg-clip-text text-transparent">
              How to Book
            </span>
          </h2>
          <div className="mx-auto mt-4 flex justify-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-400" />
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          </div>
          <p className="mt-6 text-sm text-zinc-300 sm:text-base">
            Call or WhatsApp us. Tell us your area, when you want (today, tomorrow, next week), and whether you
            prefer in-call or out-call. We&apos;ll confirm availability, suggest a profile and give you a clear rate.
            No advance payment — you pay when you meet.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+919663059306"
              className="group relative inline-flex w-full items-center justify-center gap-3 bg-gradient-to-r from-rose-500 to-pink-500 px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-rose-500/30 transition hover:scale-105 hover:shadow-rose-500/50 sm:w-auto sm:rounded-2xl"
            >
              <Phone className="h-5 w-5" />
              <span>Instant Call</span>
            </a>
            <a
              href="https://wa.me/919663059306"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex w-full items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-emerald-500/30 transition hover:scale-105 hover:shadow-emerald-500/50 sm:w-auto sm:rounded-2xl"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </MarketingSubpageShell>
  );
}
