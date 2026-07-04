import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from "@/lib/constants";
import type { FAQItem } from "@/data/site";

const siteUrlWithSlash = `${SITE_URL}/`;

const serviceAreaServed = [
  "Var",
  "Toulon",
  "Hyères",
  "Fréjus",
  "Draguignan",
  "Saint-Raphaël",
  "La Seyne-sur-Mer",
  "Brignoles",
  "Saint-Tropez",
].map((name) => ({ "@type": name === "Var" ? "AdministrativeArea" : "City", name }));

function absoluteUrl(path: string) {
  return new URL(path, siteUrlWithSlash).toString();
}

function platformProvider() {
  return {
    "@type": "Organization",
    name: SITE_NAME,
    url: siteUrlWithSlash,
    email: CONTACT_EMAIL,
    description:
      "Plateforme locale de mise en relation pour les demandes anti-nuisibles dans le Var, sans intervention directe déclarée.",
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: siteUrlWithSlash,
    email: CONTACT_EMAIL,
    areaServed: { "@type": "AdministrativeArea", name: "Var" },
    description:
      "Plateforme locale de mise en relation pour les demandes anti-nuisibles dans le Var, sans intervention directe déclarée.",
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: siteUrlWithSlash,
    description:
      "Plateforme locale de demande de rappel pour rats, cafards, punaises de lit, guêpes, frelons, termites, moustiques et autres nuisibles dans le Var.",
    inLanguage: "fr-FR",
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; href: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function faqJsonLd(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function serviceJsonLd(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: name,
    description,
    areaServed: serviceAreaServed,
    provider: platformProvider(),
    url: absoluteUrl(url),
  };
}

export function pestServiceJsonLd({
  name,
  serviceType,
  description,
  url,
}: {
  name: string;
  serviceType: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType,
    description,
    areaServed: serviceAreaServed,
    provider: platformProvider(),
    url: absoluteUrl(url),
  };
}

export function articleJsonLd(title: string, description: string, url: string, date: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME },
    inLanguage: "fr-FR",
    mainEntityOfPage: absoluteUrl(url),
  };
}
