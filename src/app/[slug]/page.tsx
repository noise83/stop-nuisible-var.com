import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/breadcrumb";
import { CityCard, RelatedLinks, ServiceCard } from "@/components/cards";
import { FAQ } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { CTABand, EmergencyPanel, ProcessSteps } from "@/components/page-blocks";
import { ButtonLink, Eyebrow, Section } from "@/components/ui";
import { extensionCities, getService, globalPages, guides, priorityCities, services } from "@/data/site";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/jsonld";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return [
    ...services.map((service) => ({ slug: service.slug })),
    ...Object.keys(globalPages).map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (service) {
    return {
      title: service.title,
      description: service.description,
      alternates: { canonical: `/${service.slug}/` },
    };
  }
  const page = globalPages[slug as keyof typeof globalPages];
  if (page) {
    return {
      title: page.title,
      description: page.description,
      alternates: { canonical: `/${slug}/` },
    };
  }
  return {};
}

export default async function SlugPage({ params }: { params: Params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (service) return <ServicePage slug={slug} />;

  if (slug === "traitement-nuisibles-var") return <HubPage />;
  if (slug === "zones-intervention") return <ZonesPage />;
  if (slug === "comment-ca-marche") return <HowItWorksPage />;
  if (slug === "partenaires") return <PartnersPage />;
  if (slug === "confidentialite") return <PrivacyPage />;
  if (slug === "mentions-legales") return <LegalPage />;

  notFound();
}

function ServicePage({ slug }: { slug: string }) {
  const service = getService(slug);
  if (!service) notFound();
  const crumbs = [
    { name: "Accueil", href: "/" },
    { name: "Traitement nuisibles Var", href: "/traitement-nuisibles-var/" },
    { name: service.shortName, href: `/${service.slug}/` },
  ];
  return (
    <main>
      <JsonLd data={[breadcrumbJsonLd(crumbs), faqJsonLd(service.faq), serviceJsonLd(service.title, service.description, `/${service.slug}/`)]} />
      <Breadcrumb items={crumbs} />
      <Section>
        <div className="container grid gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <Eyebrow>{service.shortName} dans le Var</Eyebrow>
            <h1 className="text-4xl font-black leading-tight text-[#102337] sm:text-5xl">{service.title}</h1>
            <p className="mt-6 text-lg leading-8 text-[#405160]">{service.hero}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink />
              <ButtonLink href="/zones-intervention/" variant="secondary">Voir les villes couvertes</ButtonLink>
            </div>
          </div>
          <EmergencyPanel />
        </div>
      </Section>
      <Section tone="white">
        <div className="container grid gap-8 lg:grid-cols-3">
          <ContentList title="Signes frequents" items={service.risks} />
          <ContentList title="Lieux concernes" items={service.contexts} />
          <ContentList title="Bons reflexes" items={service.advice} />
        </div>
      </Section>
      <Section>
        <div className="container grid gap-10 lg:grid-cols-[1fr_380px]">
          <article className="space-y-5 leading-8 text-[#405160]">
            <h2 className="text-3xl font-black text-[#102337]">Une demande locale, claire et transmissible</h2>
            <p>
              Pour un traitement nuisibles Var, la bonne orientation depend rarement d'un seul mot-cle. Il faut comprendre la commune, le type de lieu, les signes observes, les contraintes d'acces et le niveau d'urgence. C'est pourquoi Stop Nuisible Var structure la demande avant transmission.
            </p>
            <p>
              Le service convient aux particuliers, proprietaires, locataires, syndics, commerces, restaurants, hotels, campings, conciergeries et collectivites. La plateforme ne promet pas une intervention immediate : elle facilite la mise en relation avec un professionnel anti nuisibles ou un partenaire adapte.
            </p>
            <p>
              Les informations envoyees permettent d'eviter les echanges inutiles : type de nuisible, commune, batiment, disponibilites et message libre. Pour une urgence nuisibles, le formulaire aide aussi a signaler les situations sensibles sans donner de consignes dangereuses.
            </p>
          </article>
          <RelatedLinks
            links={[
              ...priorityCities.slice(0, 6).map((city) => ({ label: `${service.shortName} a ${city.name}`, href: `/villes/${city.slug}/` })),
              ...guides.filter((guide) => guide.serviceSlug === service.slug).map((guide) => ({ label: guide.title, href: `/guides/${guide.slug}/` })),
            ].slice(0, 8)}
          />
        </div>
      </Section>
      <Section tone="white">
        <div className="container max-w-3xl">
          <h2 className="mb-6 text-3xl font-black text-[#102337]">Questions frequentes</h2>
          <FAQ items={service.faq} />
        </div>
      </Section>
      <CTABand title={`Demander un devis ${service.shortName.toLowerCase()} dans le Var`} text="Transmettez les informations utiles en moins d'une minute, avec consentement clair et sans engagement." />
    </main>
  );
}

function HubPage() {
  const crumbs = [
    { name: "Accueil", href: "/" },
    { name: "Traitement nuisibles Var", href: "/traitement-nuisibles-var/" },
  ];
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Breadcrumb items={crumbs} />
      <Section>
        <div className="container">
          <Eyebrow>Hub local</Eyebrow>
          <h1 className="max-w-4xl text-5xl font-black text-[#102337]">Traitement nuisibles Var : une demande, le bon relais local</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#405160]">
            Stop Nuisible Var centralise les demandes de deratisation Var, desinsectisation Var, traitement punaises de lit, termites, guepes, moustique tigre, chenilles et depigeonnage. Le site sert de passerelle claire entre votre situation et un professionnel partenaire.
          </p>
          <div className="mt-8"><ButtonLink /></div>
        </div>
      </Section>
      <Section tone="white">
        <div className="container grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
        </div>
      </Section>
      <CTABand title="Votre demande est locale et contextualisee" text="Ville, nuisible, type de lieu et urgence : ces informations permettent une orientation plus efficace." />
    </main>
  );
}

