import Link from "next/link";
import { notFound } from "next/navigation";
import { goaAreas } from "@/data/goaAreas";
import Hero from "@/components/Hero";
import ProfileGrid from "@/components/ProfileGrid";
import ContactBanner from "@/components/ContactBanner";
import { profiles } from "@/data/profiles";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return goaAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const area = goaAreas.find((a) => a.slug === slug);
  if (!area) return { title: "Goa Escorts" };
  return {
    title: `${area.name} Escorts | Call Girls in ${area.name} Goa`,
    description: `Premium escorts and call girls in ${area.name}, Goa. ${area.description}. In-call & out-call. Book 24/7.`,
  };
}

export default async function AreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = goaAreas.find((a) => a.slug === slug);
  if (!area) notFound();

  return (
    <>
      <Hero
        title={`Call Girls in ${area.name} — Escorts ${area.name} Goa`}
        subtitle={`${area.description}. Discreet in-call and out-call service. Book now.`}
      />
      <section className="mx-auto max-w-7xl px-4 py-8">
        <p className="mx-auto max-w-2xl text-center text-zinc-600">
          Browse our verified escorts available in {area.name}. We offer both in-call at our locations and out-call to your hotel or residence in {area.name} and nearby areas.
        </p>
      </section>
      <ProfileGrid
        profiles={profiles}
        title={`${area.name} Call Girls — Select Your Companion`}
      />
      <ContactBanner />
    </>
  );
}
