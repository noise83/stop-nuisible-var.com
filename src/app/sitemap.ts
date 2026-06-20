import type { MetadataRoute } from "next";
import { globalPages, guides, localLandings, priorityCities, services } from "@/data/site";
import { SITE_URL } from "@/lib/constants";

const DEFAULT_LAST_MODIFIED = "2026-06-13T00:00:00+02:00";
const HOME_LAST_MODIFIED = "2026-06-20T11:09:00+02:00";

function stableDate(value?: string) {
  return new Date(value ?? DEFAULT_LAST_MODIFIED);
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: stableDate(HOME_LAST_MODIFIED),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/demande-devis/`,
      lastModified: stableDate(DEFAULT_LAST_MODIFIED),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...Object.keys(globalPages).map((slug) => ({
      url: `${SITE_URL}/${slug}/`,
      lastModified: stableDate(DEFAULT_LAST_MODIFIED),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...services.map((service) => ({
      url: `${SITE_URL}/${service.slug}/`,
      lastModified: stableDate(service.updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...localLandings.map((landing) => ({
      url: `${SITE_URL}/${landing.slug}/`,
      lastModified: stableDate(landing.updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...priorityCities.map((city) => ({
      url: `${SITE_URL}/villes/${city.slug}/`,
      lastModified: stableDate(DEFAULT_LAST_MODIFIED),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...guides.map((guide) => ({
      url: `${SITE_URL}/guides/${guide.slug}/`,
      lastModified: stableDate(guide.updatedAt ?? guide.published),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
