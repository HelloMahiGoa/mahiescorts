import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProfileGrid from "@/components/ProfileGrid";
import ProfileCard from "@/components/ProfileCard";
import Services from "@/components/Services";
import HowToBook from "@/components/HowToBook";
import ContactBanner from "@/components/ContactBanner";
import { profiles } from "@/data/profiles";
import type { Profile } from "@/data/profiles";
import Image from "next/image";

const siteName = "Mahi Escorts Goa";

export const metadata: Metadata = {
  title: "Goa Escorts & Call Girls — Panjim, Calangute, Baga, Anjuna | Mahi Escorts",
  description:
    "Escorts and call girls in Goa. In-call and out-call across Panjim, Calangute, Baga, Anjuna, Candolim and Vagator. Discreet, straightforward booking.",
  keywords: [
    "Goa escorts",
    "call girls Goa",
    "escorts in Goa",
    "Goa call girls",
    "Russian escorts in Goa",
    "Goa Russian escorts",
    "escorts Panjim",
    "call girls Calangute",
    "escorts Baga",
    "Anjuna escorts",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName,
    title: "Goa Escorts & Call Girls — Panjim, Calangute, Baga, Anjuna",
    description:
      "Escorts and call girls in Goa. In-call and out-call. Discreet booking across Panjim, Calangute, Baga and Anjuna.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Goa Escorts & Call Girls | Mahi Escorts",
    description: "Escorts and call girls in Goa. Discreet, straightforward booking.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How do I pay?", acceptedAnswer: { "@type": "Answer", text: "Cash when you meet. We don't take advance payment or deposits. We'll confirm the rate before you book so there's no surprise at the door." } },
    { "@type": "Question", name: "Can I book for today?", acceptedAnswer: { "@type": "Answer", text: "Sometimes, yes. Message as early as you can — we'll tell you what's possible. Same-day depends on who's free; we don't promise it but we'll try." } },
    { "@type": "Question", name: "Do you do out-call to my hotel?", acceptedAnswer: { "@type": "Answer", text: "Yes. We cover Panjim, Calangute, Baga, Anjuna and nearby areas. Tell us your area or hotel when you message and we'll confirm if we can send someone to you." } },
    { "@type": "Question", name: "What if I need to cancel?", acceptedAnswer: { "@type": "Answer", text: "Tell us as soon as you know. We'd rather reschedule than have a no-show. No charge if you cancel before the girl has left or you've arrived. Once she's on the way or you're there, we don't refund — same as most services." } },
    { "@type": "Question", name: "Are the photos real?", acceptedAnswer: { "@type": "Answer", text: "Yes. We don't use stock photos or fake profiles. What you see is who you get. If we can't verify a girl's pics, she doesn't go on the list." } },
    { "@type": "Question", name: "How fast do you reply?", acceptedAnswer: { "@type": "Answer", text: "We check WhatsApp through the day. Afternoon and evening you'll usually get a reply within an hour or two. Late night or early morning might take longer. A real person answers — no bots." } },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mahi Escorts Goa",
  description: "Escorts and call girls in Goa. In-call and out-call across Panjim, Calangute, Baga, Anjuna and nearby. Discreet booking.",
  areaServed: [{ "@type": "Place", name: "Goa" }, { "@type": "Place", name: "Panjim" }, { "@type": "Place", name: "Calangute" }, { "@type": "Place", name: "Baga" }, { "@type": "Place", name: "Anjuna" }],
};

