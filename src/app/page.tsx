import type { Metadata } from "next";
import Link from "next/link";
import { CityCard, RelatedLinks, ServiceCard } from "@/components/cards";
import { CTABand, ConversionHero, ProcessSteps } from "@/components/page-blocks";
import { Eyebrow, Section } from "@/components/ui";
import { priorityCities, services, guides } from "@/data/site";

export const metadata: Metadata = {
  title: "Stop Nuisible Var - Rappel gratuit anti-nuisibles dans le Var",
  description:
    "Rats, souris, cafards, punaises de lit, guêpes et frelons : demandez un rappel gratuit dans le Var et transmettez votre situation à un professionnel partenaire.",
  alternates: { canonical: "/" },
};

const homeTrustItems = [
  "Demande gratuite et sans engagement",
  "Contact rapide selon disponibilité du partenaire",
  "Transmission selon votre commune, le nuisible et l’urgence",
  "Données transmises uniquement avec votre consentement",
  "Possibilité d’ajouter une photo",
  "Pas de fausse agence locale affichée",
];

function HomeTrustBar() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold tracking-tight text-slate-950">
          Pourquoi passer par Stop Nuisible Var ?
        </h2>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {homeTrustItems.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-800"
            >
              <span
                aria-hidden="true"
                className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-bold text-white"
              >
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main>
      <ConversionHero
        eyebrow="Var - demande de rappel anti-nuisibles"
        title="Problème de nuisibles dans le Var ? Demandez un rappel gratuit rapidement"
        text="Rats, souris, cafards, punaises de lit, guêpes, frelons : décrivez votre situation en moins d'une minute. Votre demande est transmise à un professionnel partenaire adapté à votre commune, au nuisible concerné et au niveau d'urgence."
        bullets={["Appel direct possible", "Formulaire court", "Consentement obligatoire"]}
      />
      <HomeTrustBar />

      <Section tone="white">
        <div className="container">
          <Eyebrow>Traitements demandés</Eyebrow>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-black text-[#102337]">Les 8 familles de nuisibles couvertes</h2>
              <p className="mt-3 max-w-2xl leading-7 text-[#607080]">
                Chaque demande est orientée selon le nuisible, le type de lieu et la commune concernée : logement, commerce, restaurant, copropriété, jardin ou location saisonnière.
              </p>
            </div>
            <Link className="font-bold text-[#bf593f]" href="/traitement-nuisibles-var/">Voir le hub nuisibles -&gt;</Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </Section>

      <Section tone="sand">
        <div className="container grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <Eyebrow>Demande de rappel</Eyebrow>
            <h2 className="text-3xl font-black text-[#102337]">Une demande claire pour être rappelé plus efficacement</h2>
            <p className="mt-4 leading-8 text-[#405160]">
              Vous indiquez dès le départ les informations importantes : commune, type de nuisible, lieu concerné, niveau d’urgence et téléphone. Votre demande peut ainsi être orientée plus efficacement vers un professionnel partenaire adapté, sans vous faire répéter plusieurs fois la même situation.
            </p>
          </div>
          <ProcessSteps />
        </div>
      </Section>

      <Section tone="white">
        <div className="container">
          <Eyebrow>Couverture locale</Eyebrow>
          <h2 className="text-3xl font-black text-[#102337]">Pages villes prioritaires du Var</h2>
          <p className="mt-3 max-w-3xl leading-7 text-[#607080]">
            Les pages locales sont construites autour des contextes réels : densité urbaine à Toulon, jardins et locations à Hyères, tourisme à Fréjus et Saint-Raphaël, caves et combles à Draguignan, habitat collectif à La Seyne-sur-Mer.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {priorityCities.slice(0, 6).map((city) => (
              <CityCard key={city.slug} city={city} />
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container">
          <RelatedLinks
            links={guides.slice(0, 6).map((guide) => ({
              label: guide.title,
              href: `/guides/${guide.slug}/`,
            }))}
          />
        </div>
      </Section>

      <CTABand
        title="Un doute sur un nuisible dans le Var ?"
        text="Décrivez les signes observés, votre commune et le type de lieu. Votre demande est transmise à un professionnel partenaire adapté selon votre commune, le type de nuisible et le niveau d'urgence."
      />
    </main>
  );
}
