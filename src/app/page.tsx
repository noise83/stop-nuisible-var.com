import type { Metadata } from "next";
import Link from "next/link";
import { CityCard, RelatedLinks, ServiceCard } from "@/components/cards";
import { CTABand, ConversionHero, ProcessSteps, TrustBar } from "@/components/page-blocks";
import { Eyebrow, Section } from "@/components/ui";
import { priorityCities, services, guides } from "@/data/site";

export const metadata: Metadata = {
  title: "Stop Nuisible Var - Devis anti nuisibles dans le Var",
  description:
    "Punaises de lit, deratisation, cafards, guepes, termites, moustique tigre : decrivez votre probleme dans le Var et soyez recontacte par un professionnel partenaire.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main>
      <ConversionHero
        eyebrow="Var - demande de rappel anti-nuisibles"
        title="Trouvez le bon professionnel contre les nuisibles dans le Var"
        text="Besoin d'un traitement contre les nuisibles dans le Var ? Decrivez votre probleme en moins d'une minute et soyez recontacte par un professionnel partenaire adapte a votre secteur. Stop Nuisible Var aide les habitants, commerces, restaurants, hotels, campings, syndics et gestionnaires a formuler une demande claire."
        bullets={["Rappel selon votre commune", "Devis clair avant decision", "Demande confidentielle"]}
      />
      <TrustBar />

      <Section tone="white">
        <div className="container">
          <Eyebrow>Traitements demandes</Eyebrow>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-black text-[#102337]">Les 8 familles de nuisibles couvertes</h2>
              <p className="mt-3 max-w-2xl leading-7 text-[#607080]">
                Chaque demande est orientee selon le nuisible, le type de lieu et la commune : deratisation Var, desinsectisation Var, moustiques, termites ou depigeonnage.
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
            <Eyebrow>Pourquoi ca convertit</Eyebrow>
            <h2 className="text-3xl font-black text-[#102337]">Une demande utile au lieu d'un appel approximatif</h2>
            <p className="mt-4 leading-8 text-[#405160]">
              Un visiteur inquiet veut savoir quoi faire sans lire une promesse invraisemblable. Le site qualifie les informations essentielles : ville, nuisible, logement ou activite, urgence, message et consentement RGPD. Le partenaire recoit un contexte exploitable, le demandeur gagne du temps.
            </p>
            <p className="mt-4 leading-8 text-[#405160]">
              La plateforme ne pretend pas avoir des techniciens salaries ni une agence physique. Elle centralise des demandes locales de traitement nuisibles Var pour les transmettre a des professionnels partenaires ou intermediaires qualifies.
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
            Les pages locales sont construites autour des contextes reels : densite urbaine a Toulon, jardins et locations a Hyeres, tourisme a Frejus et Saint-Raphael, caves et combles a Draguignan, habitat collectif a La Seyne-sur-Mer.
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
        text="Decrivez les signes observes, votre commune et le type de lieu. Votre demande pourra etre transmise a un professionnel partenaire adapte."
      />
    </main>
  );
}