function ZonesPage() {
  const crumbs = [
    { name: "Accueil", href: "/" },
    { name: "Zones d'intervention", href: "/zones-intervention/" },
  ];
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Breadcrumb items={crumbs} />
      <Section>
        <div className="container">
          <Eyebrow>Var 83</Eyebrow>
          <h1 className="text-5xl font-black text-[#102337]">Zones d'intervention nuisibles dans le Var</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#405160]">
            Les demandes sont orientees selon votre commune et le nuisible concerne. Le MVP couvre en priorite Toulon, Hyeres, Frejus, Draguignan, Saint-Raphael et La Seyne-sur-Mer, avec une base extensible pour le reste du departement.
          </p>
        </div>
      </Section>
      <Section tone="white">
        <div className="container">
          <h2 className="text-3xl font-black text-[#102337]">Villes prioritaires</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {priorityCities.map((city) => <CityCard key={city.slug} city={city} />)}
          </div>
          <h2 className="mt-12 text-3xl font-black text-[#102337]">Communes prevues pour extension</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {extensionCities.map((city) => <span key={city} className="rounded-[7px] border border-[#102337]/10 bg-[#f5f1e8] px-3 py-2 text-sm font-semibold">{city}</span>)}
          </div>
        </div>
      </Section>
      <CTABand title="Votre commune n'est pas encore listee ?" text="Vous pouvez quand meme envoyer une demande : elle sera qualifiee selon votre secteur du Var." />
    </main>
  );
}

function HowItWorksPage() {
  const crumbs = [
    { name: "Accueil", href: "/" },
    { name: "Comment ca marche", href: "/comment-ca-marche/" },
  ];
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Breadcrumb items={crumbs} />
      <Section>
        <div className="container">
          <Eyebrow>Mise en relation</Eyebrow>
          <h1 className="text-5xl font-black text-[#102337]">Comment ca marche ?</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#405160]">Le fonctionnement est volontairement simple : vous expliquez, la demande est qualifiee, puis elle peut etre transmise a un professionnel partenaire adapte.</p>
          <div className="mt-10"><ProcessSteps /></div>
        </div>
      </Section>
      <CTABand title="Commencer par une demande claire" text="Aucun engagement : le partenaire vous recontacte pour expliquer la solution ou le devis possible." />
    </main>
  );
}

