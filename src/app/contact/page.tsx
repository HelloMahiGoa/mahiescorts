import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import MarketingSubpageShell from "@/components/site/MarketingSubpageShell";

export const metadata: Metadata = {
  title: "Contact Us | Mahi Escorts Goa",
  description:
    "Contact Mahi Escorts — Call or WhatsApp for Goa escorts and call girls. Discreet booking across Panjim, Calangute, Baga, Anjuna. We reply through the day.",
};

const phoneNumber = "+910000000000";
const phoneDisplay = "0000000000";
const whatsappUrl = "https://wa.me/0000000000";

export default function ContactPage() {
  return (
    <MarketingSubpageShell
      heroBadge="Get in touch"
      heroTitle="Contact Mahi Escorts Goa"
      heroSubtitle="Call or WhatsApp us for bookings and enquiries. We check messages through the day and reply as soon as we can. All communication is discreet and professional."
      heroImageAlt="Contact Mahi Escorts Goa"
      introBand={{
        eyebrow: "Overview",
        title: "We Reply Like Humans",
        lead: "Afternoon and evening you will usually hear back within an hour or two. No bots — a real person reads and answers.",
      }}
    >
      <section className="bg-[#fff5f7] py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <a
              href={`tel:${phoneNumber}`}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/60 bg-white p-8 shadow-xl shadow-pink-200/60 transition hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
                Call
              </span>
              <h2 className="font-handwriting mt-2 text-2xl font-bold text-zinc-900">
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                  Call Now
                </span>
              </h2>
              <div className="mt-3 flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              </div>
              <p className="mt-4 flex-1 text-sm text-zinc-600">
                Fastest way to confirm. We answer when we can — usually within a few rings during the day.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-lg font-semibold text-rose-600 transition group-hover:text-rose-700">
                <Phone className="h-5 w-5" />
                {phoneDisplay}
              </span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-3xl border border-emerald-200/80 bg-white p-8 shadow-xl shadow-emerald-200/40 transition hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                Message
              </span>
              <h2 className="font-handwriting mt-2 text-2xl font-bold text-zinc-900">
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  WhatsApp
                </span>
              </h2>
              <div className="mt-3 flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              </div>
              <p className="mt-4 flex-1 text-sm text-zinc-600">
                Send a message with your area, preferred time and in-call or out-call. We&apos;ll reply with
                availability and rate.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-lg font-semibold text-emerald-700 transition group-hover:text-emerald-800">
                <MessageCircle className="h-5 w-5" />
                Open WhatsApp
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 py-10 pl-8 pr-6 shadow-2xl shadow-black/40 sm:pl-10">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-pink-500 via-rose-500 to-amber-500" />
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-400">
              When you message
            </span>
            <h2 className="font-handwriting mt-1 text-2xl font-bold text-white sm:text-3xl">
              <span className="bg-gradient-to-r from-pink-300 via-rose-300 to-amber-300 bg-clip-text text-transparent">
                What to Tell Us
              </span>
            </h2>
            <div className="mt-3 flex gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-400" />
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
              So we can help quickly, mention: where you are (area or hotel), when you want (today, tomorrow, date
              and time), and whether you prefer in-call (our place) or out-call (we come to you). If you have a
              profile in mind from the site, you can say that too. We&apos;ll confirm what&apos;s possible and give
              you a clear rate.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fff5f7] py-12">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
            Response time
          </span>
          <h2 className="font-handwriting mt-1 text-2xl font-bold text-zinc-900 sm:text-3xl">
            <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
              When We Reply
            </span>
          </h2>
          <div className="mx-auto mt-3 flex justify-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          </div>
          <p className="mt-4 text-sm text-zinc-600 sm:text-base">
            We check WhatsApp and calls through the day. Afternoon and evening you&apos;ll usually get a reply within
            an hour or two. Late night or very early morning may take longer. We don&apos;t use bots — a real person
            reads and answers.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-gradient-to-b from-zinc-900 to-black py-12">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-handwriting text-xl text-white sm:text-2xl">
            <span className="bg-gradient-to-r from-pink-300 via-rose-300 to-amber-300 bg-clip-text text-transparent">
              Service areas
            </span>
          </h2>
          <p className="mt-3 text-sm text-zinc-400 sm:text-base">
            We cover Panjim, Calangute, Baga, Anjuna, Candolim, Vagator, Margao, Colva, Benaulim, Arambol, Morjim,
            Palolem and surrounding areas. In-call and out-call available.{" "}
            <Link href="/areas" className="font-medium text-pink-300 underline-offset-2 hover:text-pink-200 hover:underline">
              See areas we cover
            </Link>
          </p>
        </div>
      </section>
    </MarketingSubpageShell>
  );
}
