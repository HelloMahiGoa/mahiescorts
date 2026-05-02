import type { MetadataRoute } from "next";
import { getSiteOrigin } from "@/lib/siteUrl";

const BASE_URL = getSiteOrigin().replace(/\/+$/, "");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}

