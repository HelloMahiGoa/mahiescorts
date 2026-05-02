import type { Metadata } from "next";
import HomePageSections from "@/components/site/HomePageSections";
import { BAGA_FAQ_JSON_LD_ENTITIES, BAGA_MARKETING } from "@/data/areaPageCopy/baga";
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

const area = goaAreas.find((a) => a.slug === "baga")!;

const siteName = "Mahi Escorts Goa";
const siteUrl = getSiteOrigin();
const canonicalPath = "/areas/baga-escorts";
const pageUrl = `${siteUrl.replace(/\/$/, "")}${canonicalPath}`;

const metaTitle = `Baga Escorts & Call Girls | No Advance | Creek & Club Strip`;

const metaDescription = `Book Baga escorts / Baga call girls / Baga russian escorts. WhatsApp booking, in-call & out-call, cash when you meet girl, no advance. All our girls are verified`;

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  keywords: [
    "Baga escorts",
    "Baga call girls",
    "escorts in Baga Goa",
    "Tito's lane Baga escorts",
    "Baga creek hotel escorts",
    "Saunta Vaddo escorts",
    "verified escorts Baga",
    "no advance escorts Baga",
    "cash on meet escorts North Goa",
    "Baga beach hotel out-call",
    "Russian escorts Baga",
    "Calangute to Baga escorts",
    "Baga nightlife call girls",
    "North Goa party strip escorts",
    "Baga Brittos beach escorts",
    "Mambo's Baga escorts near",
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
    "geo.placename": "Baga",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${pageUrl}#faqpage`,
  mainEntity: BAGA_FAQ_JSON_LD_ENTITIES,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl.replace(/\/$/, ""),
  description: metaDescription,
  areaServed: [
    { "@type": "Place", name: "Goa, India" },
    { "@type": "Place", name: "Baga, Goa" },
    { "@type": "Place", name: "Calangute, Goa" },
    { "@type": "Place", name: "Anjuna, Goa" },
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
    name: "Baga",
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

export default function BagaAreaPage() {
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
        marketingCopy={BAGA_MARKETING}
      />
    </>
  );
}
