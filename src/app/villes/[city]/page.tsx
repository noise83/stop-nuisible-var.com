import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/breadcrumb";
import { RelatedLinks } from "@/components/cards";
import { FAQ } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { CityPageViewTracker } from "@/components/page-view-tracker";
import { CTABand, EmergencyPanel } from "@/components/page-blocks";
import { ButtonLink, Eyebrow, Section } from "@/components/ui";
import { getCity, priorityCities, services } from "@/data/site";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/jsonld";

type Params = Promise<{ city: string }>;

export function generateStaticParams() {
  return priorityCities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  return {
    title: `Traitement nuisibles ${city.name} - Devis et rappel`,
    description: `Demande de rappel anti nuisibles a ${city.name} dans le Var : ${city.pests.join(", ")}. Mise en relation avec un professionnel partenaire.`,
    alternates: { canonical: `/villes/${city.slug}/` },
  };
}

export default async function CityPage({ params }: { params: Params }) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();
  const faq = [
    { question: `Quels nuisibles sont frequents a ${city.name} ?`, answer: `Les demandes les plus probables concernent ${city.pests.join(", ")}, avec un contexte local marque par ${city.angle}.` },
    { question: `Stop Nuisible Var intervient-il directement a ${city.name} ?`, answer: "Non. Le site transmet votre demande a un professionnel ou partenaire specialise susceptible de vous recontacter." },
  ];
  const crumbs = [
    { name: "Accueil", href: "/" },
    { name: "Zones d'intervention", href: "/zones-intervention/" },
    { name: city.name, href: `/villes/${city.slug}/` },
  ];

  return (
    <main>
      <CityPageViewTracker city={city.name} />
      <JsonLd data={[breadcrumbJsonLd(crumbs), faqJsonLd(faq), serviceJsonLd(`Traitement nuisibles ${city.name}`, city.intro, `/villes/${city.slug}/`)]} />
      <Breadcrumb items={crumbs} />
      <Section>
        <div className="container grid gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <Eyebrow>{city.zone}</Eyebrow>
            <h1 className="text-4xl font-black leading-tight text-[#102337] sm:text-5xl">Traitement nuisibles a {city.name}</h1>
            <p className="mt-6 text-lg leading-8 text-[#405160]">{city.intro}</p>
            <p className="mt-4 leading-8 text-[#405160]">
              La demande peut concerner {city.buildingTypes.join(", ")}. Precisez les signes observes, le type de lieu, les contraintes de rappel et l'urgence afin de faciliter la mise en relation.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink />
              <ButtonLink href="/traitement-nuisibles-var/" variant="secondary">Voir tous les nuisibles</ButtonLink>
            </div>
          </div>
          <EmergencyPanel />
        </div>
      </Section>
      <Section tone="white">
        <div className="container grid gap-8 lg:grid-cols-[1fr_360px]">
          <article className="space-y-6 leading-8 text-[#405160]">
            <h2 className="text-3xl font-black text-[#102337]">Demandes frequentes a {city.name}</h2>
            <p>
              A {city.name}, le traitement nuisibles doit tenir compte de {city.angle}. Une demande de deratisation, de desinsectisation, de traitement punaises de lit ou de depigeonnage ne se qualifie pas de la meme facon selon qu'elle concerne un logement, un commerce, une residence ou un jardin.
            </p>
            <p>
              Les communes proches comme {city.neighbours.join(", ")} peuvent aussi entrer dans le meme bassin de rappel. Cette precision geographique aide a transmettre la demande au bon interlocuteur sans inventer une agence locale fictive.
            </p>
            <h2 className="text-3xl font-black text-[#102337]">Conseils avant d'envoyer la demande</h2>
            <ul className="space-y-3">
              {city.localAdvice.map((item) => <li key={item}>- {item}</li>)}
            </ul>
          </article>
          <RelatedLinks
            links={[
              ...services.slice(0, 6).map((service) => ({ label: `${service.shortName} dans le Var`, href: `/${service.slug}/` })),
              { label: "Demande de devis nuisibles", href: "/demande-devis/" },
            ]}
          />
        </div>
      </Section>
      <Section>
        <div className="container max-w-3xl">
          <h2 className="mb-6 text-3xl font-black text-[#102337]">Questions locales</h2>
          <FAQ items={faq} />
        </div>
      </Section>
      <CTABand title={`Decrire un probleme de nuisibles a ${city.name}`} text="Votre demande sera transmise seulement avec votre consentement." />
    </main>
  );
}
