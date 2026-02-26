import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/data/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Blog | Mahi Escorts Goa" };
  return {
    title: `${post.title} | Mahi Escorts Goa Blog`,
    description: post.excerpt,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Placeholder content per slug — in a real app this could be MDX or CMS
const postContent: Record<string, string> = {
  "best-areas-for-escorts-in-goa": `
    Goa is known for its beaches, nightlife and relaxed vibe. Some of the most popular areas for visitors — and where we offer reliable escort service — include Panjim (the capital, with a charming Latin Quarter), Calangute and Baga (beach hubs with clubs and shacks), Anjuna (flea market and hippie culture), Candolim (quieter beach), and Vagator (cliffs and sunset points). South Goa areas like Margao, Colva and Benaulim offer a more laid-back feel. We cover all these areas with in-call and out-call service so you can choose what suits your stay.
  `,
  "how-to-book-discreetly-in-goa": `
    Booking discreetly is simple. Contact us by call or WhatsApp — both are private. Share your preferred area in Goa, whether you want in-call (our location) or out-call (your hotel or residence), and your preferred time. We'll confirm availability and guide you through the rest. We don't share your details, and all arrangements are handled with full discretion. If you're in a hotel, we can coordinate timing so everything runs smoothly.
  `,
  "in-call-vs-out-call-goa": `
    In-call means you visit our discreet location in Goa. It's ideal if you prefer a fixed, comfortable setting and don't want to host. Out-call means our escort comes to you — your hotel room, resort, or apartment. It's popular with travellers who want to stay in their own space. Both options offer the same quality and professionalism. Tell us your preference when you book, and we'll arrange accordingly across Panjim, Calangute, Baga, Anjuna and other areas.
  `,
  "goa-nightlife-and-companionship": `
    Goa's nightlife is legendary — from beach shacks and rooftop bars to clubs in Baga and Anjuna. Having a companion can make the experience even better. Whether you want someone to join you for dinner, a party, or a quiet evening, we can arrange it. Our escorts are comfortable in social settings and know the local scene. Book in advance for weekend nights or special occasions so we can match you with the right person and ensure a memorable time.
  `,
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const content = postContent[post.slug]?.trim() ?? "Content coming soon.";

  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <Link href="/blog" className="mb-6 inline-block text-sm text-rose-600 hover:underline">
        ← Back to Blog
      </Link>
      <article>
        <time dateTime={post.date} className="text-sm text-zinc-500">
          {formatDate(post.date)} · {post.author}
        </time>
        <h1 className="mt-2 text-3xl font-bold text-zinc-800">{post.title}</h1>
        <div className="mt-8 space-y-4 text-zinc-600">
          {content.split(/\n\n+/).map((para, i) => (
            <p key={i}>{para.trim()}</p>
          ))}
        </div>
      </article>
    </div>
  );
}
