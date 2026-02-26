export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "best-areas-for-escorts-in-goa",
    title: "Best Areas for Escorts in Goa",
    excerpt: "A quick guide to Goa's most popular areas for companionship — from Panjim to Baga and Anjuna.",
    date: "2025-02-20",
    author: "Mahi Escorts",
  },
  {
    slug: "how-to-book-discreetly-in-goa",
    title: "How to Book Discreetly in Goa",
    excerpt: "Tips for a smooth, private booking experience when you're in Goa for business or leisure.",
    date: "2025-02-15",
    author: "Mahi Escorts",
  },
  {
    slug: "in-call-vs-out-call-goa",
    title: "In-Call vs Out-Call: What's Right for You in Goa",
    excerpt: "Understand the difference between visiting our location or having an escort come to your hotel.",
    date: "2025-02-10",
    author: "Mahi Escorts",
  },
  {
    slug: "goa-nightlife-and-companionship",
    title: "Goa Nightlife and Companionship",
    excerpt: "Making the most of Goa's nightlife with the right companion — clubs, beaches and more.",
    date: "2025-02-05",
    author: "Mahi Escorts",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
