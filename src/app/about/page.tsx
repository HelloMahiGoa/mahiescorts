import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Mahi Escorts Goa",
  description: "Learn about Mahi Escorts — premium Goa escorts and call girls service. Discreet, verified, 24/7 across Panjim, Calangute, Baga, Anjuna.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-6 text-3xl font-bold text-zinc-800">About Mahi Escorts</h1>
      <div className="prose prose-zinc max-w-none">
        <p className="text-lg text-zinc-600">
          Welcome to <strong className="text-rose-600">Mahi Escorts</strong> — Goa&apos;s trusted escort and call girls service. We offer premium companionship across Panjim, Calangute, Baga, Anjuna, Candolim, Vagator, Margao and the rest of Goa.
        </p>
        <h2 className="mt-10 text-xl font-semibold text-zinc-800">Who We Are</h2>
        <p className="text-zinc-600">
          We are a discreet, professional agency focused on Goa. Our team works 24/7 to connect you with verified, well-presented escorts for in-call and out-call bookings. Whether you&apos;re in town for business, a holiday, or a special occasion, we help you find the right companion.
        </p>
        <h2 className="mt-10 text-xl font-semibold text-zinc-800">What We Offer</h2>
        <ul className="list-disc space-y-2 pl-6 text-zinc-600">
          <li>Verified profiles — every escort is vetted for your safety and satisfaction</li>
          <li>Wide coverage — service across all major Goa areas and tourist spots</li>
          <li>In-call and out-call — our place or your hotel/residence</li>
          <li>Discretion and professionalism — your privacy is our priority</li>
          <li>24/7 availability — book anytime via call or WhatsApp</li>
        </ul>
        <h2 className="mt-10 text-xl font-semibold text-zinc-800">Why Choose Us</h2>
        <p className="text-zinc-600">
          We combine reliability, transparency and a commitment to quality. Our escorts are chosen for their looks, personality and professionalism. We believe in clear communication, fair pricing and a hassle-free booking process so you can focus on enjoying your time in Goa.
        </p>
        <p className="mt-8 text-zinc-600">
          Get in touch to book or to ask any questions. We&apos;re here to help.
        </p>
      </div>
      <div className="mt-12 flex flex-wrap gap-4">
        <Link
          href="/contact"
          className="rounded-lg bg-rose-600 px-6 py-3 font-semibold text-white transition hover:bg-rose-700"
        >
          Contact Us
        </Link>
        <Link
          href="/services"
          className="rounded-lg border border-zinc-300 px-6 py-3 font-semibold text-zinc-700 transition hover:bg-zinc-50"
        >
          Our Services
        </Link>
      </div>
    </div>
  );
}
