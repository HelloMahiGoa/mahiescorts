import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import MarketingSubpageShell from "@/components/site/MarketingSubpageShell";

export const metadata: Metadata = {
  title: "Blog | Mahi Escorts Goa",
  description:
    "Tips, guides and updates about Goa escorts, booking discreetly, and making the most of your time in Goa.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <MarketingSubpageShell
      heroBadge="Blog"
      heroTitle="Guides & Tips"
      heroSubtitle="Straight talk on areas, booking discreetly, in-call vs out-call, and making the most of your time in Goa — same voice you get on WhatsApp."
      heroImageAlt="Mahi Escorts Goa blog"
      introBand={{
        eyebrow: "Read",
        title: "Planning Your Trip",
        lead: "Short articles you can skim before you message — no filler, no hard sell.",
      }}
    >
      <section className="bg-[#fff5f7] py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ul className="space-y-6">
            {blogPosts.map((post) => (
              <li key={post.slug}>
                <article className="overflow-hidden rounded-3xl border border-white/60 bg-white p-6 shadow-xl shadow-pink-200/50 transition hover:-translate-y-0.5 hover:shadow-2xl">
                  <time dateTime={post.date} className="text-xs font-semibold uppercase tracking-wide text-pink-500">
                    {formatDate(post.date)}
                  </time>
                  <h2 className="font-handwriting mt-2 text-2xl font-bold leading-snug text-zinc-900 sm:text-3xl">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="bg-gradient-to-r from-pink-600 via-rose-600 to-amber-600 bg-clip-text text-transparent hover:from-pink-500 hover:via-rose-500 hover:to-amber-500"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <div className="mt-3 flex gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-rose-600 transition hover:text-rose-700"
                  >
                    Read article <span aria-hidden>→</span>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </MarketingSubpageShell>
  );
}
