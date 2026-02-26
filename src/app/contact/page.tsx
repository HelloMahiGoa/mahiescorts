import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Mahi Escorts Goa",
  description: "Contact Mahi Escorts — Call or WhatsApp 24/7 for Goa escorts and call girls. Discreet booking across Panjim, Calangute, Baga, Anjuna.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="mb-4 text-3xl font-bold text-zinc-800">Contact Us</h1>
      <p className="mb-10 text-zinc-600">
        Get in touch for bookings or enquiries. We&apos;re available 24/7. All communication is discreet and professional.
      </p>
      <div className="space-y-8">
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="mb-2 font-semibold text-zinc-800">Call</h2>
          <p className="mb-3 text-sm text-zinc-600">Quickest way to book. We answer around the clock.</p>
          <a
            href="tel:+918121426651"
            className="text-xl font-semibold text-rose-600 hover:underline"
          >
            +91 98765 43210
          </a>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="mb-2 font-semibold text-zinc-800">WhatsApp</h2>
          <p className="mb-3 text-sm text-zinc-600">Message us for discreet chat and easy booking.</p>
          <a
            href="https://wa.me/918121426651"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xl font-semibold text-green-700 hover:underline"
          >
            WhatsApp Now
          </a>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="mb-2 font-semibold text-zinc-800">Service Areas</h2>
          <p className="text-sm text-zinc-600">
            We cover all of Goa — Panjim, Calangute, Baga, Anjuna, Candolim, Vagator, Margao, Colva, Benaulim, Arambol and more. In-call and out-call available.
          </p>
        </div>
      </div>
    </div>
  );
}