const russianProfiles: Profile[] = [
  { name: "Anastasia", age: 22, location: "Goa", image: "/images/demo-profile.avif", tag: "Russian Escorts in Goa" },
  { name: "Maria", age: 24, location: "Goa", image: "/images/demo-profile.avif", tag: "Goa Russian Escorts" },
  { name: "Olga", age: 21, location: "Goa", image: "/images/demo-profile.avif", tag: "Russian Call Girls Goa" },
  { name: "Elena", age: 23, location: "Goa", image: "/images/demo-profile.avif", tag: "Goa Russian Call Girls" },
  { name: "Irina", age: 25, location: "Goa", image: "/images/demo-profile.avif", tag: "Russian Escorts Goa" },
  { name: "Natalia", age: 20, location: "Goa", image: "/images/demo-profile.avif", tag: "Russian Escorts in Goa" },
  { name: "Svetlana", age: 26, location: "Goa", image: "/images/demo-profile.avif", tag: "Goa Russian Escorts" },
  { name: "Yulia", age: 19, location: "Goa", image: "/images/demo-profile.avif", tag: "Russian Call Girls Goa" },
  { name: "Ekaterina", age: 27, location: "Goa", image: "/images/demo-profile.avif", tag: "Goa Russian Call Girls" },
  { name: "Tatiana", age: 22, location: "Goa", image: "/images/demo-profile.avif", tag: "Russian Escorts Goa" },
  { name: "Anna", age: 21, location: "Goa", image: "/images/demo-profile.avif", tag: "Russian Escorts in Goa" },
  { name: "Victoria", age: 24, location: "Goa", image: "/images/demo-profile.avif", tag: "Goa Russian Escorts" },
  { name: "Daria", age: 23, location: "Goa", image: "/images/demo-profile.avif", tag: "Russian Call Girls Goa" },
  { name: "Polina", age: 20, location: "Goa", image: "/images/demo-profile.avif", tag: "Goa Russian Call Girls" },
  { name: "Ksenia", age: 25, location: "Goa", image: "/images/demo-profile.avif", tag: "Russian Escorts Goa" },
  { name: "Alina", age: 19, location: "Goa", image: "/images/demo-profile.avif", tag: "Russian Escorts in Goa" },
  { name: "Alexandra", age: 26, location: "Goa", image: "/images/demo-profile.avif", tag: "Goa Russian Escorts" },
  { name: "Kristina", age: 22, location: "Goa", image: "/images/demo-profile.avif", tag: "Russian Call Girls Goa" },
  { name: "Valeria", age: 21, location: "Goa", image: "/images/demo-profile.avif", tag: "Goa Russian Call Girls" },
  { name: "Marina", age: 24, location: "Goa", image: "/images/demo-profile.avif", tag: "Russian Escorts Goa" },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Hero />
      <section className="bg-black py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-400">
              Overview
            </span>
            <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-white sm:text-4xl">
              <span className="bg-gradient-to-r from-pink-300 via-rose-300 to-amber-300 bg-clip-text text-transparent">
                Goa Escorts Overview
              </span>
            </h2>
            <div className="mx-auto mt-4 flex justify-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-400" />
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            </div>
            <p className="mt-2 text-sm text-zinc-300 sm:text-base">
              Quick peek at how we run things: when you message us for Goa escorts or call girls in Goa, this is
              the kind of chat you can expect. No fluff — we get to the point and keep your details private.
            </p>
            <p className="mt-2 text-xs text-zinc-400 sm:text-sm">
              Not a sales pitch. Just how we confirm timings, in-call vs out-call, and what you&apos;re looking for
              so there are no surprises when you meet.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 shadow-2xl shadow-black/40">
            <div className="relative aspect-video">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/videos/intro.mp4"
              >
                <source src="/videos/intro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
      {/* Premier Escorts Service section */}
      <section className="bg-[#fff5f7] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-pink-200/60">
              <Image
                src="/images/1.avif"
                alt="Smiling woman in Goa representing premier escort service"
                width={640}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
                Premier Goa Escorts
              </span>
              <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                  How Our Goa Escorts Service Works
                </span>
              </h2>
              <div className="mt-4 flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              </div>
              <p className="mt-4 text-sm text-zinc-700 sm:text-base">
                If you&apos;re looking for escorts in Goa, you&apos;ve probably seen a lot of flashy sites. We&apos;re
                not that. We run a small operation: real profiles, real people. No fake photos or copied bios.
              </p>
              <p className="mt-3 text-sm text-zinc-700 sm:text-base">
                Our call girls in Goa work across Panjim, Calangute, Baga, Anjuna and nearby areas. We pick them
                for attitude as much as looks — they&apos;re the kind you can actually talk to over dinner or a
                drink, not just a pretty face in the room.
              </p>
              <p className="mt-3 text-sm text-zinc-700 sm:text-base">
                In-call or out-call is your call. Hotel, our place, or somewhere neutral — we sort it out before
                you meet so there&apos;s no awkwardness. That&apos;s how our Goa escorts service has stayed in
                demand: we get the details right first.
              </p>
              <p className="mt-3 text-sm text-zinc-700 sm:text-base">
                Boundaries matter. We spell out what&apos;s on offer and what isn&apos;t. If something doesn&apos;t
                sit right with you, say it. We&apos;d rather fix it upfront than have either side feel off after.
              </p>
              <p className="mt-3 text-sm text-zinc-700 sm:text-base">
                First time booking escorts in Goa? No drama. Tell us what you want — a few hours, a full evening,
                or just company for an event — and we&apos;ll match you. No pressure, no overselling.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-gradient-to-b from-[#ff4b9a] to-[#ff0b73] px-4 py-5 text-center text-white shadow-lg">
                  <p className="text-sm font-semibold">100% Privacy</p>
                </div>
                <div className="rounded-2xl bg-gradient-to-b from-[#ff4b9a] to-[#ff0b73] px-4 py-5 text-center text-white shadow-lg">
                  <p className="text-sm font-semibold">No Fake Profiles</p>
                </div>
                <div className="rounded-2xl bg-gradient-to-b from-[#ff4b9a] to-[#ff0b73] px-4 py-5 text-center text-white shadow-lg">
                  <p className="text-sm font-semibold">Best Communities</p>
                </div>
                <div className="rounded-2xl bg-gradient-to-b from-[#ff4b9a] to-[#ff0b73] px-4 py-5 text-center text-white shadow-lg">
                  <p className="text-sm font-semibold">500+ Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Discover Allure section */}
      <section className="bg-[#fff5f7] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
                Goa Experience
              </span>
              <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                  Spending Time with Escorts in Goa
                </span>
              </h2>
              <div className="mt-4 flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              </div>
              <p className="mt-4 text-sm text-zinc-700 sm:text-base">
                Goa&apos;s got the beaches, the shacks, the clubs in Baga and Calangute — and a lot of visitors
                who don&apos;t want to do it all alone. That&apos;s where our call girls in Goa come in. They know
                the spots: where to grab a bite, where it gets loud, and where you can actually hear yourself talk.
              </p>
              <p className="mt-3 text-sm text-zinc-700 sm:text-base">
                Out-call to your hotel in Panjim or Anjuna? In-call at a discreet place? Both work. Our escorts in
                Goa are used to both. You say the area and the vibe; we line up someone who fits and show up on
                time.
              </p>
              <p className="mt-3 text-sm text-zinc-700 sm:text-base">
                A lot of guys book for events — a party, a wedding, a work do. Others just want a dinner date or
                someone to hit the clubs with. No judgment either way. The idea is simple: you get company that
                knows Goa and doesn&apos;t make it weird.
              </p>
              <p className="mt-3 text-sm text-zinc-700 sm:text-base">
                Day or night, chilled or dressed up — your call. Our Goa call girls aren&apos;t on a script. They
                adapt. So whether you&apos;re in town for a weekend or a month, you get someone who can roll with
                your plan.
              </p>
              <p className="mt-3 text-sm text-zinc-700 sm:text-base">
                Bottom line: if you want companionship in Goa without the hassle of dating apps or random
                encounters, escorts in Goa through us are a straight-up option. Discreet, clear, and no fake
                promises.
              </p>
            </div>
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-pink-200/60">
              <Image
                src="/images/2.avif"
                alt="Woman taking a selfie in a Goa hotel room"
                width={640}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <ProfileGrid
        profiles={profiles}
        label="Our Profiles"
        title="Meet Our Goa Escorts — Handpicked Profiles to Choose From"
        cardVariant="browse"
      />
      {/* What to expect section - Premier style */}
      <section className="bg-[#fff5f7] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-pink-200/60">
              <Image
                src="/images/what-to expect.avif"
                alt="Goa escort service - what to expect"
                width={640}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
                What to Expect
              </span>
              <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                  What to Expect When You Book with Us
                </span>
              </h2>
              <div className="mt-4 flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              </div>
              <p className="mt-4 text-sm text-zinc-700 sm:text-base">
                To book call girls in Goa with us, drop a WhatsApp. Say roughly when you want (today, tomorrow,
                next week), where you&apos;re staying or if you prefer in-call, and what kind of company you&apos;re
                after. We&apos;ll suggest a profile and sort the rest.
              </p>
              <p className="mt-3 text-sm text-zinc-700 sm:text-base">
                Rates depend on duration and whether it&apos;s in-call or out-call. We spell that out before you
                confirm — no hidden extras. Payment is straightforward; we&apos;ll tell you how we do it when you
                message.
              </p>
              <p className="mt-3 text-sm text-zinc-700 sm:text-base">
                Once we lock the time and place, our Goa escorts turn up as agreed. If your plans change, ping us
                early and we&apos;ll reschedule. Cancellations happen; we&apos;d just rather know in time so the girl
                isn&apos;t left hanging.
              </p>
              <p className="mt-3 text-sm text-zinc-700 sm:text-base">
                Repeat clients get it: same quality every time, same discretion. We don&apos;t share your number or
                details. What you do with our escorts in Goa stays between you, her, and us — and we keep it that
                way.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Making your time in Goa better - Discover style */}
      <section className="bg-[#fff5f7] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
                Goa & You
              </span>
              <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                  Making Your Time in Goa More Enjoyable
                </span>
              </h2>
              <div className="mt-4 flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              </div>
              <p className="mt-4 text-sm text-zinc-700 sm:text-base">
                Solo in Goa? Here on business? Or just don&apos;t want to do the whole trip alone? A lot of our
                clients book Goa call girls for exactly that — someone to have dinner with, show up to a do with, or
                just hang out without the awkward small talk of a random meet.
              </p>
              <p className="mt-3 text-sm text-zinc-700 sm:text-base">
                We get a fair share of repeat bookings. Same guy, same city, different trip — they already know
                the drill. Our escorts in Goa remember faces (discreetly) and we keep the same standards: on time,
                dressed for the occasion, no drama.
              </p>
              <p className="mt-3 text-sm text-zinc-700 sm:text-base">
                Calangute, Baga, Anjuna, Panjim — we cover the main belts. So whether you&apos;re in a resort by the
                sea or a hotel in town, out-call is doable. You tell us the area; we handle the rest. That&apos;s
                how our Goa escorts service has stayed relevant: we show up where you need us.
              </p>
              <p className="mt-3 text-sm text-zinc-700 sm:text-base">
                Not sure what to ask for? Say &quot;dinner and company&quot; or &quot;someone for a party&quot; — we&apos;ll
                suggest a fit. No need to overthink it. The best bookings are the ones where both sides know what
                they&apos;re in for. We make sure of that before anyone steps out.
              </p>
            </div>
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-pink-200/60">
              <Image
                src="/images/enjoyable.avif"
                alt="Enjoying Goa with a companion"
                width={640}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Areas we cover - bordered card design */}
      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative border-l-4 border-rose-500 bg-white py-8 pl-8 pr-6 shadow-md lg:py-10">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
                Coverage
              </span>
              <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                  Areas We Cover in Goa
                </span>
              </h2>
              <div className="mt-4 flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              </div>
              <p className="mt-4 text-sm text-zinc-700">
                We send call girls in Goa to Panjim, Calangute, Baga, Anjuna, Candolim, Vagator and a few other
                pockets. If you&apos;re staying in a hotel or rental in any of these, out-call is standard — we
                come to you.
              </p>
              <p className="mt-3 text-sm text-zinc-700">
                In-call is available at fixed spots in North Goa and Panjim. When you message, tell us your area
                and whether you want her to come over or you&apos;ll go to her. We&apos;ll only suggest what&apos;s
                actually doable so you don&apos;t waste time.
              </p>
              <p className="mt-3 text-sm text-zinc-700">
                New to the state? Panjim is the capital, calmer; Baga and Calangute are the party strips. Anjuna
                and Vagator are a bit more laid-back. Our escorts in Goa know these areas — they can suggest
                where to eat or go out depending on where you are.
              </p>
            </div>
            <div className="relative h-[420px] overflow-hidden rounded-r-3xl border border-zinc-200 bg-zinc-100 lg:h-[480px]">
              <Image
                src="/images/areas.avif"
                alt="Goa areas - Panjim Calangute Baga Anjuna"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Rates and what you pay - dark section */}
      <section className="bg-zinc-900 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-400">
              Pricing
            </span>
            <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-white sm:text-4xl">
              <span className="bg-gradient-to-r from-pink-300 via-rose-300 to-amber-300 bg-clip-text text-transparent">
                Rates & What You Pay For
              </span>
            </h2>
            <div className="mx-auto mt-4 flex justify-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-400" />
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            </div>
          </div>
          <div className="mt-10 space-y-6 text-zinc-300">
            <p className="text-sm leading-relaxed sm:text-base">
              We don&apos;t put fixed numbers on the site — rates depend on how long you want (a few hours vs
              overnight), in-call or out-call, and which escort. When you WhatsApp us for Goa escorts, we give you
              a clear quote before you confirm. No &quot;pay first and we&apos;ll send someone&quot;; that&apos;s not how we
              work.
            </p>
            <p className="text-sm leading-relaxed sm:text-base">
              Payment happens when you meet. Cash preferred; we can discuss other options when you message. What
              you pay covers the girl&apos;s time and our arrangement — no surprise add-ons. If you extend the
              booking on the day, we sort the difference then and there.
            </p>
            <p className="text-sm leading-relaxed sm:text-base">
              First booking or tenth — same deal. Our call girls in Goa don&apos;t upsell you at the door. We
              agree on duration and rate in advance so both sides are clear. That&apos;s it. No drama, no last-minute
              surprises.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-zinc-700 bg-zinc-800/50">
              <div className="relative aspect-[3/4]">
                <Image
                  src="/images/rate.avif"
                  alt="Goa escorts rates and booking"
                  fill
                  className="object-cover opacity-90"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-zinc-700 bg-zinc-800/50">
              <div className="relative aspect-[3/4]">
                <Image
                  src="/images/pay.avif"
                  alt="Call girls Goa payment and duration"
                  fill
                  className="object-cover opacity-90"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <HowToBook />
      {/* Real profiles - callout + framed image */}
      <section className="border-y border-zinc-200 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="border-l-4 border-amber-500 py-6 pl-6 pr-2">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
                Real profiles
              </span>
              <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                  Real Pics, Real Call Girls in Goa
                </span>
              </h2>
              <div className="mt-4 flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              </div>
              <p className="mt-4 text-sm text-zinc-700">
                No stock photos. No fake profiles.
              </p>
              <p className="mt-4 text-sm text-zinc-700">
                Every photo on our list is the person you&apos;ll meet. We don&apos;t pull images from the internet or
                reuse someone else&apos;s pics. If we don&apos;t have a real shot of the girl, she doesn&apos;t go on
                the list. Saves you the &quot;that&apos;s not who I booked&quot; moment.
              </p>
              <p className="mt-3 text-sm text-zinc-700">
                Our Goa escorts are okay with their photos being used because they&apos;re actually in the game.
                We check before they join — so when you pick someone from our profiles, you&apos;re not rolling the
                dice. What you see is what you get.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl bg-amber-100/50" />
              <div className="relative overflow-hidden rounded-2xl border-2 border-amber-200/80 shadow-lg">
                <Image
                  src="/images/real-pic.avif"
                  alt="Real Goa escorts profiles - no fake photos"
                  width={560}
                  height={640}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* First message - checklist + single image */}
      <section className="bg-gradient-to-b from-rose-50/40 to-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
              Quick reply
            </span>
            <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                What to Send in Your First Message
              </span>
            </h2>
            <div className="mx-auto mt-4 flex justify-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-600">
              Send these and we&apos;ll get back with a clear answer — availability, who we can send, and rate. No
              back-and-forth guessing.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            <div className="rounded-xl border-2 border-zinc-200 bg-white p-4 text-center shadow-sm">
              <span className="text-xs font-bold text-rose-500">1</span>
              <p className="mt-1 text-sm font-semibold text-zinc-800">Your area</p>
              <p className="mt-0.5 text-xs text-zinc-500">Panjim, Baga, hotel name</p>
            </div>
            <div className="rounded-xl border-2 border-zinc-200 bg-white p-4 text-center shadow-sm">
              <span className="text-xs font-bold text-rose-500">2</span>
              <p className="mt-1 text-sm font-semibold text-zinc-800">When</p>
              <p className="mt-0.5 text-xs text-zinc-500">Date & rough time</p>
            </div>
            <div className="rounded-xl border-2 border-zinc-200 bg-white p-4 text-center shadow-sm">
              <span className="text-xs font-bold text-rose-500">3</span>
              <p className="mt-1 text-sm font-semibold text-zinc-800">In-call or out-call</p>
              <p className="mt-0.5 text-xs text-zinc-500">Your place or ours</p>
            </div>
            <div className="rounded-xl border-2 border-zinc-200 bg-white p-4 text-center shadow-sm">
              <span className="text-xs font-bold text-rose-500">4</span>
              <p className="mt-1 text-sm font-semibold text-zinc-800">How long</p>
              <p className="mt-0.5 text-xs text-zinc-500">Hours, evening, overnight</p>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-zinc-600">
            We&apos;re not being nosy — it just helps us suggest the right call girl in Goa and give you a straight
            answer on availability and rate. One-line messages get one-line replies; a bit of detail gets you
            sorted faster.
          </p>
          <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-md">
            <div className="relative aspect-[21/9] sm:aspect-[3/1]">
              <Image
                src="/images/message.avif"
                alt="Message us for Goa escorts - what to send"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </div>
        </div>
      </section>
      <ProfileGrid
        profiles={profiles.slice(0, 20)}
        label="Featured"
        title="Featured Goa Call Girls"
        cardVariant="featured"
      />
      {/* Availability & response - asymmetric layout */}
      <section className="bg-zinc-100 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl lg:col-span-4">
              <Image
                src="/images/availablity.avif"
                alt="Goa escorts available 24/7"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <div className="lg:col-span-8 lg:py-4">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
                When we reply
              </span>
              <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                  Availability & Response Time
                </span>
              </h2>
              <div className="mt-4 flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              </div>
              <p className="mt-4 text-sm text-zinc-700">
                We check messages through the day. If you WhatsApp us for call girls in Goa during normal hours,
                you&apos;ll usually get a reply within an hour or two. Late night or early morning? We still look,
                but replies might take a bit longer. We&apos;re not a bot — a real person reads and answers.
              </p>
              <p className="mt-3 text-sm text-zinc-700">
                Best time to get a fast answer: afternoon and evening. That&apos;s when we&apos;re confirming
                bookings and our Goa escorts are checking in. If you need someone for the same evening, message as
                early as you can so we can sort availability and rates without a rush.
              </p>
              <p className="mt-3 text-sm text-zinc-700">
                We don&apos;t do &quot;instant booking&quot; gimmicks. You message, we reply with options and a quote. You
                confirm, we lock the girl and time. That way there&apos;s no mix-up and no one turns up at the wrong
                place.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Cancellation & reschedule - text-only narrow */}
      <section className="bg-rose-50/30 py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="border-l-2 border-rose-300 pl-6">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
              Policy
            </span>
            <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                Cancellation & Rescheduling
              </span>
            </h2>
            <div className="mt-4 flex gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            </div>
            <p className="mt-4 text-sm text-zinc-700">
              Plans change. If you need to cancel or move your booking, tell us as soon as you know. We&apos;d rather
              reschedule than have you no-show or the escort turn up to an empty room. No drama — we just need a
              heads-up so we can free the slot or shift it to another time.
            </p>
            <p className="mt-3 text-sm text-zinc-700">
              If we have to cancel on our side (girl unwell, emergency), we&apos;ll tell you straight away and
              offer another time or another escort. We don&apos;t leave you hanging. Same goes if something comes up
              last minute — we&apos;ll do our best to find a replacement so your evening isn&apos;t wasted.
            </p>
            <p className="mt-3 text-sm text-zinc-700">
              No refunds once the girl has left for out-call or you&apos;ve arrived for in-call. That&apos;s standard.
              But if you cancel before that, we don&apos;t charge you. Fair both ways. When you book escorts in Goa
              with us, we keep it simple: communicate early and we&apos;ll sort it.
            </p>
          </div>
        </div>
      </section>
      {/* Events & occasions - three cards */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
              Occasions
            </span>
            <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                Events & Occasions
              </span>
            </h2>
            <div className="mx-auto mt-4 flex justify-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            </div>
            <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-600">
              A lot of clients book our call girls in Goa for a specific do — not just a casual evening. Here&apos;s
              what we handle often.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-sm font-bold text-rose-600">
                1
              </span>
              <h3 className="mt-4 text-base font-bold text-zinc-800">Parties & nights out</h3>
              <p className="mt-2 text-sm text-zinc-600">
                You need a plus-one for a club, a birthday, or a private party. Our Goa escorts are used to it —
                dressed right, on time, and they know how to blend in. Out-call to the venue or meet you first.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-sm font-bold text-rose-600">
                2
              </span>
              <h3 className="mt-4 text-base font-bold text-zinc-800">Weddings & family events</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Some guys don&apos;t want to show up alone. We send someone presentable and discreet. She&apos;s there
                as your date — no one needs to know she&apos;s an escort. We keep it low-key and classy.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-sm font-bold text-rose-600">
                3
              </span>
              <h3 className="mt-4 text-base font-bold text-zinc-800">Corporate & work do</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Dinner with clients, a company party, or a trip where you need a plus-one. Our escorts in Goa can
                hold a conversation and look the part. Tell us the vibe and we&apos;ll match you.
              </p>
            </div>
          </div>
          <div className="mt-10 overflow-hidden rounded-xl border border-slate-200">
            <div className="relative aspect-[2/1]">
              <Image
                src="/images/event.avif"
                alt="Goa escorts for events and occasions"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </div>
        </div>
      </section>
      {/* What we don't do - checklist + image */}
      <section className="bg-amber-50/30 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
                Boundaries
              </span>
              <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                  What We Don&apos;t Do
                </span>
              </h2>
              <div className="mt-4 flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex gap-3 text-sm text-zinc-700">
                  <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-600">✓</span>
                  We don&apos;t take advance payment or deposits. You pay when you meet. No &quot;send half now&quot; — that&apos;s a scam and we&apos;re not in that game.
                </li>
                <li className="flex gap-3 text-sm text-zinc-700">
                  <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-600">✓</span>
                  We don&apos;t share your number or details with anyone. What you tell us stays with us. Discretion is part of the deal.
                </li>
                <li className="flex gap-3 text-sm text-zinc-700">
                  <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-600">✓</span>
                  We don&apos;t list fake or stock photos. Every profile is the person you&apos;ll meet. If we can&apos;t verify, we don&apos;t put her up.
                </li>
                <li className="flex gap-3 text-sm text-zinc-700">
                  <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-600">✓</span>
                  We don&apos;t do anything illegal or underage. All our call girls in Goa are adults. We expect the same from clients — no exceptions.
                </li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl border-2 border-amber-200/60 bg-white shadow-md">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/we-dont.avif"
                  alt="Goa escorts - what we don't do"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Russian escorts — light luxury section */}
      <section id="russian-escorts" className="relative overflow-hidden border-t border-amber-200/60 bg-gradient-to-b from-amber-50/50 to-stone-50 py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23f59e0b\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-80" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
              Premium companions
            </span>
            <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                Russian Escorts in Goa
              </span>
            </h2>
            <div className="mx-auto mt-4 flex justify-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            </div>
            <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-600">
              Russian escorts and call girls in Goa — discreet, easy-going and here when you want good company.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {russianProfiles.map((profile, index) => (
              <ProfileCard
                key={`${profile.name}-${index}`}
                profile={profile}
                variant="compact"
              />
            ))}
          </div>
        </div>
      </section>
      {/* Russian escorts — Section 1: centered text + full-width image with floating callout (slate accent) */}
      <section className="border-t border-slate-200 bg-slate-50/80 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
            Goa Russian Escorts
          </span>
          <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
            <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
              Russian Escorts in Goa — What to Know
            </span>
          </h2>
          <div className="mx-auto mt-4 flex justify-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          </div>
          <p className="mt-5 text-sm leading-relaxed text-zinc-700 sm:text-base">
            A lot of visitors look for Russian escorts in Goa — they want company that feels different from the
            usual scene. We work with Russian call girls in Goa who are based here or travel through; they’re
            used to the crowds in Baga and Calangute and know how to keep things low-key.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-zinc-700 sm:text-base">
            In-call and out-call both work. You tell us your area (Panjim, North Goa, etc.) and whether you want
            her to come to you or meet at a fixed spot. We’ll only suggest what’s actually doable. Same rules as
            the rest of our service: real profiles, no fake photos, and we spell out what’s on offer before you
            book. If you’re after Russian escorts in Goa specifically, say so when you message — we’ll point you
            to who’s available.
          </p>
        </div>
        <div className="relative mx-auto mt-10 max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-b-3xl rounded-l-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
            <div className="relative aspect-[21/10] sm:aspect-[2/1]">
              <Image
                src="/images/russian-escorts.avif"
                alt="Russian escorts in Goa - discreet company"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Russian escorts — Section 2: sidebar bullets left + text & circular image right (violet accent) */}
      <section className="border-t border-violet-100 bg-gradient-to-b from-white to-violet-50/30 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="rounded-2xl border border-violet-200/60 bg-white p-6 shadow-sm lg:sticky lg:top-8">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
                Quick points
              </span>
              <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                  Booking Russian Call Girls in Goa
                </span>
              </h2>
              <div className="mt-4 flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              </div>
              <ul className="mt-6 space-y-4">
                <li className="flex gap-3 text-sm text-zinc-700">
                  <span className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 font-bold">1</span>
                  Mention you want Russian companionship when you WhatsApp — we’ll send options and a clear quote.
                </li>
                <li className="flex gap-3 text-sm text-zinc-700">
                  <span className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 font-bold">2</span>
                  Tell us when, where (area or hotel) and in-call or out-call so we can confirm quickly.
                </li>
                <li className="flex gap-3 text-sm text-zinc-700">
                  <span className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 font-bold">3</span>
                  Availability depends on who’s in town; we don’t overpromise — if no Russian escort is free, we’ll say so.
                </li>
                <li className="flex gap-3 text-sm text-zinc-700">
                  <span className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 font-bold">4</span>
                  Discretion and timing are the same: we don’t share your details; the right person turns up at the right place.
                </li>
              </ul>
            </div>
            <div className="relative">
              <p className="text-sm leading-relaxed text-zinc-700 sm:text-base">
                When you message us for Russian call girls in Goa, we treat it like any other booking — same
                process, same clarity. We’ll suggest who’s available for your dates and give you a straight
                answer on rate and timing. No extra hassle.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-700 sm:text-base">
                Goa Russian escorts through us are booked the same way as everyone else. If we don’t have someone
                Russian for your preferred time, we might suggest another profile; it’s your call whether you
                want to go ahead or wait. Either way, we keep it discreet and professional.
              </p>
              <div className="mt-8 flex justify-end">
                <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-violet-200/80 shadow-xl sm:h-64 sm:w-64">
                  <Image
                    src="/images/profile-pic.avif"
                    alt="Russian escorts Goa - booking and availability"
                    fill
                    className="object-cover"
                    sizes="256px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Russian content — 1: left border, narrow left block (emerald) */}
      <section className="border-t border-emerald-100 bg-emerald-50/30 py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-emerald-500 pl-6">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
              Preference
            </span>
            <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                Why Some People Prefer Russian Company
              </span>
            </h2>
            <div className="mt-4 flex gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-zinc-700">
              Same service, different preference
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-zinc-700">
              Plenty of clients ask specifically for Russian company. We keep a separate list so you can see who’s
              available — check our <a href="#russian-escorts" className="font-semibold text-emerald-700 underline decoration-emerald-400 underline-offset-2 hover:text-emerald-800"><strong>Russian escorts in Goa</strong></a> section and pick a profile that fits. Same booking process and same discretion as the rest of our service.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-700">
              We don’t oversell it. You either want Russian company or you don’t. If you do, tell us when you
              message and we’ll show you who’s free for your dates. No pressure either way.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-700">
              Rates and rules are the same. In-call, out-call, duration — we spell it out before you confirm. The
              only difference is the list you’re choosing from.
            </p>
          </div>
        </div>
      </section>
      {/* Russian content — 2: centered, very narrow, single underline (stone) */}
      <section className="border-t border-stone-200 bg-stone-100/80 py-16">
        <div className="mx-auto max-w-xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
            Coverage
          </span>
          <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
            <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
              Where and When We Cover
            </span>
          </h2>
          <div className="mx-auto mt-4 flex justify-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          </div>
          <h3 className="mt-4 text-base font-semibold text-zinc-600">
            Goa Russian escorts — same areas as everyone else
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-zinc-700">
            Our <a href="#russian-escorts" className="font-semibold text-stone-800 underline decoration-stone-500 underline-offset-2 hover:text-zinc-900"><strong>Goa Russian escorts</strong></a> work the same areas: Panjim, Calangute, Baga, Anjuna and the usual spots. In-call at a fixed place or out-call to your hotel — your call. We’ll only offer what’s doable for your dates.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-700">
            We don’t promise someone Russian 24/7. Who’s in town changes. When you WhatsApp, we’ll tell you who’s
            free and for when. If nobody’s free for your dates, we’ll say so and you can ask for another profile or wait.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-700">
            First time or tenth — same deal. You get a time, a place and a clear rate. No last-minute surprises.
          </p>
        </div>
      </section>
      {/* Russian content — 3: two-column, h2/h3/p left, p p right (sky) */}
      <section className="border-t border-sky-100 bg-sky-50/40 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
                Meeting
              </span>
              <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                  What Happens When You Meet
                </span>
              </h2>
              <div className="mt-4 flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-zinc-700">
                No special routine — just turn up
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                There’s no script. You book, we confirm the girl and the time. She turns up. Our <a href="#russian-escorts" className="font-semibold text-sky-700 underline decoration-sky-400 underline-offset-2 hover:text-sky-800"><strong>Russian call girls in Goa</strong></a> are the same as the rest of our list: on time, dressed for the occasion, no drama. If you’ve booked out-call, she comes to you; if it’s in-call, we send you the address.
              </p>
            </div>
            <div className="lg:pt-0">
              <p className="text-sm leading-relaxed text-zinc-700">
                First time booking Russian company? Same as first time with any of our profiles. We don’t leave you
                guessing — we tell you what to expect and what’s included before you confirm. If something’s not
                clear, ask when you message.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                Cancellations and rescheduling work the same. Tell us as soon as you know; we’d rather move the
                booking than have someone turn up to an empty room. Fair both ways.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Russian content — 4: right border, right-aligned block (rose) */}
      <section className="border-t border-rose-100 bg-rose-50/20 py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="border-r-4 border-rose-400 pr-6 text-right">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
              Trust
            </span>
            <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                Repeat Bookings and Trust
              </span>
            </h2>
            <div className="mt-4 flex justify-end gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-zinc-700">
              Same face or someone new — your call
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-zinc-700">
              A lot of clients who try our Russian list once come back. They already know the drill: message, get
              options, confirm. If you liked someone and she’s in town again, we can try to match you. Browse our <a href="#russian-escorts" className="font-semibold text-rose-700 underline decoration-rose-400 underline-offset-2 hover:text-rose-800"><strong>Goa Russian call girls</strong></a> and pick who you want — we’ll tell you if she’s free for your dates.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-700">
              We don’t share your number or your history. What you book stays between you, the girl and us. That
              doesn’t change whether you book once or fifty times.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-700">
              No membership, no sign-up. You WhatsApp when you need someone. If you want <a href="#russian-escorts" className="font-semibold text-rose-700 underline decoration-rose-400 underline-offset-2 hover:text-rose-800"><strong>Russian escorts Goa</strong></a> again, just say so and we’ll sort it. Simple as that.
            </p>
          </div>
        </div>
      </section>
      {/* Same-day / last-minute — compact strip (amber) */}
      <section className="border-t border-amber-200/60 bg-amber-50/40 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center sm:gap-6 sm:text-left">
            <div className="shrink-0 rounded-full bg-amber-200/60 p-3">
              <svg className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
                Same day
              </span>
              <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                  Need someone today?
                </span>
              </h2>
              <div className="mt-4 flex gap-1.5 sm:justify-start">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              </div>
              <p className="mt-4 text-sm text-zinc-700">
                Message as early as you can — we’ll tell you what’s possible. Same-day depends on who’s free; we
                don’t promise it but we’ll give you a straight answer. The earlier you text, the better the chance
                we can sort something.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Who typically books — 4 cards (indigo) */}
      <section className="border-t border-indigo-100 bg-indigo-50/20 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
            Who we’re for
          </span>
          <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
            <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
              Who Typically Books With Us
            </span>
          </h2>
          <div className="mt-4 flex gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          </div>
          <p className="mt-4 max-w-2xl text-sm text-zinc-600">
            No single type — just people who want company in Goa without the hassle. Here’s who we see most.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-indigo-200/60 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-bold text-zinc-800">Solo travellers</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                In Goa for a few days or weeks, don’t want to do it all alone. Dinner, a night out or just someone
                to talk to — we match you with someone who fits the vibe.
              </p>
            </div>
            <div className="rounded-xl border border-indigo-200/60 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-bold text-zinc-800">Business trips</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                Here for work, free in the evening. A lot of guys book for a dinner or a drink after meetings.
                Discreet and on time — we get it.
              </p>
            </div>
            <div className="rounded-xl border border-indigo-200/60 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-bold text-zinc-800">Events & plus-ones</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                Party, wedding, work do — you need a date. Our escorts in Goa are used to it. They turn up
                dressed right and know how to blend in.
              </p>
            </div>
            <div className="rounded-xl border border-indigo-200/60 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-bold text-zinc-800">Repeat visitors</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                Same guy, different trip. They already know the drill. We keep the same standards: clear rates,
                same discretion, no drama.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Discretion in practice — quote-style block (neutral) */}
      <section className="border-t border-zinc-200 bg-zinc-50/80 py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="relative border-l-4 border-zinc-400 bg-white py-6 pl-6 pr-4 shadow-sm">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
              Privacy
            </span>
            <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                Discretion in Practice
              </span>
            </h2>
            <div className="mt-4 flex gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-zinc-700">
              We don’t share your number or your details with anyone. What you tell us stays with us. No
              follow-up spam, no selling your data, no passing your info to the girl beyond what’s needed to
              make the booking work.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-700">
              The girl gets a time and a place — or your hotel if it’s out-call. She doesn’t get your number for
              future contact unless you decide that. We’re the link; we keep it that way so both sides feel
              comfortable.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-700">
              After the booking we don’t text you unless you text us. No “how was it?” marketing or unsolicited
              pics. You come back when you want to. That’s how we’ve kept things simple and trusted.
            </p>
          </div>
        </div>
      </section>
      {/* Languages — one-line callout */}
      <section className="border-t border-lime-200/80 bg-lime-50/30 py-10">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-zinc-700">
            Our escorts in Goa — including our Russian companions — speak English, so communication is
            straightforward. If you have a language preference, mention it when you message and we’ll see what
            we can do.
          </p>
        </div>
      </section>
      {/* FAQ — Q&A list (teal accent) */}
      <section className="border-t border-teal-100 bg-teal-50/30 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
            Common questions
          </span>
          <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
            <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <div className="mt-4 flex gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          </div>
          <dl className="mt-8 space-y-8">
            <div>
              <dt className="text-sm font-semibold text-zinc-900">How do I pay?</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-zinc-700">
                Cash when you meet. We don’t take advance payment or deposits. We’ll confirm the rate before you
                book so there’s no surprise at the door.
              </dd>
            </div>
            <div className="border-t border-teal-200/60 pt-8">
              <dt className="text-sm font-semibold text-zinc-900">Can I book for today?</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-zinc-700">
                Sometimes, yes. Message as early as you can — we’ll tell you what’s possible. Same-day depends on
                who’s free; we don’t promise it but we’ll try.
              </dd>
            </div>
            <div className="border-t border-teal-200/60 pt-8">
              <dt className="text-sm font-semibold text-zinc-900">Do you do out-call to my hotel?</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-zinc-700">
                Yes. We cover Panjim, Calangute, Baga, Anjuna and nearby areas. Tell us your area or hotel when
                you message and we’ll confirm if we can send someone to you.
              </dd>
            </div>
            <div className="border-t border-teal-200/60 pt-8">
              <dt className="text-sm font-semibold text-zinc-900">What if I need to cancel?</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-zinc-700">
                Tell us as soon as you know. We’d rather reschedule than have a no-show. No charge if you cancel
                before the girl has left or you’ve arrived. Once she’s on the way or you’re there, we don’t
                refund — same as most services.
              </dd>
            </div>
            <div className="border-t border-teal-200/60 pt-8">
              <dt className="text-sm font-semibold text-zinc-900">Are the photos real?</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-zinc-700">
                Yes. We don’t use stock photos or fake profiles. What you see is who you get. If we can’t verify
                a girl’s pics, she doesn’t go on the list.
              </dd>
            </div>
            <div className="border-t border-teal-200/60 pt-8">
              <dt className="text-sm font-semibold text-zinc-900">How fast do you reply?</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-zinc-700">
                We check WhatsApp through the day. Afternoon and evening you’ll usually get a reply within an
                hour or two. Late night or early morning might take longer. A real person answers — no bots.
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
