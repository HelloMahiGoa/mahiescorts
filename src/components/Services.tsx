import { MapPin, Home, Clock } from "lucide-react";

const mainServices = [
  {
    icon: Clock,
    title: "24/7 Availability",
    desc: "Book anytime. We're available round the clock for Goa escorts and call girls service.",
    tag: "Always open",
  },
  {
    icon: MapPin,
    title: "In-Call",
    desc: "Visit our discreet locations across Goa. Comfortable, private settings for your convenience.",
  },
  {
    icon: Home,
    title: "Out-Call",
    desc: "We come to you — your hotel, residence or apartment in Panjim, Calangute, Baga, Anjuna and across Goa.",
  },
];

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

export default function Services() {
  const [featured, ...otherMainServices] = mainServices;
  const FeaturedIcon = featured.icon;
  return (
    <section className="border-t border-zinc-200 bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
            What we offer
          </span>
          <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
            <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
              Escorts Service in Goa — In-Call & Out-Call
            </span>
          </h2>
          <div className="mx-auto mt-4 flex justify-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          </div>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Featured: 24/7 — larger left card */}
          <div className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-2xl border-2 border-rose-200/80 bg-gradient-to-br from-rose-50/60 to-white p-8 shadow-lg shadow-rose-100">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-500 text-white shadow-md">
                <FeaturedIcon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-zinc-900">{featured.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600">
                {featured.desc}
              </p>
              {"tag" in featured && featured.tag && (
                <span className="mt-6 inline-block text-xs font-semibold uppercase tracking-wider text-rose-500">
                  {featured.tag}
                </span>
              )}
            </div>
          </div>
          {/* Right: In-Call + Out-Call stacked */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            {otherMainServices.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-1 gap-6 rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 transition hover:border-rose-200 hover:bg-rose-50/30"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-rose-600 shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-800">{item.title}</h3>
                    <p className="mt-2 text-sm text-zinc-600">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Intimate services grid */}
        <div className="mt-14">
          <h3 className="text-center text-lg font-semibold text-zinc-800">
            Services available with our Goa escorts
          </h3>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
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
      </div>
    </section>
  );
}
