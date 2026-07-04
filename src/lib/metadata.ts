import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export function buildPageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url,
      siteName: SITE_NAME,
      title,
      description,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
