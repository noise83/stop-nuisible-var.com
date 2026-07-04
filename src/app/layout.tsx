import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyMobileCTA } from "@/components/sticky-mobile-cta";
import { TrackingListener } from "@/components/tracking-listener";
import { GoogleTagManagerConsent } from "@/components/google-tag-manager-consent";
import { JsonLd } from "@/components/json-ld";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { organizationJsonLd, websiteJsonLd } from "@/lib/jsonld";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Stop Nuisible Var - Traitement nuisibles dans le Var",
    template: "%s | Stop Nuisible Var",
  },
  description:
    "Plateforme locale de demande de rappel pour punaises de lit, dératisation, cafards, guêpes, termites, moustiques et autres nuisibles dans le Var.",
  alternates: { canonical: SITE_URL },
  verification: {
    google: "SwaYKQISlrcllDu3_lpH00QZvupFIyKkXiH736JsmzM",
  },
  openGraph: {
    siteName: SITE_NAME,
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
