import type { Metadata } from "next";
import HomePageSections from "@/components/site/HomePageSections";
import { CANDOLIM_FAQ_JSON_LD_ENTITIES, CANDOLIM_MARKETING } from "@/data/areaPageCopy/candolim";
import { goaAreas } from "@/data/goaAreas";
import {
  featuredProfileSeeds,
  profileSeeds,
  russianProfileSeeds,
  type Profile,
} from "@/data/profiles";
import { assignProfileImagesFromPublicFolder } from "@/lib/profileImagePool";
import { getSiteOrigin } from "@/lib/siteUrl";

export const dynamic = "force-dynamic";

const area = goaAreas.find((a) => a.slug === "candolim")!;

const siteName = "Mahi Escorts Goa";
const siteUrl = getSiteOrigin();
const canonicalPath = "/areas/candolim-escorts";
const pageUrl = `${siteUrl.replace(/\/$/, "")}${canonicalPath}`;

/** Candolim SERP: resort / Sinquerim-Aguada belt — not Calangute strip or Baga club-lane positioning. */
const metaTitle = `Candolim Resort Escorts & Dinner Plus-Ones | Sinquerim · Aguada Belt | ${siteName}`;

const metaDescription = `${siteName} books Candolim escorts for main beach resorts, Sinquerim villas, and Fort Aguada-road stays — WhatsApp quotes, verified profiles, cash when you meet (no advance UPI scams). Quieter North Goa coast: pool evenings, resort tables, honest Saturday ETAs past Calangute traffic.`;

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  keywords: [
    "Candolim escorts",
    "Candolim call girls",
    "escorts in Candolim Goa",
    "Candolim resort escorts",
    "Sinquerim escorts",
    "Fort Aguada escorts Candolim",
    "Candolim beach hotel out-call",
    "verified escorts Candolim",
    "no advance escorts Candolim",
    "cash on meet escorts North Goa",
    "Candolim dinner plus one",
    "Russian escorts Candolim",
    "Calangute to Candolim escorts",
    "North Goa resort escorts",
    "Candolim quieter beach call girls",
    "Candolim villa escorts",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: canonicalPath,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: pageUrl,
    siteName,
    title: metaTitle,
    description: metaDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
  },
  robots: { index: true, follow: true },
  other: {
    "geo.region": "IN-GA",
    "geo.placename": "Candolim",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${pageUrl}#faqpage`,
  mainEntity: CANDOLIM_FAQ_JSON_LD_ENTITIES,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl.replace(/\/$/, ""),
  description: metaDescription,
  areaServed: [
    { "@type": "Place", name: "Goa, India" },
    { "@type": "Place", name: "Candolim, Goa" },
    { "@type": "Place", name: "Sinquerim, Goa" },
    { "@type": "Place", name: "Calangute, Goa" },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: metaTitle,
  description: metaDescription,
  inLanguage: "en-IN",
  isPartOf: {
    "@type": "WebSite",
    "@id": `${siteUrl.replace(/\/$/, "")}/#website`,
    name: siteName,
    url: siteUrl.replace(/\/$/, ""),
  },
  about: {
    "@type": "Place",
    name: "Candolim",
    description: area.description,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "North Goa, Bardez",
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Goa",
        containedInPlace: {
          "@type": "Country",
          name: "India",
        },
      },
    },
  },
  primaryEntityOfPage: { "@id": `${pageUrl}#faqpage` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${siteUrl.replace(/\/$/, "")}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Areas",
      item: `${siteUrl.replace(/\/$/, "")}/areas`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: `${area.name} escorts`,
      item: pageUrl,
    },
  ],
};

export default function CandolimAreaPage() {
  const browseProfiles: Profile[] = assignProfileImagesFromPublicFolder(
    profileSeeds,
    "regular-profiles"
  );
  const featuredProfiles: Profile[] = assignProfileImagesFromPublicFolder(
    featuredProfileSeeds,
    "featured-profiles"
  );
  const russianProfiles: Profile[] = assignProfileImagesFromPublicFolder(
    russianProfileSeeds,
    "russian-profiles"
  );

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HomePageSections
        browseProfiles={browseProfiles}
        featuredProfiles={featuredProfiles}
        russianProfiles={russianProfiles}
        areaPage={{ name: area.name, description: area.description }}
        marketingCopy={CANDOLIM_MARKETING}
      />
    </>
  );
}
