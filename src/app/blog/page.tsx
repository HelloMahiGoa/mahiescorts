import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog | Mahi Escorts Goa",
  description: "Tips, guides and updates about Goa escorts, booking discreetly, and making the most of your time in Goa.",
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
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-4 text-3xl font-bold text-zinc-800">Blog</h1>
      <p className="mb-12 text-zinc-600">
        Tips, guides and updates about Goa, booking discreetly, and companionship.
      </p>
      <ul className="space-y-8">
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <article className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-rose-200 hover:shadow-md">
              <time dateTime={post.date} className="text-xs font-medium text-zinc-500">
                {formatDate(post.date)}
              </time>
              <h2 className="mt-2 text-xl font-semibold text-zinc-800">
                <Link href={`/blog/${post.slug}`} className="hover:text-rose-600 hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 text-sm text-zinc-600">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-3 inline-block text-sm font-medium text-rose-600 hover:underline"
              >
                Read more →
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
