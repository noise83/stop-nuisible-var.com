import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/breadcrumb";
import { CityCard, RelatedLinks, ServiceCard } from "@/components/cards";
import { FAQ } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { LeadForm } from "@/components/lead-form";
import { CTABand, EmergencyPanel, ProcessSteps, TrustBar } from "@/components/page-blocks";
import { ButtonLink, Eyebrow, PhoneLink, Section } from "@/components/ui";
import { extensionCities, getCity, getLocalLanding, getService, globalPages, guides, localLandings, priorityCities, services } from "@/data/site";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/jsonld";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return [
    ...services.map((service) => ({ slug: service.slug })),
    ...localLandings.map((landing) => ({ slug: landing.slug })),
    ...Object.keys(globalPages).map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  const landing = getLocalLanding(slug);
  if (landing) {
    return {
      title: landing.title,
      description: landing.description,
      alternates: { canonical: `/${landing.slug}/` },
    };
  }
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
  const landing = getLocalLanding(slug);
  if (landing) return <LocalLandingPage slug={slug} />;
  if (service) return <ServicePage slug={slug} />;

  if (slug === "traitement-nuisibles-var") return <HubPage />;
  if (slug === "zones-intervention") return <ZonesPage />;
  if (slug === "comment-ca-marche") return <HowItWorksPage />;
  if (slug === "partenaires") return <PartnersPage />;
  if (slug === "confidentialite") return <PrivacyPage />;
  if (slug === "mentions-legales") return <LegalPage />;

  notFound();
}

