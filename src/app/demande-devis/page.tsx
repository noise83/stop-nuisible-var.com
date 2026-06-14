import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";
import { LeadForm } from "@/components/lead-form";
import { Eyebrow, Section } from "@/components/ui";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Demande de devis nuisibles Var",
  description:
    "Formulaire de demande de rappel pour nuisibles dans le Var : commune, nuisible, type de lieu, urgence et consentement RGPD.",
  alternates: { canonical: "/demande-devis/" },
};

export default function QuotePage() {
  const crumbs = [
    { name: "Accueil", href: "/" },
    { name: "Demande de devis", href: "/demande-devis/" },
  ];
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Breadcrumb items={crumbs} />
      <Section>
        <div className="container grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <Eyebrow>Rappel / devis</Eyebrow>
            <h1 className="text-5xl font-black leading-tight text-[#102337]">Decrire mon probleme de nuisibles</h1>
            <p className="mt-6 text-lg leading-8 text-[#405160]">
              Completez les informations utiles. Votre demande ne sera transmise a un professionnel ou partenaire specialise qu'avec votre consentement.
            </p>
            <div className="mt-8 rounded-[8px] border border-[#102337]/10 bg-white p-6 text-sm leading-7 text-[#607080]">
              Pas de promesse d'intervention immediate, pas de faux technicien affiche : le formulaire sert a qualifier la demande et faciliter un rappel adapte.
            </div>
          </div>
          <LeadForm />
        </div>
      </Section>
    </main>
  );
}
