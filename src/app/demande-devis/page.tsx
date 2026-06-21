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
  const steps = [
    {
      title: "Décrivez le problème",
      text: "Indiquez le nuisible, les signes observés et les pièces ou zones concernées.",
    },
    {
      title: "Précisez la commune",
      text: "La ville, le code postal et le type de lieu aident à orienter la demande dans le Var.",
    },
    {
      title: "Demandez un rappel",
      text: "Votre demande peut être transmise à un professionnel partenaire avec votre consentement.",
    },
  ];
  const reassurance = [
    "Demande gratuite",
    "Sans engagement",
    "Transmission avec consentement",
    "Plateforme locale Var",
  ];

  return (
    <main className="overflow-x-hidden">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Breadcrumb items={crumbs} />
      <Section>
        <div className="container grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
          <div>
            <Eyebrow>Demande gratuite et sans engagement</Eyebrow>
            <h1 className="break-words text-3xl font-black leading-tight text-[#102337] sm:text-5xl">Demander un rappel pour un problème de nuisibles dans le Var</h1>
            <p className="mt-6 text-lg leading-8 text-[#405160]">
              Décrivez la situation en quelques champs : nuisible suspecté, commune, type de lieu, urgence et créneau de rappel. Stop Nuisible Var reste une plateforme de mise en relation : votre demande peut être transmise à un professionnel partenaire uniquement avec votre consentement.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <PhoneLink />
            </div>
            <div className="mt-8 grid gap-3">
              {steps.map((step, index) => (
                <div key={step.title} className="rounded-[8px] border border-[#102337]/10 bg-white p-4 shadow-[0_10px_26px_rgba(16,35,55,.06)]">
                  <div className="flex gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[8px] bg-[#102337] text-sm font-black text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h2 className="text-base font-black text-[#102337]">{step.title}</h2>
                      <p className="mt-1 text-sm leading-6 text-[#607080]">{step.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-[8px] border border-[#24493d]/15 bg-white p-5 text-sm leading-7 text-[#405160]">
              Une photo peut aider à mieux orienter la demande, mais elle reste facultative. L’analyse reste indicative et ne remplace pas l’avis d’un professionnel.
            </div>
          </div>
          <div>
            <div className="mb-4 grid gap-2 rounded-[8px] border border-[#24493d]/15 bg-white p-4 sm:grid-cols-2">
              {reassurance.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-black text-[#24493d]">
                  <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#bf593f]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <LeadForm />
          </div>
        </div>
      </Section>
    </main>
  );
}
