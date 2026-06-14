import type { MetadataRoute } from "next";
import { globalPages, guides, priorityCities, services } from "@/data/site";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const urls = [
    "",
    "demande-devis",
    ...Object.keys(globalPages),
    ...services.map((service) => service.slug),
    ...priorityCities.map((city) => `villes/${city.slug}`),
    ...guides.map((guide) => `guides/${guide.slug}`),
  ];

  return urls.map((url) => ({
    url: url ? `${SITE_URL}/${url}/` : `${SITE_URL}/`,
    lastModified: now,
    changeFrequency: (url.includes("guides") ? "monthly" : "weekly") as "monthly" | "weekly",
    priority: url === "" ? 1 : url.includes("demande-devis") ? 0.9 : 0.7,
  }));
}
