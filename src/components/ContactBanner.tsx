export default function ContactBanner() {
  return (
    <section className="border-t border-zinc-200 bg-rose-50 py-12">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="mb-4 text-xl font-bold text-zinc-800">Contact Mahi Escorts — Goa</h2>
        <p className="mb-6 text-zinc-600">
          Call or WhatsApp for instant booking. Discreet, professional service across Goa.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:+918121426651"
            className="rounded-full bg-rose-600 px-6 py-3 font-semibold text-white transition hover:bg-rose-700"
          >
            Call Now
          </a>
          <a
            href="https://wa.me/918121426651"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-green-600 bg-white px-6 py-3 font-semibold text-green-700 transition hover:bg-green-50"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
