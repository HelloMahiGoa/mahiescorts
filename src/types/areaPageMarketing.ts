/** Optional copy blocks for area pages that reuse HomePageSections layout. */
export type AreaMarketingBlock = {
  eyebrow?: string;
  title?: string;
  paragraphs?: string[];
};

export type AreaFaqItem = { q: string; a: string };

export type AreaEventCard = { title: string; body: string };

export type AreaWhoCard = { title: string; body: string };

/** Three cards: 24/7, in-call, out-call — titles & descriptions only; icons stay in Services. */
export type AreaServiceMainCard = { title: string; desc: string; tag?: string };

export type AreaPageMarketingCopy = {
  premier?: AreaMarketingBlock;
  localExperience?: AreaMarketingBlock;
  whatToExpect?: AreaMarketingBlock;
  makingEnjoyable?: AreaMarketingBlock & { sidebarEyebrow?: string };
  coverage?: AreaMarketingBlock;
  rates?: AreaMarketingBlock;
  firstMessageAreaHint?: string;
  browseProfilesLabel?: string;
  featuredLabel?: string;

  /** Overrides area-template Hero (H1, subtitle, optional badge & hero image alt). */
  hero?: {
    badge?: string;
    title: string;
    subtitle: string;
    imageAlt?: string;
  };

  realProfiles?: AreaMarketingBlock;
  /** “Quick reply” / first message strip */
  firstMessage?: AreaMarketingBlock & {
    intro?: string;
    footer?: string;
    /** Sub-hints for checklist cards 2–4 (card 1 uses `firstMessageAreaHint`). */
    cardHints?: string[];
  };

  availability?: AreaMarketingBlock;
  cancellation?: AreaMarketingBlock;
  events?: AreaMarketingBlock & { intro?: string; cards?: AreaEventCard[] };
  whatWeDont?: { eyebrow?: string; title?: string; bullets?: string[] };

  servicesBand?: { eyebrow?: string; title?: string; intimateGridTitle?: string };
  servicesMainCards?: [AreaServiceMainCard, AreaServiceMainCard, AreaServiceMainCard];

  howToBook?: AreaMarketingBlock & { intro?: string; steps?: string[] };

  russianGrid?: AreaMarketingBlock;
  russianSlate?: AreaMarketingBlock;
  russianViolet?: {
    eyebrow?: string;
    title?: string;
    bullets?: string[];
    paragraphs?: string[];
  };
  russianEmerald?: AreaMarketingBlock & { subheading?: string };
  russianStone?: AreaMarketingBlock & { subheading?: string };
  russianSky?: {
    eyebrow?: string;
    title?: string;
    subheading?: string;
    leftParagraph?: string;
    rightParagraphs?: string[];
  };
  russianRose?: AreaMarketingBlock & { subheading?: string };

  sameDay?: AreaMarketingBlock;
  whoTypically?: AreaMarketingBlock & { intro?: string; cards?: AreaWhoCard[] };
  discretion?: AreaMarketingBlock;
  languages?: { paragraph?: string };
  faq?: AreaMarketingBlock & { items?: AreaFaqItem[] };

  /** Optional image alt overrides for key visuals */
  imageAlts?: {
    realPic?: string;
    messageBanner?: string;
    availability?: string;
    events?: string;
    weDont?: string;
    russianHero?: string;
    russianProfilePic?: string;
  };
};