function LocalLandingPage({ slug }: { slug: string }) {
  const landing = getLocalLanding(slug);
  if (!landing) notFound();
  const service = getService(landing.serviceSlug);
  const city = getCity(landing.citySlug);
  if (!service || !city) notFound();
  const crumbs = [
    { name: "Accueil", href: "/" },
    { name: service.shortName, href: `/${service.slug}/` },
    { name: city.name, href: `/${landing.slug}/` },
  ];
  return (
    <main>
      <JsonLd data={[breadcrumbJsonLd(crumbs), faqJsonLd(landing.faq), serviceJsonLd(landing.h1, landing.description, `/${landing.slug}/`)]} />
      <Breadcrumb items={crumbs} />
      <Section>
        <div className="container grid items-start gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <Eyebrow>{city.name} - {service.shortName}</Eyebrow>
            <h1 className="text-4xl font-black leading-tight text-[#102337] sm:text-5xl">{landing.h1}</h1>
            <p className="mt-5 text-lg leading-8 text-[#405160]">{landing.promise}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <PhoneLink />
              <ButtonLink>Demander un rappel gratuit</ButtonLink>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {landing.reassurance.map((item) => (
                <div key={item} className="rounded-[7px] border border-[#102337]/10 bg-white px-4 py-3 text-sm font-bold text-[#102337]">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <LeadForm />
        </div>
      </Section>
      <TrustBar />
      <Section tone="white">
        <div className="container grid gap-8 lg:grid-cols-[1fr_360px]">
          <article className="space-y-5 leading-8 text-[#405160]">
            <h2 className="text-3xl font-black text-[#102337]">Demande anti-nuisibles autour de {city.name}</h2>
            <p>
              Cette page sert à formuler une demande courte pour {service.shortName.toLowerCase()} à {city.name}. Les communes proches comme {city.neighbours.join(", ")} peuvent aussi être précisées dans le message si le problème se situe à proximité.
            </p>
            <p>
              Le but est simple : collecter les informations utiles, vérifier le consentement RGPD et transmettre une demande exploitable à une entreprise partenaire spécialisée, sans fausse promesse de délai ni faux avis.
            </p>
            <h2 className="text-3xl font-black text-[#102337]">Informations utiles avant le rappel</h2>
            <ul className="space-y-3">
              {[...service.risks.slice(0, 2), ...city.localAdvice.slice(0, 2)].map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </article>
          <RelatedLinks
            links={[
              { label: `${service.shortName} dans le Var`, href: `/${service.slug}/` },
              { label: `Tous les nuisibles à ${city.name}`, href: `/villes/${city.slug}/` },
              { label: "Demande de rappel", href: "/demande-devis/" },
            ]}
          />
        </div>
      </Section>
      <Section>
        <div className="container max-w-3xl">
          <h2 className="mb-6 text-3xl font-black text-[#102337]">Questions fréquentes</h2>
          <FAQ items={landing.faq} />
        </div>
      </Section>
      <CTABand title={`Besoin d'un rappel à ${city.name} ?`} text="Le formulaire court permet de qualifier la demande rapidement avec un téléphone et un consentement clair." />
    </main>
  );
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
              <PhoneLink />
            </div>
          </div>
          <EmergencyPanel />
        </div>
      </Section>
      <TrustBar />
      <Section tone="white">
        <div className="container grid gap-8 lg:grid-cols-3">
          <ContentList title="Signes fréquents" items={service.risks} />
          <ContentList title="Lieux concernés" items={service.contexts} />
          <ContentList title="Bons réflexes" items={service.advice} />
        </div>
      </Section>
      <Section>
        <div className="container grid gap-10 lg:grid-cols-[1fr_380px]">
          <article className="space-y-5 leading-8 text-[#405160]">
            <h2 className="text-3xl font-black text-[#102337]">Une demande locale, claire et transmissible</h2>
            <p>
              Pour un traitement nuisibles Var, la bonne orientation dépend rarement d'un seul mot-clé. Il faut comprendre la commune, le type de lieu, les signes observés, les contraintes d'accès et le niveau d'urgence. C'est pourquoi Stop Nuisible Var structure la demande avant transmission.
            </p>
            <p>
              Le service convient aux particuliers, propriétaires, locataires, syndics, commerces, restaurants, hôtels, campings, conciergeries et collectivités. Votre demande est transmise à un professionnel partenaire adapté selon votre commune, le type de nuisible et le niveau d'urgence.
            </p>
            <p>
              Les informations envoyées permettent d'éviter les échanges inutiles : type de nuisible, commune, bâtiment, disponibilités et message libre. Pour une urgence nuisibles, le formulaire aide aussi à signaler les situations sensibles sans donner de consignes dangereuses.
            </p>
          </article>
          <RelatedLinks
            links={[
              ...priorityCities.slice(0, 6).map((city) => ({ label: `${service.shortName} à ${city.name}`, href: `/villes/${city.slug}/` })),
              ...guides.filter((guide) => guide.serviceSlug === service.slug).map((guide) => ({ label: guide.title, href: `/guides/${guide.slug}/` })),
            ].slice(0, 8)}
          />
        </div>
      </Section>
      <Section tone="white">
        <div className="container max-w-3xl">
          <h2 className="mb-6 text-3xl font-black text-[#102337]">Questions fréquentes</h2>
          <FAQ items={service.faq} />
        </div>
      </Section>
      <CTABand title={`Demander un rappel ${service.shortName.toLowerCase()} dans le Var`} text="Transmettez les informations utiles en moins d'une minute, avec téléphone, consentement clair et sans engagement." />
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
            Stop Nuisible Var centralise les demandes de dératisation Var, désinsectisation Var, traitement punaises de lit, termites, guêpes, moustique tigre, chenilles et dépigeonnage. Le site sert de passerelle claire entre votre situation et un professionnel partenaire.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><ButtonLink /><PhoneLink /></div>
        </div>
      </Section>
      <TrustBar />
      <Section tone="white">
        <div className="container grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
        </div>
      </Section>
      <CTABand title="Votre demande est locale et contextualisée" text="Ville, nuisible, type de lieu, téléphone et urgence : ces informations permettent une orientation plus efficace." />
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
            Les demandes sont orientées selon votre commune et le nuisible concerné. Les premières pages locales couvrent Toulon, Hyères, Fréjus, Draguignan, Saint-Raphaël et La Seyne-sur-Mer, avec une base extensible pour le reste du département.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><ButtonLink /><PhoneLink /></div>
        </div>
      </Section>
      <Section tone="white">
        <div className="container">
          <h2 className="text-3xl font-black text-[#102337]">Villes prioritaires</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {priorityCities.map((city) => <CityCard key={city.slug} city={city} />)}
          </div>
          <h2 className="mt-12 text-3xl font-black text-[#102337]">Communes couvertes progressivement</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {extensionCities.map((city) => <span key={city} className="rounded-[7px] border border-[#102337]/10 bg-[#f5f1e8] px-3 py-2 text-sm font-semibold">{city}</span>)}
          </div>
        </div>
      </Section>
      <CTABand title="Votre commune n'est pas encore listée ?" text="Vous pouvez quand même envoyer une demande : elle sera qualifiée selon votre secteur du Var." />
    </main>
  );
}

function HowItWorksPage() {
  const crumbs = [
    { name: "Accueil", href: "/" },
    { name: "Comment ça marche", href: "/comment-ca-marche/" },
  ];
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Breadcrumb items={crumbs} />
      <Section>
        <div className="container">
          <Eyebrow>Mise en relation</Eyebrow>
          <h1 className="text-5xl font-black text-[#102337]">Comment ça marche ?</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#405160]">Le fonctionnement est volontairement simple : vous expliquez, la demande est qualifiée, puis elle est transmise à un professionnel partenaire adapté selon votre commune, le type de nuisible et le niveau d'urgence.</p>
          <div className="mt-10"><ProcessSteps /></div>
        </div>
      </Section>
      <CTABand title="Commencer par une demande claire" text="Aucun engagement : le partenaire dispose des informations utiles pour expliquer la solution ou le devis possible." />
    </main>
  );
}

function PartnersPage() {
  const crumbs = [
    { name: "Accueil", href: "/" },
    { name: "Partenaires", href: "/partenaires/" },
  ];
  const criteria = ["Zone d'intervention dans le Var", "Capacité de rappel", "Clarté du devis", "Expérience sur le nuisible concerné", "Assurance et conformité quand applicable"];
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Breadcrumb items={crumbs} />
      <Section>
        <div className="container grid gap-10 lg:grid-cols-[1fr_380px]">
          <div>
            <Eyebrow>Réseau local</Eyebrow>
            <h1 className="text-5xl font-black text-[#102337]">Professionnels partenaires et mise en relation</h1>
            <p className="mt-6 text-lg leading-8 text-[#405160]">
              Stop Nuisible Var sélectionne des professionnels et intermédiaires spécialisés selon leur zone d'intervention, leur capacité de rappel, leur expérience sur le nuisible concerné et la clarté de leurs devis.
            </p>
            <p className="mt-4 leading-8 text-[#405160]">
              Aucun partenaire nommé n'est affiché sans accord signé, et aucune fausse agence locale n'est inventée.
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
    "Les données collectées via le formulaire sont celles nécessaires au traitement de la demande : nom ou prénom, téléphone, email optionnel, commune, code postal, type de nuisible, type de lieu, urgence, créneau de rappel souhaité, message, photo facultative et page d'origine.",
    "La finalité est la qualification de la demande et la mise en relation avec un professionnel ou partenaire spécialisé dans le traitement des nuisibles dans le Var.",
    "Les destinataires sont l'administrateur du site et les partenaires de mise en relation strictement utiles au traitement de la demande. Le consentement RGPD est obligatoire avant toute transmission.",
    "Les données sont conservées pendant la durée nécessaire au suivi de la demande, puis supprimées ou archivées de manière limitée pour assurer la traçabilité du service.",
    "Vous pouvez demander l'accès, la rectification ou la suppression de vos informations en utilisant le formulaire de contact ou l'adresse email d'administration configurée pour le site.",
  ]} />;
}

function LegalPage() {
  return <TextPage slug="mentions-legales" paragraphs={[
    "Éditeur du site : Stop Nuisible Var, plateforme locale de demande de rappel et de mise en relation anti-nuisibles dans le Var. Contact : via le formulaire du site ou l'adresse email d'administration du projet.",
    "Responsable de publication : propriétaire du site Stop Nuisible Var. Hébergeur : Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis.",
    "Stop Nuisible Var est un site de demande de devis et de mise en relation locale. Il ne se présente pas comme une entreprise d'intervention directe et n'affiche aucune adresse physique fictive.",
    "Les contenus, textes, éléments graphiques et pictogrammes du site sont protégés par le droit de la propriété intellectuelle. Toute reproduction non autorisée est interdite.",
    "Les contenus ont une vocation informative et commerciale. Ils ne remplacent pas un diagnostic technique, sanitaire, réglementaire ou juridique.",
    "Les données envoyées par le formulaire peuvent être transmises à un professionnel partenaire spécialisé uniquement avec consentement explicite de l'utilisateur.",
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
