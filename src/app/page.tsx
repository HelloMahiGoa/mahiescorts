import type { Metadata } from "next";
import HomePageSections from "@/components/site/HomePageSections";
import {
  featuredProfileSeeds,
  profileSeeds,
  russianProfileSeeds,
  type Profile,
} from "@/data/profiles";
import { assignProfileImagesFromPublicFolder } from "@/lib/profileImagePool";
import { goaAreas } from "@/data/goaAreas";
import { getSiteOrigin } from "@/lib/siteUrl";

export const dynamic = "force-dynamic";

const siteName = "Mahi Escorts Goa";
const siteOrigin = getSiteOrigin().replace(/\/$/, "");
const defaultDescription =
  "Book Goa escorts / Goa call girls / Goa russian escorts. WhatsApp booking, in-call & out-call, cash when you meet girl, no advance. All our girls are verified";

export const metadata: Metadata = {
  title: `Goa Escorts & Call Girls | No Advance | North & South Goa`,
  description: defaultDescription,
  keywords: [
    "Goa escorts",
    "call girls Goa",
    "escorts in Goa",
    "Mahi Escorts Goa",
    "Russian escorts Goa",
    "verified Goa escorts",
    "no advance escorts Goa",
    "out-call Goa hotel",
    "Panjim escorts",
    "Calangute call girls",
    "Baga escorts",
    "Anjuna escorts",
    "Candolim escorts",
    "Vagator escorts",
    "Margao escorts",
    "Colva escorts",
    "Benaulim escorts",
    "Arambol escorts",
    "Morjim escorts",
    "Palolem escorts",
    "South Goa escorts",
    "North Goa escorts",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${siteOrigin}/`,
    siteName,
    title: `${siteName} — Goa Escorts & Call Girls`,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Goa Escorts & Call Girls`,
    description: defaultDescription,
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
  url: `${siteOrigin}/`,
  description: defaultDescription,
  areaServed: [
    { "@type": "Place", name: "Goa, India" },
    ...goaAreas.map((a) => ({ "@type": "Place", name: `${a.name}, Goa` })),
  ],
};

export default function Home() {
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
      <HomePageSections
        browseProfiles={browseProfiles}
        featuredProfiles={featuredProfiles}
        russianProfiles={russianProfiles}
      />
    </>
  );
}