function PartnersPage() {
  const crumbs = [
    { name: "Accueil", href: "/" },
    { name: "Partenaires", href: "/partenaires/" },
  ];
  const criteria = ["Zone d'intervention dans le Var", "Capacite de rappel", "Clarte du devis", "Experience sur le nuisible concerne", "Assurance et conformite quand applicable"];
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Breadcrumb items={crumbs} />
      <Section>
        <div className="container grid gap-10 lg:grid-cols-[1fr_380px]">
          <div>
            <Eyebrow>Reseau local</Eyebrow>
            <h1 className="text-5xl font-black text-[#102337]">Professionnels partenaires et mise en relation</h1>
            <p className="mt-6 text-lg leading-8 text-[#405160]">
              Stop Nuisible Var travaille avec ou a vocation a travailler avec des professionnels et intermediaires specialises dans le traitement des nuisibles. Aucun partenaire nomme n'est affiche sans accord signe.
            </p>
          </div>
          <EmergencyPanel />
        </div>
      </Section>
      <Section tone="white">
        <div className="container grid gap-4 md:grid-cols-5">
          {criteria.map((item) => <div key={item} className="rounded-[8px] border border-[#102337]/10 p-5 font-bold text-[#102337]">{item}</div>)}
        </div>
      </Section>
    </main>
  );
}

function PrivacyPage() {
  return <TextPage slug="confidentialite" paragraphs={[
    "Les donnees collectees via le formulaire sont celles necessaires au traitement de la demande : nom ou prenom, telephone, email optionnel, commune, type de nuisible, type de lieu, urgence, message et page d'origine.",
    "La finalite est la qualification de la demande et la mise en relation avec un professionnel ou partenaire specialise dans le traitement des nuisibles dans le Var.",
    "Les destinataires sont l'administrateur du site et les partenaires de mise en relation strictement utiles au traitement de la demande. Le consentement RGPD est obligatoire avant toute transmission.",
    "Les donnees sont conservees pour une duree indicative compatible avec le suivi de la demande, puis supprimees ou archivees de maniere limitee. Cette base doit etre relue par un conseil juridique avant publication definitive.",
    "Vous pouvez demander l'acces, la rectification ou la suppression de vos informations via l'adresse de contact qui sera configuree dans les mentions legales.",
  ]} />;
}

function LegalPage() {
  return <TextPage slug="mentions-legales" paragraphs={[
    "Stop Nuisible Var est un site de demande de devis et de mise en relation locale. Il ne se presente pas comme une entreprise d'intervention directe et n'affiche aucune adresse physique fictive.",
    "L'editeur, l'hebergeur, l'adresse de contact et les informations juridiques definitives doivent etre completes par le proprietaire du site avant mise en production.",
    "Les contenus ont une vocation informative et commerciale. Ils ne remplacent pas un diagnostic technique, sanitaire, reglementaire ou juridique.",
    "Les marques, noms de communes et references geographiques sont utilises pour decrire la couverture locale du service.",
  ]} />;
}

function TextPage({ slug, paragraphs }: { slug: keyof typeof globalPages; paragraphs: string[] }) {
  const page = globalPages[slug];
  const crumbs = [
    { name: "Accueil", href: "/" },
    { name: page.heading, href: `/${slug}/` },
  ];
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Breadcrumb items={crumbs} />
      <Section>
        <div className="container max-w-3xl">
          <h1 className="text-5xl font-black text-[#102337]">{page.heading}</h1>
          <div className="mt-8 space-y-5 leading-8 text-[#405160]">
            {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </Section>
    </main>
  );
}

function ContentList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[8px] border border-[#102337]/10 bg-[#f5f1e8] p-6">
      <h2 className="text-xl font-black text-[#102337]">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-[#405160]">
        {items.map((item) => <li key={item}>- {item}</li>)}
      </ul>
    </div>
  );
}
