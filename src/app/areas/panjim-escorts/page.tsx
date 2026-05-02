import type { Metadata } from "next";
import HomePageSections from "@/components/site/HomePageSections";
import { PANJIM_FAQ_JSON_LD_ENTITIES, PANJIM_MARKETING } from "@/data/areaPageCopy/panjim";
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

const area = goaAreas.find((a) => a.slug === "panjim")!;

const siteName = "Mahi Escorts Goa";
const siteUrl = getSiteOrigin();
const canonicalPath = "/areas/panjim-escorts";
const pageUrl = `${siteUrl.replace(/\/$/, "")}${canonicalPath}`;

/** SERP title: primary keywords first, then trust hooks, then brand. */
const metaTitle = `Panjim Escorts: Real Girls | Pay After You Meet | No Advance | ${siteName}`;

/** Meta description: expands the title; keep claims accurate and aligned with on-page copy. */
const metaDescription = `Skip fake ads — ${siteName} is a genuine Goa escorts service built on in-person verification. Real Panjim call girls, pay when you meet, no advance payment, privacy-first WhatsApp booking across the capital.`;

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  keywords: [
    "Panjim escorts",
    "call girls Panjim",
    "escorts in Panjim Goa",
    "no advance escorts Panjim",
    "pay when you meet escorts Goa",
    "verified escorts Panjim",
    "genuine Goa escorts",
    "Panjim escorts service",
    "out-call Panjim",
    "Russian escorts Panjim",
    "escorts Fontainhas",
    "Patto escorts",
    "Miramar call girls",
    "Mandovi river Goa escorts",
    "Dona Paula escorts",
    "Campal escorts",
    "Goa capital escorts",
    "Panjim hotel escorts",
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
    "geo.placename": "Panaji",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${pageUrl}#faqpage`,
  mainEntity: PANJIM_FAQ_JSON_LD_ENTITIES,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl.replace(/\/$/, ""),
  description: metaDescription,
  areaServed: [
    { "@type": "Place", name: "Goa, India" },
    { "@type": "Place", name: "Panjim, Goa" },
    { "@type": "Place", name: "Fontainhas, Panjim" },
    { "@type": "Place", name: "Patto, Panjim" },
    { "@type": "Place", name: "Miramar, Goa" },
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
    name: "Panjim (Panaji)",
    description: area.description,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Goa",
      containedInPlace: {
        "@type": "Country",
        name: "India",
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

export default function PanjimAreaPage() {
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
        marketingCopy={PANJIM_MARKETING}
      />
    </>
  );
}
