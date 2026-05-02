import Hero from "@/components/Hero";
import AreaEscortsBreadcrumb from "@/components/site/AreaEscortsBreadcrumb";
import ProfileGrid from "@/components/ProfileGrid";
import ProfileCard from "@/components/ProfileCard";
import Services from "@/components/Services";
import HowToBook from "@/components/HowToBook";
import {
  HOME_AVAILABILITY,
  HOME_CANCELLATION,
  HOME_COVERAGE_PARAS,
  HOME_DISCRETION,
  HOME_EVENTS,
  HOME_FAQ,
  HOME_FIRST_MESSAGE,
  HOME_HOW_TO_BOOK,
  HOME_IMAGE_ALTS,
  HOME_LANGUAGES,
  HOME_LOCAL_EXPERIENCE_PARAS,
  HOME_MAKING_ENJOYABLE_PARAS,
  HOME_PREMIER_PARAS,
  HOME_RATES_PARAS,
  HOME_REAL_PROFILES,
  HOME_RUSSIAN_EMERALD,
  HOME_RUSSIAN_GRID,
  HOME_RUSSIAN_ROSE,
  HOME_RUSSIAN_SKY,
  HOME_RUSSIAN_SLATE,
  HOME_RUSSIAN_STONE,
  HOME_RUSSIAN_VIOLET,
  HOME_SAME_DAY,
  HOME_WHAT_TO_EXPECT_PARAS,
  HOME_WHAT_WE_DONT,
  HOME_WHO_TYPICALLY,
} from "@/data/areaPageCopy/homeDefaults";
import type { Profile } from "@/data/profiles";
import type { AreaPageMarketingCopy } from "@/types/areaPageMarketing";
import Image from "next/image";

export type HomePageAreaContext = {
  name: string;
  description: string;
};

export type HomePageSectionsProps = {
  browseProfiles: Profile[];
  featuredProfiles: Profile[];
  russianProfiles: Profile[];
  /** When set, hero, overview band, and profile grid titles mention this area. */
  areaPage?: HomePageAreaContext;
  /** Area-specific prose (e.g. Panjim). Only applied when passed from the area page. */
  marketingCopy?: AreaPageMarketingCopy;
};

function pickParas(override: string[] | undefined, fallback: readonly string[]): string[] {
  if (override && override.length > 0) return [...override];
  return [...fallback];
}

