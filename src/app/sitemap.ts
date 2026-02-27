import type { MetadataRoute } from "next";
import { goaAreas } from "@/data/goaAreas";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ?? "https://mahiescorts.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const baseRoutes = ["", "/about", "/services", "/contact", "/areas", "/blog"];
  const areaRoutes = goaAreas.map((area) => `/areas/${area.slug}-escorts`);

  const allRoutes = [...baseRoutes, ...areaRoutes];

  return allRoutes.map((path) => ({
    url: `${BASE_URL}${path || "/"}`,
    lastModified,
    changeFrequency: path === "" ? "daily" : "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}


