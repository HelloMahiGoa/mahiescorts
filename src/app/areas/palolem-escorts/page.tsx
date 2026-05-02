import type { Metadata } from "next";
import HomePageSections from "@/components/site/HomePageSections";
import { PALOLEM_FAQ_JSON_LD_ENTITIES, PALOLEM_MARKETING } from "@/data/areaPageCopy/palolem";
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

const area = goaAreas.find((a) => a.slug === "palolem")!;

const siteName = "Mahi Escorts Goa";
const siteUrl = getSiteOrigin();
const canonicalPath = "/areas/palolem-escorts";
const pageUrl = `${siteUrl.replace(/\/$/, "")}${canonicalPath}`;

const metaTitle = `Palolem Escorts & Call Girls | No Advance | Canacona Crescent Bay`;

const metaDescription = `Book Palolem escorts / Palolem call girls / Palolem russian escorts. WhatsApp booking, in-call & out-call, cash when you meet girl, no advance. All our girls are verified`;

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  keywords: [
    "Palolem escorts",
    "call girls Palolem",
    "escorts in Palolem Goa",
    "Canacona escorts Palolem",
    "Palolem crescent beach escorts",
    "Patnem near Palolem call girls",
    "Agonda from Palolem escorts",
    "South Goa escorts Palolem",
    "Russian escorts Palolem",
    "out-call Palolem beach hut",
    "no advance escorts Palolem",
    "cash payment escorts Goa",
    "verified Palolem escorts",
    "discreet WhatsApp escorts Palolem",
    "Palolem north south bay escorts",
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
    "geo.placename": "Palolem",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${pageUrl}#faqpage`,
  mainEntity: PALOLEM_FAQ_JSON_LD_ENTITIES,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl.replace(/\/$/, ""),
  description: metaDescription,
  areaServed: [
    { "@type": "Place", name: "Goa, India" },
    { "@type": "Place", name: "Palolem, Canacona" },
    { "@type": "Place", name: "Palolem Beach, South Goa" },
    { "@type": "Place", name: "Canacona, South Goa" },
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
    name: "Palolem",
    description: area.description,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Canacona, South Goa",
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

export default function PalolemAreaPage() {
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
        marketingCopy={PALOLEM_MARKETING}
      />
    </>
  );
}
