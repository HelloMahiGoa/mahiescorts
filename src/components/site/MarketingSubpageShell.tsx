import Hero from "@/components/Hero";

export type MarketingSubpageShellProps = {
  /** Shown in the pill above the H1 (homepage-style). */
  heroBadge: string;
  /** Single-line or short title; passed to Hero as `title` (handwriting + gradient). */
  heroTitle: string;
  heroSubtitle: string;
  heroImageAlt?: string;
  /** Optional strip under the hero — same typography as homepage overview (black band). */
  introBand?: {
    eyebrow: string;
    title: string;
    lead: string;
    finePrint?: string;
  };
  children: React.ReactNode;
};

/**
 * Wraps marketing subpages (services, blog, etc.) with the same Hero + black-band
 * rhythm as {@link HomePageSections} on the homepage.
 */
export default function MarketingSubpageShell({
  heroBadge,
  heroTitle,
  heroSubtitle,
  heroImageAlt = "Mahi Escorts Goa",
  introBand,
  children,
}: MarketingSubpageShellProps) {
  return (
    <>
      <Hero badge={heroBadge} title={heroTitle} subtitle={heroSubtitle} imageAlt={heroImageAlt} />
      {introBand ? (
        <section className="bg-black py-12">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-400">
              {introBand.eyebrow}
            </span>
            <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-white sm:text-4xl">
              <span className="bg-gradient-to-r from-pink-300 via-rose-300 to-amber-300 bg-clip-text text-transparent">
                {introBand.title}
              </span>
            </h2>
            <div className="mx-auto mt-4 flex justify-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-400" />
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            </div>
            <p className="mt-2 text-sm text-zinc-300 sm:text-base">{introBand.lead}</p>
            {introBand.finePrint ? (
              <p className="mt-2 text-xs text-zinc-400 sm:text-sm">{introBand.finePrint}</p>
            ) : null}
          </div>
        </section>
      ) : null}
      {children}
    </>
  );
}
