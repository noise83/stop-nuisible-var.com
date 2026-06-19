import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyMobileCTA } from "@/components/sticky-mobile-cta";
import { TrackingListener } from "@/components/tracking-listener";
import { GoogleTagManagerConsent } from "@/components/google-tag-manager-consent";
import { JsonLd } from "@/components/json-ld";
import { organizationJsonLd, websiteJsonLd } from "@/lib/jsonld";
import "./globals.css";

const siteUrl = "https://www.stop-nuisible-var.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Stop Nuisible Var - Demande de devis nuisibles dans le Var",
    template: "%s | Stop Nuisible Var",
  },
  description:
    "Plateforme locale de demande de rappel pour punaises de lit, dératisation, cafards, guêpes, termites, moustiques et autres nuisibles dans le Var.",
  alternates: { canonical: "/" },
  verification: {
    google: "SwaYKQISlrcllDu3_lpH00QZvupFIyKkXiH736JsmzM",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Stop Nuisible Var",
    title: "Stop Nuisible Var - Trouver un professionnel anti-nuisibles dans le Var",
    description:
      "Décrivez votre problème et transmettez votre demande à un professionnel partenaire adapté à votre commune du Var.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <GoogleTagManagerConsent />
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <Header />
        <TrackingListener />
        {children}
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
