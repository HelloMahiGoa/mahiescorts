import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { goaAreas } from "@/data/goaAreas";
import { getSiteOrigin } from "@/lib/siteUrl";

const BASE_URL = getSiteOrigin().replace(/\/+$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/areas`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const areaPages: MetadataRoute.Sitemap = goaAreas.map((area) => ({
    url: `${BASE_URL}/areas/${area.slug}-escorts`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...areaPages, ...blogPages];
}