export default function HomePageSections({
  browseProfiles,
  featuredProfiles,
  russianProfiles,
  areaPage,
  marketingCopy,
}: HomePageSectionsProps) {
  const overviewHeading = areaPage ? `${areaPage.name} Escorts Overview` : "Goa Escorts Overview";
  const overviewLead = areaPage
    ? `Quick peek at how we run things: when you message us for escorts in ${areaPage.name} or call girls visiting ${areaPage.name}, this is the kind of chat you can expect. No fluff — we get to the point and keep your details private.`
    : "Quick peek at how we run things: when you message us for Goa escorts or call girls in Goa, this is the kind of chat you can expect. No fluff — we get to the point and keep your details private.";
  const overviewFinePrint = areaPage
    ? `Same process as the rest of Goa: we confirm timings, in-call vs out-call, and what you're looking for — whether you're in ${areaPage.name} or nearby — so there are no surprises when you meet.`
    : "Not a sales pitch. Just how we confirm timings, in-call vs out-call, and what you're looking for so there are no surprises when you meet.";
  const browseTitle = areaPage
    ? `Meet Escorts in ${areaPage.name} — Handpicked Profiles to Choose From`
    : "Meet Our Goa Escorts — Handpicked Profiles to Choose From";
  const featuredTitle = areaPage
    ? `Featured Call Girls — ${areaPage.name} & Nearby`
    : "Featured Goa Call Girls";

  const premierEyebrow = marketingCopy?.premier?.eyebrow ?? "Premier Goa Escorts";
  const premierTitle = marketingCopy?.premier?.title ?? "How Our Goa Escorts Service Works";
  const premierParagraphs = pickParas(marketingCopy?.premier?.paragraphs, HOME_PREMIER_PARAS);

  const localEyebrow = marketingCopy?.localExperience?.eyebrow ?? "Goa Experience";
  const localTitle = marketingCopy?.localExperience?.title ?? "Spending Time with Escorts in Goa";
  const localParagraphs = pickParas(marketingCopy?.localExperience?.paragraphs, HOME_LOCAL_EXPERIENCE_PARAS);

  const wteEyebrow = marketingCopy?.whatToExpect?.eyebrow ?? "What to Expect";
  const wteTitle = marketingCopy?.whatToExpect?.title ?? "What to Expect When You Book with Us";
  const wteParagraphs = pickParas(marketingCopy?.whatToExpect?.paragraphs, HOME_WHAT_TO_EXPECT_PARAS);

  const makingEyebrow =
    marketingCopy?.makingEnjoyable?.sidebarEyebrow ??
    marketingCopy?.makingEnjoyable?.eyebrow ??
    "Goa & You";
  const makingTitle = marketingCopy?.makingEnjoyable?.title ?? "Making Your Time in Goa More Enjoyable";
  const makingParagraphs = pickParas(marketingCopy?.makingEnjoyable?.paragraphs, HOME_MAKING_ENJOYABLE_PARAS);

  const coverageEyebrow = marketingCopy?.coverage?.eyebrow ?? "Coverage";
  const coverageTitle = marketingCopy?.coverage?.title ?? "Areas We Cover in Goa";
  const coverageParagraphs = pickParas(marketingCopy?.coverage?.paragraphs, HOME_COVERAGE_PARAS);

  const ratesEyebrow = marketingCopy?.rates?.eyebrow ?? "Pricing";
  const ratesTitle = marketingCopy?.rates?.title ?? "Rates & What You Pay For";
  const ratesParagraphs = pickParas(marketingCopy?.rates?.paragraphs, HOME_RATES_PARAS);

  const browseLabel = marketingCopy?.browseProfilesLabel ?? "Our Profiles";
  const firstMessageAreaHint = marketingCopy?.firstMessageAreaHint ?? "Panjim, Baga, hotel name";
  const featuredLabel = marketingCopy?.featuredLabel ?? "Featured";

  const imageAlts = { ...HOME_IMAGE_ALTS, ...marketingCopy?.imageAlts };

  const realEyebrow = marketingCopy?.realProfiles?.eyebrow ?? HOME_REAL_PROFILES.eyebrow;
  const realTitle = marketingCopy?.realProfiles?.title ?? HOME_REAL_PROFILES.title;
  const realParas = pickParas(marketingCopy?.realProfiles?.paragraphs, HOME_REAL_PROFILES.paragraphs);

  const fmEyebrow = marketingCopy?.firstMessage?.eyebrow ?? HOME_FIRST_MESSAGE.eyebrow;
  const fmTitle = marketingCopy?.firstMessage?.title ?? HOME_FIRST_MESSAGE.title;
  const fmIntro = marketingCopy?.firstMessage?.intro ?? HOME_FIRST_MESSAGE.intro;
  const fmFooter = marketingCopy?.firstMessage?.footer ?? HOME_FIRST_MESSAGE.footer;
  const fmCardHints = (marketingCopy?.firstMessage?.cardHints?.length
    ? marketingCopy.firstMessage.cardHints
    : [...HOME_FIRST_MESSAGE.cardHints]
  ).slice(0, 3);

  const availEyebrow = marketingCopy?.availability?.eyebrow ?? HOME_AVAILABILITY.eyebrow;
  const availTitle = marketingCopy?.availability?.title ?? HOME_AVAILABILITY.title;
  const availParas = pickParas(marketingCopy?.availability?.paragraphs, HOME_AVAILABILITY.paragraphs);

  const cancelEyebrow = marketingCopy?.cancellation?.eyebrow ?? HOME_CANCELLATION.eyebrow;
  const cancelTitle = marketingCopy?.cancellation?.title ?? HOME_CANCELLATION.title;
  const cancelParas = pickParas(marketingCopy?.cancellation?.paragraphs, HOME_CANCELLATION.paragraphs);

  const eventsEyebrow = marketingCopy?.events?.eyebrow ?? HOME_EVENTS.eyebrow;
  const eventsTitle = marketingCopy?.events?.title ?? HOME_EVENTS.title;
  const eventsIntro = marketingCopy?.events?.intro ?? HOME_EVENTS.intro;
  const eventCards =
    marketingCopy?.events?.cards && marketingCopy.events.cards.length >= 3
      ? marketingCopy.events.cards.slice(0, 3)
      : [...HOME_EVENTS.cards];

  const wwdEyebrow = marketingCopy?.whatWeDont?.eyebrow ?? HOME_WHAT_WE_DONT.eyebrow;
  const wwdTitle = marketingCopy?.whatWeDont?.title ?? HOME_WHAT_WE_DONT.title;
  const wwdBullets = marketingCopy?.whatWeDont?.bullets?.length
    ? marketingCopy.whatWeDont.bullets
    : [...HOME_WHAT_WE_DONT.bullets];

  const rusGridEyebrow = marketingCopy?.russianGrid?.eyebrow ?? HOME_RUSSIAN_GRID.eyebrow;
  const rusGridTitle = marketingCopy?.russianGrid?.title ?? HOME_RUSSIAN_GRID.title;
  const rusGridIntro =
    marketingCopy?.russianGrid?.paragraphs?.[0] ?? HOME_RUSSIAN_GRID.paragraphs[0];

  const rusSlateEyebrow = marketingCopy?.russianSlate?.eyebrow ?? HOME_RUSSIAN_SLATE.eyebrow;
  const rusSlateTitle = marketingCopy?.russianSlate?.title ?? HOME_RUSSIAN_SLATE.title;
  const rusSlateParas = pickParas(marketingCopy?.russianSlate?.paragraphs, HOME_RUSSIAN_SLATE.paragraphs);

  const rusVioEyebrow = marketingCopy?.russianViolet?.eyebrow ?? HOME_RUSSIAN_VIOLET.eyebrow;
  const rusVioTitle = marketingCopy?.russianViolet?.title ?? HOME_RUSSIAN_VIOLET.title;
  const rusVioBullets = marketingCopy?.russianViolet?.bullets?.length
    ? marketingCopy.russianViolet.bullets
    : [...HOME_RUSSIAN_VIOLET.bullets];
  const rusVioParas = pickParas(marketingCopy?.russianViolet?.paragraphs, HOME_RUSSIAN_VIOLET.paragraphs);

  const rusEmEyebrow = marketingCopy?.russianEmerald?.eyebrow ?? HOME_RUSSIAN_EMERALD.eyebrow;
  const rusEmTitle = marketingCopy?.russianEmerald?.title ?? HOME_RUSSIAN_EMERALD.title;
  const rusEmSub = marketingCopy?.russianEmerald?.subheading ?? HOME_RUSSIAN_EMERALD.subheading;
  const rusEmParas = pickParas(marketingCopy?.russianEmerald?.paragraphs, HOME_RUSSIAN_EMERALD.paragraphs);

  const rusStEyebrow = marketingCopy?.russianStone?.eyebrow ?? HOME_RUSSIAN_STONE.eyebrow;
  const rusStTitle = marketingCopy?.russianStone?.title ?? HOME_RUSSIAN_STONE.title;
  const rusStSub = marketingCopy?.russianStone?.subheading ?? HOME_RUSSIAN_STONE.subheading;
  const rusStParas = pickParas(marketingCopy?.russianStone?.paragraphs, HOME_RUSSIAN_STONE.paragraphs);

  const rusSkyEyebrow = marketingCopy?.russianSky?.eyebrow ?? HOME_RUSSIAN_SKY.eyebrow;
  const rusSkyTitle = marketingCopy?.russianSky?.title ?? HOME_RUSSIAN_SKY.title;
  const rusSkySub = marketingCopy?.russianSky?.subheading ?? HOME_RUSSIAN_SKY.subheading;
  const rusSkyLeft = marketingCopy?.russianSky?.leftParagraph ?? HOME_RUSSIAN_SKY.leftParagraph;
  const rusSkyRight = marketingCopy?.russianSky?.rightParagraphs?.length
    ? marketingCopy.russianSky.rightParagraphs
    : [...HOME_RUSSIAN_SKY.rightParagraphs];

  const rusRoseEyebrow = marketingCopy?.russianRose?.eyebrow ?? HOME_RUSSIAN_ROSE.eyebrow;
  const rusRoseTitle = marketingCopy?.russianRose?.title ?? HOME_RUSSIAN_ROSE.title;
  const rusRoseSub = marketingCopy?.russianRose?.subheading ?? HOME_RUSSIAN_ROSE.subheading;
  const rusRoseParas = pickParas(marketingCopy?.russianRose?.paragraphs, HOME_RUSSIAN_ROSE.paragraphs);

  const sameEyebrow = marketingCopy?.sameDay?.eyebrow ?? HOME_SAME_DAY.eyebrow;
  const sameTitle = marketingCopy?.sameDay?.title ?? HOME_SAME_DAY.title;
  const sameParas = pickParas(marketingCopy?.sameDay?.paragraphs, HOME_SAME_DAY.paragraphs);

  const whoEyebrow = marketingCopy?.whoTypically?.eyebrow ?? HOME_WHO_TYPICALLY.eyebrow;
  const whoTitle = marketingCopy?.whoTypically?.title ?? HOME_WHO_TYPICALLY.title;
  const whoIntro = marketingCopy?.whoTypically?.intro ?? HOME_WHO_TYPICALLY.intro;
  const whoCards =
    marketingCopy?.whoTypically?.cards && marketingCopy.whoTypically.cards.length >= 4
      ? marketingCopy.whoTypically.cards.slice(0, 4)
      : [...HOME_WHO_TYPICALLY.cards];

  const discEyebrow = marketingCopy?.discretion?.eyebrow ?? HOME_DISCRETION.eyebrow;
  const discTitle = marketingCopy?.discretion?.title ?? HOME_DISCRETION.title;
  const discParas = pickParas(marketingCopy?.discretion?.paragraphs, HOME_DISCRETION.paragraphs);

  const langLine = marketingCopy?.languages?.paragraph ?? HOME_LANGUAGES;

  const faqEyebrow = marketingCopy?.faq?.eyebrow ?? HOME_FAQ.eyebrow;
  const faqTitle = marketingCopy?.faq?.title ?? HOME_FAQ.title;
  const faqItems = marketingCopy?.faq?.items && marketingCopy.faq.items.length > 0 ? marketingCopy.faq.items : [...HOME_FAQ.items];

  const heroTitle =
    marketingCopy?.hero?.title ??
    (areaPage ? `Call Girls in ${areaPage.name} — Escorts ${areaPage.name} Goa` : undefined);
  const heroSubtitle =
    marketingCopy?.hero?.subtitle ??
    (areaPage
      ? `${areaPage.description}. Discreet in-call and out-call across ${areaPage.name} and wider Goa. We keep it straightforward.`
      : undefined);
  const heroBadge = marketingCopy?.hero?.badge;
  const heroImageAlt = marketingCopy?.hero?.imageAlt;

  return (
    <>
      {areaPage ? (
        <>
          <AreaEscortsBreadcrumb areaName={areaPage.name} />
          <Hero
            title={heroTitle}
            subtitle={heroSubtitle}
            badge={heroBadge}
            imageAlt={heroImageAlt}
          />
        </>
      ) : (
        <Hero />
      )}
      <section className="bg-black py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-400">
              Overview
            </span>
            <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-white sm:text-4xl">
              <span className="bg-gradient-to-r from-pink-300 via-rose-300 to-amber-300 bg-clip-text text-transparent">
                {overviewHeading}
              </span>
            </h2>
            <div className="mx-auto mt-4 flex justify-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-400" />
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            </div>
            <p className="mt-2 text-sm text-zinc-300 sm:text-base">{overviewLead}</p>
            <p className="mt-2 text-xs text-zinc-400 sm:text-sm">{overviewFinePrint}</p>
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
                {premierEyebrow}
              </span>
              <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                  {premierTitle}
                </span>
              </h2>
              <div className="mt-4 flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              </div>
              {premierParagraphs.map((text, i) => (
                <p
                  key={i}
                  className={i === 0 ? "mt-4 text-sm text-zinc-700 sm:text-base" : "mt-3 text-sm text-zinc-700 sm:text-base"}
                >
                  {text}
                </p>
              ))}
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
                {localEyebrow}
              </span>
              <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                  {localTitle}
                </span>
              </h2>
              <div className="mt-4 flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              </div>
              {localParagraphs.map((text, i) => (
                <p
                  key={i}
                  className={i === 0 ? "mt-4 text-sm text-zinc-700 sm:text-base" : "mt-3 text-sm text-zinc-700 sm:text-base"}
                >
                  {text}
                </p>
              ))}
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
        profiles={browseProfiles}
        label={browseLabel}
        title={browseTitle}
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
                {wteEyebrow}
              </span>
              <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                  {wteTitle}
                </span>
              </h2>
              <div className="mt-4 flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              </div>
              {wteParagraphs.map((text, i) => (
                <p
                  key={i}
                  className={i === 0 ? "mt-4 text-sm text-zinc-700 sm:text-base" : "mt-3 text-sm text-zinc-700 sm:text-base"}
                >
                  {text}
                </p>
              ))}
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
                {makingEyebrow}
              </span>
              <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                  {makingTitle}
                </span>
              </h2>
              <div className="mt-4 flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              </div>
              {makingParagraphs.map((text, i) => (
                <p
                  key={i}
                  className={i === 0 ? "mt-4 text-sm text-zinc-700 sm:text-base" : "mt-3 text-sm text-zinc-700 sm:text-base"}
                >
                  {text}
                </p>
              ))}
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
                {coverageEyebrow}
              </span>
              <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                  {coverageTitle}
                </span>
              </h2>
              <div className="mt-4 flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              </div>
              {coverageParagraphs.map((text, i) => (
                <p key={i} className={i === 0 ? "mt-4 text-sm text-zinc-700" : "mt-3 text-sm text-zinc-700"}>
                  {text}
                </p>
              ))}
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
              {ratesEyebrow}
            </span>
            <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-white sm:text-4xl">
              <span className="bg-gradient-to-r from-pink-300 via-rose-300 to-amber-300 bg-clip-text text-transparent">
                {ratesTitle}
              </span>
            </h2>
            <div className="mx-auto mt-4 flex justify-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-400" />
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            </div>
          </div>
          <div className="mt-10 space-y-6 text-zinc-300">
            {ratesParagraphs.map((text, i) => (
              <p key={i} className="text-sm leading-relaxed sm:text-base">
                {text}
              </p>
            ))}
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
      <Services
        bandEyebrow={marketingCopy?.servicesBand?.eyebrow}
        bandTitle={marketingCopy?.servicesBand?.title}
        intimateGridTitle={marketingCopy?.servicesBand?.intimateGridTitle}
        mainCards={
          marketingCopy?.servicesMainCards ? [...marketingCopy.servicesMainCards] : undefined
        }
      />
      <HowToBook
        eyebrow={marketingCopy?.howToBook?.eyebrow}
        title={marketingCopy?.howToBook?.title}
        intro={marketingCopy?.howToBook?.intro}
        steps={marketingCopy?.howToBook?.steps}
      />
      {/* Real profiles - callout + framed image */}
      <section className="border-y border-zinc-200 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="border-l-4 border-amber-500 py-6 pl-6 pr-2">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
                {realEyebrow}
              </span>
              <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                  {realTitle}
                </span>
              </h2>
              <div className="mt-4 flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              </div>
              {realParas.map((text, i) => (
                <p key={i} className={i === 0 ? "mt-4 text-sm text-zinc-700" : "mt-4 text-sm text-zinc-700"}>
                  {text}
                </p>
              ))}
            </div>
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl bg-amber-100/50" />
              <div className="relative overflow-hidden rounded-2xl border-2 border-amber-200/80 shadow-lg">
                <Image
                  src="/images/real-pic.avif"
                  alt={imageAlts.realPic}
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
              {fmEyebrow}
            </span>
            <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                {fmTitle}
              </span>
            </h2>
            <div className="mx-auto mt-4 flex justify-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-600">{fmIntro}</p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            <div className="rounded-xl border-2 border-zinc-200 bg-white p-4 text-center shadow-sm">
              <span className="text-xs font-bold text-rose-500">1</span>
              <p className="mt-1 text-sm font-semibold text-zinc-800">Your area</p>
              <p className="mt-0.5 text-xs text-zinc-500">{firstMessageAreaHint}</p>
            </div>
            <div className="rounded-xl border-2 border-zinc-200 bg-white p-4 text-center shadow-sm">
              <span className="text-xs font-bold text-rose-500">2</span>
              <p className="mt-1 text-sm font-semibold text-zinc-800">When</p>
              <p className="mt-0.5 text-xs text-zinc-500">{fmCardHints[0]}</p>
            </div>
            <div className="rounded-xl border-2 border-zinc-200 bg-white p-4 text-center shadow-sm">
              <span className="text-xs font-bold text-rose-500">3</span>
              <p className="mt-1 text-sm font-semibold text-zinc-800">In-call or out-call</p>
              <p className="mt-0.5 text-xs text-zinc-500">{fmCardHints[1]}</p>
            </div>
            <div className="rounded-xl border-2 border-zinc-200 bg-white p-4 text-center shadow-sm">
              <span className="text-xs font-bold text-rose-500">4</span>
              <p className="mt-1 text-sm font-semibold text-zinc-800">How long</p>
              <p className="mt-0.5 text-xs text-zinc-500">{fmCardHints[2]}</p>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-zinc-600">{fmFooter}</p>
          <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-md">
            <div className="relative aspect-[21/9] sm:aspect-[3/1]">
              <Image
                src="/images/message.avif"
                alt={imageAlts.messageBanner}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </div>
        </div>
      </section>
      <ProfileGrid
        profiles={featuredProfiles}
        label={featuredLabel}
        title={featuredTitle}
        cardVariant="featured"
      />
      {/* Availability & response - asymmetric layout */}
      <section className="bg-zinc-100 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl lg:col-span-4">
              <Image
                src="/images/availablity.avif"
                alt={imageAlts.availability}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <div className="lg:col-span-8 lg:py-4">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
                {availEyebrow}
              </span>
              <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                  {availTitle}
                </span>
              </h2>
              <div className="mt-4 flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              </div>
              {availParas.map((text, i) => (
                <p key={i} className={i === 0 ? "mt-4 text-sm text-zinc-700" : "mt-3 text-sm text-zinc-700"}>
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Cancellation & reschedule - text-only narrow */}
      <section className="bg-rose-50/30 py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="border-l-2 border-rose-300 pl-6">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
              {cancelEyebrow}
            </span>
            <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                {cancelTitle}
              </span>
            </h2>
            <div className="mt-4 flex gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            </div>
            {cancelParas.map((text, i) => (
              <p key={i} className={i === 0 ? "mt-4 text-sm text-zinc-700" : "mt-3 text-sm text-zinc-700"}>
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>
      {/* Events & occasions - three cards */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
              {eventsEyebrow}
            </span>
            <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                {eventsTitle}
              </span>
            </h2>
            <div className="mx-auto mt-4 flex justify-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            </div>
            <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-600">{eventsIntro}</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {eventCards.map((card, index) => (
              <div key={`${card.title}-${index}`} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-sm font-bold text-rose-600">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-base font-bold text-zinc-800">{card.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{card.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 overflow-hidden rounded-xl border border-slate-200">
            <div className="relative aspect-[2/1]">
              <Image
                src="/images/event.avif"
                alt={imageAlts.events}
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
                {wwdEyebrow}
              </span>
              <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                  {wwdTitle}
                </span>
              </h2>
              <div className="mt-4 flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              </div>
              <ul className="mt-6 space-y-3">
                {wwdBullets.map((line, i) => (
                  <li key={i} className="flex gap-3 text-sm text-zinc-700">
                    <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-600">
                      ✓
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl border-2 border-amber-200/60 bg-white shadow-md">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/we-dont.avif"
                  alt={imageAlts.weDont}
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
              {rusGridEyebrow}
            </span>
            <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                {rusGridTitle}
              </span>
            </h2>
            <div className="mx-auto mt-4 flex justify-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            </div>
            <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-600">{rusGridIntro}</p>
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
            {rusSlateEyebrow}
          </span>
          <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
            <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
              {rusSlateTitle}
            </span>
          </h2>
          <div className="mx-auto mt-4 flex justify-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          </div>
          {rusSlateParas.map((text, i) => (
            <p
              key={i}
              className={i === 0 ? "mt-5 text-sm leading-relaxed text-zinc-700 sm:text-base" : "mt-4 text-sm leading-relaxed text-zinc-700 sm:text-base"}
            >
              {text}
            </p>
          ))}
        </div>
        <div className="relative mx-auto mt-10 max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-b-3xl rounded-l-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
            <div className="relative aspect-[21/10] sm:aspect-[2/1]">
              <Image
                src="/images/russian-escorts.avif"
                alt={imageAlts.russianHero}
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
                {rusVioEyebrow}
              </span>
              <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                  {rusVioTitle}
                </span>
              </h2>
              <div className="mt-4 flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              </div>
              <ul className="mt-6 space-y-4">
                {rusVioBullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-sm text-zinc-700">
                    <span className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 font-bold">
                      {i + 1}
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              {rusVioParas.map((text, i) => (
                <p
                  key={i}
                  className={i === 0 ? "text-sm leading-relaxed text-zinc-700 sm:text-base" : "mt-4 text-sm leading-relaxed text-zinc-700 sm:text-base"}
                >
                  {text}
                </p>
              ))}
              <div className="mt-8 flex justify-end">
                <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-violet-200/80 shadow-xl sm:h-64 sm:w-64">
                  <Image
                    src="/images/profile-pic.avif"
                    alt={imageAlts.russianProfilePic}
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
              {rusEmEyebrow}
            </span>
            <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                {rusEmTitle}
              </span>
            </h2>
            <div className="mt-4 flex gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-zinc-700">{rusEmSub}</h3>
            {rusEmParas.map((text, i) => (
              <p key={i} className={i === 0 ? "mt-4 text-sm leading-relaxed text-zinc-700" : "mt-3 text-sm leading-relaxed text-zinc-700"}>
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>
      {/* Russian content — 2: centered, very narrow, single underline (stone) */}
      <section className="border-t border-stone-200 bg-stone-100/80 py-16">
        <div className="mx-auto max-w-xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
            {rusStEyebrow}
          </span>
          <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
            <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
              {rusStTitle}
            </span>
          </h2>
          <div className="mx-auto mt-4 flex justify-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          </div>
          <h3 className="mt-4 text-base font-semibold text-zinc-600">{rusStSub}</h3>
          {rusStParas.map((text, i) => (
            <p key={i} className={i === 0 ? "mt-4 text-sm leading-relaxed text-zinc-700" : "mt-3 text-sm leading-relaxed text-zinc-700"}>
              {text}
            </p>
          ))}
        </div>
      </section>
      {/* Russian content — 3: two-column, h2/h3/p left, p p right (sky) */}
      <section className="border-t border-sky-100 bg-sky-50/40 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
                {rusSkyEyebrow}
              </span>
              <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                  {rusSkyTitle}
                </span>
              </h2>
              <div className="mt-4 flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-zinc-700">{rusSkySub}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">{rusSkyLeft}</p>
            </div>
            <div className="lg:pt-0">
              {rusSkyRight.map((text, i) => (
                <p key={i} className={i === 0 ? "text-sm leading-relaxed text-zinc-700" : "mt-3 text-sm leading-relaxed text-zinc-700"}>
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Russian content — 4: right border, right-aligned block (rose) */}
      <section className="border-t border-rose-100 bg-rose-50/20 py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="border-r-4 border-rose-400 pr-6 text-right">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
              {rusRoseEyebrow}
            </span>
            <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                {rusRoseTitle}
              </span>
            </h2>
            <div className="mt-4 flex justify-end gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-zinc-700">{rusRoseSub}</h3>
            {rusRoseParas.map((text, i) => (
              <p key={i} className={i === 0 ? "mt-4 text-sm leading-relaxed text-zinc-700" : "mt-3 text-sm leading-relaxed text-zinc-700"}>
                {text}
              </p>
            ))}
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
                {sameEyebrow}
              </span>
              <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                  {sameTitle}
                </span>
              </h2>
              <div className="mt-4 flex gap-1.5 sm:justify-start">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              </div>
              {sameParas.map((text, i) => (
                <p key={i} className={i === 0 ? "mt-4 text-sm text-zinc-700" : "mt-3 text-sm text-zinc-700"}>
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Who typically books — 4 cards (indigo) */}
      <section className="border-t border-indigo-100 bg-indigo-50/20 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
            {whoEyebrow}
          </span>
          <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
            <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
              {whoTitle}
            </span>
          </h2>
          <div className="mt-4 flex gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          </div>
          <p className="mt-4 max-w-2xl text-sm text-zinc-600">{whoIntro}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whoCards.map((card, i) => (
              <div key={`${card.title}-${i}`} className="rounded-xl border border-indigo-200/60 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-bold text-zinc-800">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Discretion in practice — quote-style block (neutral) */}
      <section className="border-t border-zinc-200 bg-zinc-50/80 py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="relative border-l-4 border-zinc-400 bg-white py-6 pl-6 pr-4 shadow-sm">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
              {discEyebrow}
            </span>
            <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                {discTitle}
              </span>
            </h2>
            <div className="mt-4 flex gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            </div>
            {discParas.map((text, i) => (
              <p key={i} className={i === 0 ? "mt-4 text-sm leading-relaxed text-zinc-700" : "mt-3 text-sm leading-relaxed text-zinc-700"}>
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>
      {/* Languages — one-line callout */}
      <section className="border-t border-lime-200/80 bg-lime-50/30 py-10">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-zinc-700">{langLine}</p>
        </div>
      </section>
      {/* FAQ — Q&A list (teal accent) */}
      <section className="border-t border-teal-100 bg-teal-50/30 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
            {faqEyebrow}
          </span>
          <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
            <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
              {faqTitle}
            </span>
          </h2>
          <div className="mt-4 flex gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          </div>
          <dl className="mt-8 space-y-8">
            {faqItems.map((item, i) => (
              <div key={i} className={i > 0 ? "border-t border-teal-200/60 pt-8" : ""}>
                <dt className="text-sm font-semibold text-zinc-900">{item.q}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-zinc-700">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
