import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Mahi Escorts Goa",
  description:
    "Contact Mahi Escorts — Call or WhatsApp for Goa escorts and call girls. Discreet booking across Panjim, Calangute, Baga, Anjuna. We reply through the day.",
};

const phoneNumber = "+918121426651";
const phoneDisplay = "+91 81214 26651";
const whatsappUrl = "https://wa.me/918121426651";

export default function ContactPage() {
  return (
    <>
      {/* Page title — Premier heading style */}
      <section className="border-b border-rose-200/60 bg-gradient-to-b from-rose-50/40 to-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
            Get in touch
          </span>
          <h1 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
            <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
              Contact Mahi Escorts Goa
            </span>
          </h1>
          <div className="mx-auto mt-4 flex justify-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-sm text-zinc-600 sm:text-base">
            Call or WhatsApp us for bookings and enquiries. We check messages through the day and reply as soon
            as we can. All communication is discreet and professional.
          </p>
        </div>
      </section>

      {/* Call & WhatsApp — two primary CTAs */}
      <section className="bg-[#fff5f7] py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <a
              href={`tel:${phoneNumber}`}
              className="group flex flex-col rounded-2xl border-2 border-rose-200/80 bg-white p-8 shadow-lg shadow-rose-100 transition hover:border-rose-300 hover:shadow-xl hover:shadow-rose-200/50"
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
              <span className="mt-6 inline-block text-lg font-semibold text-rose-600 transition group-hover:text-rose-700">
                {phoneDisplay}
              </span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border-2 border-green-200/80 bg-white p-8 shadow-lg shadow-green-100/50 transition hover:border-green-300 hover:shadow-xl hover:shadow-green-200/50"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-green-600">
                Message
              </span>
              <h2 className="font-handwriting mt-2 text-2xl font-bold text-zinc-900">
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  WhatsApp
                </span>
              </h2>
              <div className="mt-3 flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </div>
              <p className="mt-4 flex-1 text-sm text-zinc-600">
                Send a message with your area, preferred time and in-call or out-call. We&apos;ll reply with
                availability and rate.
              </p>
              <span className="mt-6 inline-block text-lg font-semibold text-green-700 transition group-hover:text-green-800">
                Message on WhatsApp →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* What to tell us — bordered card */}
      <section className="border-t border-zinc-200 bg-zinc-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative border-l-4 border-rose-500 bg-white py-8 pl-8 pr-6 shadow-md">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
              When you message
            </span>
            <h2 className="font-handwriting mt-1 text-2xl font-bold text-zinc-900 sm:text-3xl">
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                What to Tell Us
              </span>
            </h2>
            <div className="mt-3 flex gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            </div>
            <p className="mt-4 text-sm text-zinc-700">
              So we can help quickly, mention: where you are (area or hotel), when you want (today, tomorrow,
              date and time), and whether you prefer in-call (our place) or out-call (we come to you). If you
              have a profile in mind from the site, you can say that too. We&apos;ll confirm what&apos;s possible
              and give you a clear rate.
            </p>
          </div>
        </div>
      </section>

      {/* When we reply */}
      <section className="border-t border-zinc-200 bg-white py-12">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
            Response time
          </span>
          <h2 className="font-handwriting mt-1 text-xl font-bold text-zinc-900 sm:text-2xl">
            <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
              When We Reply
            </span>
          </h2>
          <p className="mt-4 text-sm text-zinc-600">
            We check WhatsApp and calls through the day. Afternoon and evening you&apos;ll usually get a reply
            within an hour or two. Late night or very early morning may take longer. We don&apos;t use bots —
            a real person reads and answers.
          </p>
        </div>
      </section>

      {/* Service areas — short strip with link */}
      <section className="border-t border-rose-200/60 bg-rose-50/50 py-12">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-zinc-800">Service areas</h2>
          <p className="mt-2 text-sm text-zinc-600">
            We cover Panjim, Calangute, Baga, Anjuna, Candolim, Vagator, Margao, Colva, Benaulim, Arambol and
            surrounding areas. In-call and out-call available.{" "}
            <Link href="/areas" className="font-medium text-rose-600 hover:underline">
              See areas we cover
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
