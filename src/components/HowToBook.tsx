const steps = [
  "Browse our Goa escorts gallery and pick your preferred companion.",
  "Call or WhatsApp us. We're available 24/7 for quick, discreet booking.",
  "Choose in-call (our location) or out-call (your hotel or residence in Goa).",
  "Meet your chosen escort and enjoy your time together.",
];

export default function HowToBook() {
  return (
    <section className="bg-gradient-to-b from-rose-50/40 to-white py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
            Simple steps
          </span>
          <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
            <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
              How to Book Our Escorts in Goa
            </span>
          </h2>
          <div className="mx-auto mt-4 flex justify-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          </div>
          <p className="mt-4 text-sm text-zinc-600">
            Four straightforward steps from browsing to meeting — no hassle.
          </p>
        </div>
        <div className="mt-12">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-300 via-rose-200 to-amber-200 sm:left-6" />
            <ul className="space-y-6">
              {steps.map((step, i) => (
                <li key={i} className="relative flex gap-4 sm:gap-6">
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-rose-600 text-sm font-bold text-white shadow-lg shadow-rose-500/30 ring-4 ring-white sm:h-12 sm:w-12 sm:text-base">
                    {i + 1}
                  </span>
                  <div className="min-w-0 flex-1 rounded-xl border border-zinc-200/80 bg-white px-5 py-4 shadow-sm transition hover:border-rose-200 hover:shadow-md">
                    <p className="text-sm text-zinc-700 sm:text-base">{step}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
