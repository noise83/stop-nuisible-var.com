import { localLandings } from "@/data/site";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const DEFAULT_PUBLISHED_AT = "2026-06-13T00:00:00+02:00";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&apos;");
}

function getPublishedAt(updatedAt?: string) {
  return new Date(updatedAt ?? DEFAULT_PUBLISHED_AT);
}

export function GET() {
  const items = [...localLandings]
    .sort((a, b) => getPublishedAt(b.updatedAt).getTime() - getPublishedAt(a.updatedAt).getTime())
    .slice(0, 20)
    .map((landing) => {
      const link = `${SITE_URL}/${landing.slug}/`;
      const pubDate = getPublishedAt(landing.updatedAt).toUTCString();

      return [
        "    <item>",
        `      <title>${escapeXml(landing.title)}</title>`,
        `      <link>${link}</link>`,
        `      <guid isPermaLink="true">${link}</guid>`,
        `      <pubDate>${pubDate}</pubDate>`,
        `      <description>${escapeXml(landing.description)}</description>`,
        "    </item>",
      ].join("\n");
    })
    .join("\n");

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0">',
    "  <channel>",
    `    <title>${escapeXml(SITE_NAME)} - pages locales récentes</title>`,
    `    <link>${SITE_URL}/</link>`,
    "    <description>Pages locales récentes pour préciser une demande de rappel nuisibles dans le Var.</description>",
    `    <lastBuildDate>${new Date("2026-06-20T11:09:00+02:00").toUTCString()}</lastBuildDate>`,
    items,
    "  </channel>",
    "</rss>",
  ].join("\n");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
