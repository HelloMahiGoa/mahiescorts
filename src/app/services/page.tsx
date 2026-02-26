import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Mahi Escorts Goa — In-Call & Out-Call",
  description: "Escorts service in Goa: in-call, out-call, 24/7 booking. Panjim, Calangute, Baga, Anjuna. Discreet and professional.",
};

const services = [
  {
    title: "In-Call Service",
    description: "Visit our discreet locations across Goa. Private, comfortable settings for your convenience. Ideal if you prefer a fixed, professional environment.",
  },
  {
    title: "Out-Call Service",
    description: "We come to you — your hotel, resort, apartment or residence anywhere in Goa. Perfect for travellers and those who want to stay in their own space.",
  },
  {
    title: "24/7 Availability",
    description: "Book anytime, day or night. Our team and escorts are available round the clock so you can plan according to your schedule.",
  },
  {
    title: "All Goa Areas",
    description: "We cover Panjim, Calangute, Baga, Anjuna, Candolim, Vagator, Margao, Colva, Benaulim, Arambol and surrounding areas. Same quality and discretion everywhere.",
  },
  {
    title: "Verified Profiles",
    description: "Every escort is verified. We ensure authenticity and quality so you know exactly who you're booking.",
  },
  {
    title: "Discreet Booking",
    description: "Your privacy matters. We handle all communications and arrangements with complete discretion and professionalism.",
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="mb-4 text-3xl font-bold text-zinc-800">Our Services</h1>
      <p className="mb-12 max-w-2xl text-zinc-600">
        Mahi Escorts offers premium escort and call girls service across Goa. Choose in-call or out-call, any time of day. Discreet, professional and tailored to you.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-rose-200 hover:shadow-md"
          >
            <h2 className="mb-2 font-semibold text-rose-600">{service.title}</h2>
            <p className="text-sm text-zinc-600">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 rounded-xl border border-rose-100 bg-rose-50 p-6">
        <h2 className="mb-2 font-semibold text-zinc-800">How to Book</h2>
        <p className="mb-4 text-sm text-zinc-600">
          Call or WhatsApp us 24/7. Tell us your preferred area, timing and whether you want in-call or out-call. We&apos;ll confirm availability and arrange everything discreetly.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="tel:+918121426651"
            className="rounded-lg bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-700"
          >
            Call Now
          </a>
          <a
            href="https://wa.me/918121426651"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border-2 border-green-600 px-5 py-2.5 text-sm font-semibold text-green-700 transition hover:bg-green-50"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <p className="mt-8">
        <Link href="/" className="font-medium text-rose-600 hover:underline">
          ← Back to Home
        </Link>
      </p>
    </div>
  );
}
