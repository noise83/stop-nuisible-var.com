import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";
import { LeadForm } from "@/components/lead-form";
import { Eyebrow, PhoneLink, Section } from "@/components/ui";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Demande de rappel nuisibles Var",
  description:
    "Formulaire court de rappel anti-nuisibles dans le Var : nuisible, ville, code postal, urgence, téléphone et consentement RGPD.",
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
            <h1 className="text-5xl font-black leading-tight text-[#102337]">Décrire mon problème de nuisibles</h1>
            <p className="mt-6 text-lg leading-8 text-[#405160]">
              Complétez les informations utiles. Votre demande est transmise à un professionnel partenaire adapté selon votre commune, le type de nuisible et le niveau d'urgence, uniquement avec votre consentement.
            </p>
            <div className="mt-6">
              <PhoneLink />
            </div>
            <div className="mt-8 rounded-[8px] border border-[#102337]/10 bg-white p-6 text-sm leading-7 text-[#607080]">
              Pas de promesse d'intervention immédiate, pas de faux technicien affiché : le formulaire sert à qualifier la demande et faciliter un rappel adapté.
            </div>
          </div>
          <LeadForm />
        </div>
      </Section>
    </main>
  );
}
