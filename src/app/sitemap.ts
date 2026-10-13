import type { MetadataRoute } from "next";
import { SERVICES, SITE } from "@/lib/site";

// Served at /sitemap.xml
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(SITE.lastUpdated);
  const pages: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    ...SERVICES.map((s) => ({
      url: `${SITE.url}/services/${s.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${SITE.url}/about`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE.url}/contact`, lastModified, changeFrequency: "yearly", priority: 0.7 },
  ];
  return pages;
}
