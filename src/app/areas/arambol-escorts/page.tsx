import type { Metadata } from "next";
import HomePageSections from "@/components/site/HomePageSections";
import { ARAMBOL_FAQ_JSON_LD_ENTITIES, ARAMBOL_MARKETING } from "@/data/areaPageCopy/arambol";
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

const area = goaAreas.find((a) => a.slug === "arambol")!;

const siteName = "Mahi Escorts Goa";
const siteUrl = getSiteOrigin();
const canonicalPath = "/areas/arambol-escorts";
const pageUrl = `${siteUrl.replace(/\/$/, "")}${canonicalPath}`;

const metaTitle = `Arambol Escorts & Call Girls | No Advance | Pernem Far North`;

const metaDescription = `Book Arambol escorts / Arambol call girls / Arambol russian escorts. WhatsApp booking, in-call & out-call, cash when you meet girl, no advance. All our girls are verified`;

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  keywords: [
    "Arambol escorts",
    "call girls Arambol",
    "escorts in Arambol Goa",
    "Pernem escorts Arambol",
    "North Goa escorts Arambol",
    "Arambol cliff escorts",
    "Sweet Lake Arambol escorts",
    "Mandrem near Arambol call girls",
    "Ashwem Arambol belt escorts",
    "Russian escorts Arambol",
    "out-call Arambol guesthouse",
    "no advance escorts Arambol",
    "cash payment escorts Goa",
    "verified Arambol escorts",
    "Arambol beach road escorts",
    "hippie beach Goa escorts discreet",
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
    "geo.placename": "Arambol",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${pageUrl}#faqpage`,
  mainEntity: ARAMBOL_FAQ_JSON_LD_ENTITIES,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl.replace(/\/$/, ""),
  description: metaDescription,
  areaServed: [
    { "@type": "Place", name: "Goa, India" },
    { "@type": "Place", name: "Arambol, Goa" },
    { "@type": "Place", name: "Mandrem, North Goa" },
    { "@type": "Place", name: "Pernem, North Goa" },
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
    name: "Arambol",
    description: area.description,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Pernem, North Goa",
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

export default function ArambolAreaPage() {
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
        marketingCopy={ARAMBOL_MARKETING}
      />
    </>
  );
}
