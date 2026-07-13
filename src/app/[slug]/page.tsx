import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/breadcrumb";
import { CityCard, RelatedLinks } from "@/components/cards";
import { FAQ } from "@/components/faq";
import { PestIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { LeadForm } from "@/components/lead-form";
import { CTABand, EmergencyPanel, ProcessSteps } from "@/components/page-blocks";
import { TrustList } from "@/components/TrustList";
import { ButtonLink, Eyebrow, PhoneLink, Section } from "@/components/ui";
import { cityProfiles, extensionCities, getCity, getLocalLanding, getService, globalPages, guides, localLandings, pestProfileByServiceSlug, priorityCities, services } from "@/data/site";
import { breadcrumbJsonLd, faqJsonLd, pestServiceJsonLd } from "@/lib/jsonld";
import { buildPageMetadata } from "@/lib/metadata";

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
    return buildPageMetadata({
      title: landing.title,
      description: landing.description,
      path: `/${landing.slug}/`,
    });
  }
  if (service) {
    return buildServiceMetadata(service);
  }
  const page = globalPages[slug as keyof typeof globalPages];
  if (page) {
    return buildPageMetadata({
      title: page.title,
      description: page.description,
      path: `/${slug}/`,
    });
  }
  return {};
}

function buildServiceMetadata(service: NonNullable<ReturnType<typeof getService>>) {
  const overrides: Record<string, { title: string; description: string }> = {
    "deratisation-var": {
      title: "Dératisation Var - Rats et souris, demande de rappel",
      description:
        "Des signes de rats ou souris dans le Var ? Décrivez la situation et demandez un rappel pour être orienté vers une solution adaptée.",
    },
    "punaises-de-lit-var": {
      title: "Punaises de lit Var - Traitement et demande de rappel",
      description:
        "Suspicion de punaises de lit dans le Var ? Identifiez les signes, décrivez votre logement et demandez un rappel gratuit.",
    },
    "cafards-blattes-var": {
      title: "Cafards et blattes Var - Traitement et demande de rappel",
      description:
        "Cafards ou blattes dans un logement, restaurant ou commerce du Var ? Décrivez les signes observés et demandez un rappel gratuit.",
    },
    "guepes-frelons-var": {
      title: "Guêpes et frelons Var - Nid et demande de rappel",
      description:
        "Nid de guêpes ou frelons dans le Var ? Décrivez l'emplacement, les accès et les passages exposés pour demander un rappel gratuit.",
    },
    "termites-var": {
      title: "Termites Var - Signes, bois et demande de rappel",
      description:
        "Bois fragilisé, galeries ou indices de termites dans le Var ? Décrivez les signes et demandez un rappel pour qualifier la situation.",
    },
    "moustique-tigre-var": {
      title: "Moustique tigre Var - Jardin, terrasse et demande de rappel",
      description:
        "Piqûres répétées ou moustiques tigres autour d'un jardin, balcon ou hébergement dans le Var ? Décrivez le contexte et demandez un rappel.",
    },
    "chenilles-processionnaires-var": {
      title: "Chenilles processionnaires Var - Pins, cocons et demande de rappel",
      description:
        "Cocons dans les pins ou chenilles processionnaires dans le Var ? Décrivez la zone exposée et demandez un rappel gratuit.",
    },
    "depigeonnage-var": {
      title: "Dépigeonnage Var - Pigeons, goélands et demande de rappel",
      description:
        "Fientes, nids ou salissures de pigeons et goélands dans le Var ? Décrivez le bâtiment concerné et demandez un rappel gratuit.",
    },
  };
  const seo = overrides[service.slug] ?? { title: service.title, description: service.description };

  return buildPageMetadata({
    title: seo.title,
    description: seo.description,
    path: `/${service.slug}/`,
  });
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
  const relatedLinks = landing.associatedLinks;
  const differentiationPoints = getDifferentiationPoints(landing, city.name, service.shortName);
  const crumbs = [
    { name: "Accueil", href: "/" },
    { name: service.shortName, href: `/${service.slug}/` },
    { name: city.name, href: `/villes/${city.slug}/` },
    { name: landing.h1, href: `/${landing.slug}/` },
  ];
  return (
    <main>
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          faqJsonLd(landing.faq),
          pestServiceJsonLd({
            name: landing.h1,
            serviceType: getServiceType(service.slug),
            description: landing.description,
            url: `/${landing.slug}/`,
          }),
        ]}
      />
      <Breadcrumb items={crumbs} />
      <Section className="py-10 sm:py-20">
        <div className="container grid items-start gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <Eyebrow>{city.name} - {service.shortName}</Eyebrow>
            <h1 className="text-3xl font-black leading-tight text-[#102337] sm:text-5xl">{landing.h1}</h1>
            <p className="mt-4 text-base leading-7 text-[#405160] sm:mt-5 sm:text-lg sm:leading-8">{landing.promise}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <PhoneLink />
              <ButtonLink>Demander un rappel gratuit</ButtonLink>
            </div>
          </div>
          <div className="space-y-4">
            <LeadForm defaultCity={landing.formDefaults?.city ?? city.name} defaultPest={landing.formDefaults?.pest ?? service.leadFormPest} />
            <LocalLandingTrustBox />
          </div>
        </div>
      </Section>
      <TrustList />
      <Section tone="white" className="py-10 sm:py-20">
        <div className="container grid gap-8 lg:grid-cols-[1fr_360px]">
          <article className="space-y-5 text-base leading-7 text-[#405160] sm:leading-8">
            {landing.heroImage ? (
              <Image
                src={landing.heroImage.src}
                alt={landing.heroImage.alt}
                width={960}
                height={520}
                loading="lazy"
                unoptimized
                className="aspect-[16/10] w-full rounded-[8px] border border-[#102337]/10 bg-[#f5f1e8] object-cover shadow-sm sm:aspect-auto"
              />
            ) : null}
            <h2 className="text-2xl font-black text-[#102337] sm:text-3xl">Contexte local à {city.name}</h2>
            <p>{landing.localContext}</p>
            <p>
              Stop Nuisible Var reste une plateforme de mise en relation : la demande est qualifiée selon la commune, le nuisible, le type de lieu et l&apos;urgence, puis elle peut être transmise à un professionnel partenaire avec votre consentement.
            </p>
            {landing.localAreas?.length ? (
              <div className="rounded-[8px] border border-[#102337]/10 bg-white p-5">
                <h2 className="text-2xl font-black text-[#102337] sm:text-3xl">{service.shortName} à {city.name} : secteurs concernés</h2>
                <p className="mt-4">
                  Les demandes peuvent venir de plusieurs secteurs de {city.name}, notamment {formatAreas(landing.localAreas)}. Le contexte n&apos;est pas le même selon qu&apos;il s&apos;agit d&apos;une maison, d&apos;un appartement, d&apos;une location, d&apos;un commerce, d&apos;un garage, d&apos;un jardin ou de parties communes.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {landing.localAreas.map((area) => (
                    <li key={area} className="rounded-full bg-[#f5f1e8] px-3 py-1 text-sm font-bold text-[#102337]">
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {differentiationPoints.length ? (
              <div className="rounded-[8px] border border-[#102337]/10 bg-[#f5f1e8] p-5">
                <h2 className="text-2xl font-black text-[#102337] sm:text-3xl">Ce qui change à {city.name} pour {service.shortName.toLowerCase()}</h2>
                <ul className="mt-4 space-y-3">
                  {differentiationPoints.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span aria-hidden="true" className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#bf593f]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <h2 className="text-2xl font-black text-[#102337] sm:text-3xl">Avant de demander un rappel</h2>
            <p>
              Les communes proches comme {city.neighbours.join(", ")} peuvent aussi être précisées si le problème se situe autour de {city.name} ou dans le même bassin de rappel.
            </p>
          </article>
          <RelatedLinks
            links={relatedLinks}
          />
        </div>
      </Section>
      <Section className="py-10 sm:py-20">
        <div className="container grid gap-8 lg:grid-cols-3">
          <ContentList title="Signes observés" items={landing.observedSigns} />
          <ContentList title="Lieux concernés" items={landing.concernedPlaces} />
          <ContentList title="Conseils avant rappel" items={landing.callbackAdvice} />
        </div>
      </Section>
      <Section className="py-10 sm:py-20">
        <div className="container max-w-3xl">
          <h2 className="mb-6 text-3xl font-black text-[#102337]">Questions fréquentes</h2>
          <FAQ items={landing.faq} />
        </div>
      </Section>
      <CTABand title={`Besoin d'un rappel à ${city.name} ?`} text="Le formulaire court permet de qualifier la demande rapidement avec un téléphone et un consentement clair." />
    </main>
  );
}

function LocalLandingTrustBox() {
  const items = [
    "Demande gratuite et sans engagement",
    "Photo facultative",
    "Transmission uniquement avec consentement",
    "Rappel selon commune, nuisible et disponibilités",
    "Stop Nuisible Var reste une plateforme de mise en relation",
  ];

  return (
    <div className="rounded-[8px] border border-[#102337]/10 bg-[#f5f1e8] p-4 text-sm font-semibold leading-6 text-[#102337]">
      <ul className="grid gap-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#bf593f]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function formatAreas(areas: string[]) {
  if (areas.length <= 1) return areas.join("");
  return `${areas.slice(0, -1).join(", ")} et ${areas[areas.length - 1]}`;
}

function getDifferentiationPoints(
  landing: NonNullable<ReturnType<typeof getLocalLanding>>,
  cityName: string,
  serviceName: string,
) {
  if (landing.differentiationPoints?.length) return landing.differentiationPoints.slice(0, 5);

  const cityProfile = cityProfiles[landing.citySlug];
  const pestProfile = pestProfileByServiceSlug[landing.serviceSlug];
  if (!cityProfile || !pestProfile) return [];

  const areas = landing.localAreas?.slice(0, 3).join(", ");
  return [
    cityProfile.localIntroAngle,
    areas
      ? `Les secteurs comme ${areas} ne posent pas les mêmes contraintes d'accès, d'occupation et de rappel.`
      : `Le type de lieu à ${cityName} doit être précisé avant transmission.`,
    `Pour ${serviceName.toLowerCase()}, les signes à décrire en priorité sont : ${pestProfile.typicalSigns.slice(0, 3).join(", ")}.`,
    `Les lieux sensibles à signaler sont notamment ${pestProfile.sensitivePlaces.slice(0, 3).join(", ")}, surtout si ${cityProfile.decisionMakers.slice(0, 2).join(" ou ")} doivent être coordonnés.`,
    pestProfile.photoAdvice,
  ];
}

function ServicePage({ slug }: { slug: string }) {
  const service = getService(slug);
  if (!service) notFound();
  const serviceLandings = localLandings.filter((landing) => landing.serviceSlug === service.slug);
  const crumbs = [
    { name: "Accueil", href: "/" },
    { name: "Traitement nuisibles Var", href: "/traitement-nuisibles-var/" },
    { name: service.shortName, href: `/${service.slug}/` },
  ];
  return (
    <main>
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          faqJsonLd(service.faq),
          pestServiceJsonLd({
            name: service.title,
            serviceType: getServiceType(service.slug),
            description: service.description,
            url: `/${service.slug}/`,
          }),
        ]}
      />
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
      <TrustList />
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
            {service.servicePageCopy ? (
              <>
                <h2 className="text-3xl font-black text-[#102337]">{service.servicePageCopy.title}</h2>
                {service.servicePageCopy.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {service.slug === "deratisation-var" ? (
                  <p>
                    Pour comparer la taille, la forme et l&apos;emplacement des déjections, consultez le guide pour{" "}
                    <Link className="focus-ring font-bold text-[#a6422b] underline decoration-2 underline-offset-4 hover:text-[#7f2f1e]" href="/guides/crottes-rat-ou-souris/">
                      reconnaître des crottes de rat ou de souris
                    </Link>.
                  </p>
                ) : null}
              </>
            ) : (
              <>
                <h2 className="text-3xl font-black text-[#102337]">Une demande locale, claire et transmissible</h2>
                <p>
                  Pour un <Link className="font-bold text-[#102337] underline decoration-[#bf593f]/35 underline-offset-4 hover:text-[#bf593f]" href="/traitement-nuisibles-var/">traitement nuisibles dans le Var</Link>, la bonne orientation dépend rarement d&apos;un seul mot-clé. Il faut comprendre la commune, le type de lieu, les signes observés, les contraintes d&apos;accès et le niveau d&apos;urgence. C&apos;est pourquoi Stop Nuisible Var structure la demande avant transmission.
                </p>
                <p>
                  Le service convient aux particuliers, propriétaires, locataires, syndics, commerces, restaurants, hôtels, campings, conciergeries et collectivités. Les demandes peuvent venir de secteurs urbains comme{" "}
                  <Link className="font-bold text-[#102337] underline decoration-[#bf593f]/35 underline-offset-4 hover:text-[#bf593f]" href="/villes/toulon/">Toulon</Link>, de villes littorales comme{" "}
                  <Link className="font-bold text-[#102337] underline decoration-[#bf593f]/35 underline-offset-4 hover:text-[#bf593f]" href="/villes/frejus/">Fréjus</Link> ou d&apos;autres communes listées dans les{" "}
                  <Link className="font-bold text-[#102337] underline decoration-[#bf593f]/35 underline-offset-4 hover:text-[#bf593f]" href="/zones-intervention/">zones d&apos;intervention</Link>. Votre demande est transmise à un professionnel partenaire adapté selon votre commune, le type de nuisible et le niveau d&apos;urgence.
                </p>
                <p>
                  Les informations envoyées permettent d&apos;éviter les échanges inutiles : type de nuisible, commune, bâtiment, disponibilités et message libre. Les pages dédiées aux{" "}
                  <ServiceInlineLink currentSlug={service.slug} href="/punaises-de-lit-var/">punaises de lit</ServiceInlineLink>, aux{" "}
                  <ServiceInlineLink currentSlug={service.slug} href="/cafards-blattes-var/">cafards et blattes</ServiceInlineLink>, aux{" "}
                  <ServiceInlineLink currentSlug={service.slug} href="/termites-var/">termites</ServiceInlineLink> ou au{" "}
                  <ServiceInlineLink currentSlug={service.slug} href="/moustique-tigre-var/">moustique tigre</ServiceInlineLink> aident à préparer une demande plus précise sans donner de consignes dangereuses.
                </p>
              </>
            )}
          </article>
          <RelatedLinks
            links={[
              { label: "identifier les signes d'un nuisible dans le Var", href: "/guides/identifier-un-nuisible-var/" },
              ...serviceLandings.map((landing) => ({ label: landing.h1, href: `/${landing.slug}/` })),
              ...priorityCities.slice(0, 3).map((city) => ({ label: `Nuisibles à ${city.name}`, href: `/villes/${city.slug}/` })),
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

function getServiceType(serviceSlug: string) {
  const serviceTypes: Record<string, string> = {
    "deratisation-var": "Dératisation rats et souris",
    "punaises-de-lit-var": "Traitement punaises de lit",
    "cafards-blattes-var": "Traitement cafards et blattes",
    "guepes-frelons-var": "Traitement guêpes et frelons",
    "termites-var": "Traitement termites et insectes xylophages",
    "moustique-tigre-var": "Traitement moustique tigre",
    "chenilles-processionnaires-var": "Traitement chenilles processionnaires",
    "depigeonnage-var": "Dépigeonnage",
  };

  return serviceTypes[serviceSlug] ?? "Traitement nuisibles";
}

function ServiceInlineLink({
  currentSlug,
  href,
  children,
}: {
  currentSlug: string;
  href: string;
  children: ReactNode;
}) {
  if (href === `/${currentSlug}/`) return <span>{children}</span>;

  return (
    <Link className="font-bold text-[#102337] underline decoration-[#bf593f]/35 underline-offset-4 hover:text-[#bf593f]" href={href}>
      {children}
    </Link>
  );
}

function HubPage() {
  const crumbs = [
    { name: "Accueil", href: "/" },
    { name: "Traitement nuisibles Var", href: "/traitement-nuisibles-var/" },
  ];
  const pestEntries = [
    {
      title: "Rats ou souris",
      icon: "rodent",
      marker: "Crottes, bruits nocturnes, emballages rongés ou passages le long des murs.",
      text: "Des bruits dans une cloison, des déjections ou des aliments endommagés peuvent évoquer la présence d'un rongeur. La taille des traces et les autres indices observés aident à orienter la situation.",
      linkLabel: "Voir les solutions de dératisation dans le Var",
      href: "/deratisation-var/",
      secondaryLink: { label: "Crottes de rat ou de souris : les reconnaître", href: "/guides/crottes-rat-ou-souris/" },
    },
    {
      title: "Punaises de lit",
      icon: "bedbug",
      marker: "Piqûres au réveil, petites taches sombres ou insectes près du lit.",
      text: "Les signes sont souvent recherchés autour du matelas, du sommier et des zones proches du couchage. Une piqûre seule ne suffit toutefois pas à confirmer la présence de punaises de lit.",
      linkLabel: "Voir les informations sur les punaises de lit",
      href: "/punaises-de-lit-var/",
    },
    {
      title: "Cafards ou blattes",
      icon: "roach",
      marker: "Insectes rapides dans la cuisine, activité nocturne ou présence près des zones humides.",
      text: "Les cafards sont souvent remarqués près des sources de nourriture, de chaleur ou d'humidité. Une activité visible en journée peut aussi justifier une attention particulière.",
      linkLabel: "Voir les solutions contre les cafards et blattes",
      href: "/cafards-blattes-var/",
    },
    {
      title: "Guêpes ou frelons",
      icon: "wasp",
      marker: "Allées et venues régulières, activité de vol concentrée ou nid visible.",
      text: "Des insectes qui empruntent régulièrement la même trajectoire peuvent signaler un nid ou un point d'accès à proximité. Évitez d'approcher ou de manipuler un nid suspect.",
      linkLabel: "Voir les informations sur les guêpes et frelons",
      href: "/guepes-frelons-var/",
    },
    {
      title: "Termites",
      icon: "termite",
      marker: "Bois fragilisé, galeries, éléments qui sonnent creux ou indices inhabituels dans le bâti.",
      text: "Les termites peuvent rester discrets. Des dégradations du bois ou certains indices dans le bâtiment nécessitent une identification adaptée avant de conclure à leur présence.",
      linkLabel: "Voir les informations sur les termites",
      href: "/termites-var/",
    },
    {
      title: "Moustique tigre",
      icon: "mosquito",
      marker: "Petit moustique sombre, activité en journée et piqûres répétées autour du logement.",
      text: "Le moustique tigre est notamment associé aux petits volumes d'eau stagnante autour des habitations. La réduction des gîtes larvaires fait partie des premiers points à vérifier.",
      linkLabel: "Voir les informations sur le moustique tigre",
      href: "/moustique-tigre-var/",
    },
    {
      title: "Chenilles processionnaires",
      icon: "caterpillar",
      marker: "Nids soyeux dans les pins ou chenilles se déplaçant en procession.",
      text: "Les chenilles processionnaires et leurs poils urticants demandent de la prudence, notamment en présence d'enfants ou d'animaux. Évitez toute manipulation directe.",
      linkLabel: "Voir les informations sur les chenilles processionnaires",
      href: "/chenilles-processionnaires-var/",
    },
    {
      title: "Pigeons ou goélands",
      icon: "bird",
      marker: "Fientes répétées, occupation d'un toit, balcon, rebord ou zone technique.",
      text: "Une présence régulière d'oiseaux peut entraîner une accumulation de fientes et des nuisances sur certaines parties du bâtiment. Le contexte du site détermine les solutions à envisager.",
      linkLabel: "Voir les solutions de dépigeonnage dans le Var",
      href: "/depigeonnage-var/",
    },
  ];
  const observations = [
    {
      title: "Des bruits dans les murs, le plafond ou les combles",
      text: "Notez le moment où les bruits se produisent, leur fréquence et la zone concernée. Ces informations peuvent aider à distinguer une circulation ponctuelle d'une activité répétée.",
    },
    {
      title: "Des crottes ou de petites déjections",
      text: "Regardez leur taille apparente, leur forme et l'endroit où elles ont été trouvées. Ne les manipulez pas à mains nues et évitez de les balayer ou de les aspirer à sec.",
      link: { label: "Comparer les crottes de rat et de souris", href: "/guides/crottes-rat-ou-souris/" },
    },
    {
      title: "Des piqûres ou des marques au réveil",
      text: "L'emplacement des marques et leur répétition peuvent orienter les recherches, mais l'aspect d'une piqûre ne suffit généralement pas à identifier seul un nuisible.",
    },
    {
      title: "Un insecte aperçu",
      text: "Si cela peut être fait sans risque, une photo nette et le lieu d'observation sont souvent plus utiles qu'une description approximative de couleur ou de taille.",
    },
    {
      title: "Un nid ou une activité de vol",
      text: "Observez à distance les trajectoires et le point où les insectes semblent entrer ou sortir. N'essayez pas d'ouvrir, de déplacer ou de traiter un nid suspect pour simplement l'identifier.",
    },
    {
      title: "Du bois fragilisé ou dégradé",
      text: "Repérez les éléments concernés et l'étendue apparente des dégâts. Plusieurs causes peuvent détériorer le bois : une identification correcte reste nécessaire avant de conclure.",
    },
  ];
  const places = [
    ["Dans un logement", "Précisez la pièce concernée, la proximité des aliments ou du couchage et si les signes apparaissent toujours au même endroit."],
    ["Dans une copropriété", "Caves, gaines, locaux poubelles et parties communes peuvent créer des situations différentes d'un problème limité à un seul appartement. Indiquez si plusieurs zones semblent concernées."],
    ["Dans un commerce ou un local professionnel", "Décrivez l'activité du lieu, les zones touchées et les contraintes d'accès ou d'horaires. Ces informations permettent de transmettre une demande plus claire."],
    ["Dans un jardin ou autour d'une maison", "Précisez si les signes se trouvent près de végétaux, d'eau stagnante, de déchets, d'une toiture ou d'une dépendance."],
    ["Dans un hébergement ou une location", "Indiquez les zones concernées et les signes réellement observés. En cas de suspicion de punaises de lit, évitez de déplacer inutilement des affaires d'une pièce à une autre avant d'avoir clarifié la situation."],
  ];
  const faq = [
    { question: "Je ne sais pas quel nuisible est présent. Puis-je quand même faire une demande ?", answer: "Oui. Décrivez les signes observés, leur emplacement et le type de lieu concerné. Il est préférable d'indiquer ce que vous avez réellement constaté plutôt que de choisir un nuisible au hasard." },
    { question: "Une photo permet-elle d'identifier le nuisible ?", answer: "Une photo nette peut aider à orienter la compréhension de la situation, mais elle ne garantit pas toujours une identification certaine. Le contexte et les autres signes observés restent importants." },
    { question: "Stop Nuisible Var réalise-t-il les traitements ?", answer: "Non. Stop Nuisible Var est une plateforme locale de demande de rappel et de mise en relation. La plateforme recueille les informations utiles et peut transmettre la demande à un professionnel partenaire avec le consentement de l'utilisateur." },
    { question: "Quels nuisibles sont couverts par le site ?", answer: "Le site oriente notamment les demandes concernant les rats et souris, punaises de lit, cafards et blattes, guêpes et frelons, termites, moustiques tigres, chenilles processionnaires ainsi que certaines problématiques liées aux pigeons et goélands." },
    { question: "La demande est-elle payante ?", answer: "La demande effectuée sur Stop Nuisible Var est gratuite et sans engagement. Les conditions d'une éventuelle intervention relèvent ensuite du professionnel partenaire concerné." },
  ];

  return (
    <main className="overflow-x-hidden">
      <JsonLd data={[breadcrumbJsonLd(crumbs), faqJsonLd(faq)]} />
      <Breadcrumb items={crumbs} />
      <Section className="py-12 sm:py-20">
        <div className="container max-w-[1160px]">
          <Eyebrow>TRAITEMENT DES NUISIBLES DANS LE VAR</Eyebrow>
          <h1 className="max-w-4xl text-4xl font-black leading-tight text-[#102337] sm:text-5xl">Quel nuisible avez-vous repéré dans le Var ?</h1>
          <div className="mt-6 max-w-3xl space-y-4 text-lg leading-8 text-[#405160]">
            <p>Rat dans un garage, cafards dans une cuisine, piqûres au réveil ou activité de guêpes autour d&apos;un toit : le bon point de départ dépend d&apos;abord des signes que vous avez observés.</p>
            <p>Choisissez le nuisible que vous soupçonnez pour consulter les informations adaptées. Si vous ne savez pas encore ce qui est présent, utilisez plutôt notre guide d&apos;identification.</p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#nuisibles">Je connais le nuisible</ButtonLink>
            <ButtonLink href="/guides/identifier-un-nuisible-var/" variant="secondary">Je ne sais pas ce que c&apos;est</ButtonLink>
          </div>
          <p className="mt-5 max-w-3xl border-l-4 border-[#F2C94C] pl-4 text-sm font-semibold leading-6 text-[#405160]">Stop Nuisible Var est une plateforme locale de demande de rappel et de mise en relation. Le site n&apos;effectue pas directement les interventions.</p>
        </div>
      </Section>
      <Section tone="white" className="py-12 sm:py-20">
        <div id="nuisibles" className="container max-w-[1160px] scroll-mt-24">
          <Eyebrow>Choisir un service</Eyebrow>
          <h2 className="max-w-3xl text-3xl font-black text-[#102337] sm:text-4xl">Je connais ou je soupçonne le nuisible</h2>
          <p className="mt-4 max-w-3xl leading-8 text-[#405160]">Les signes visibles donnent souvent une première orientation. Comparez votre situation avec les repères ci-dessous, puis consultez la page correspondant au problème suspecté.</p>
          <div className="mt-10 divide-y divide-[#102337]/15 border-y border-[#102337]/15 lg:grid lg:grid-cols-2 lg:divide-y-0">
            {pestEntries.map((entry, index) => (
              <article key={entry.href} className={`py-7 lg:px-8 ${index % 2 === 0 ? "lg:pl-0" : "lg:border-l lg:border-[#102337]/15 lg:pr-0"} ${index > 1 ? "lg:border-t lg:border-[#102337]/15" : ""}`}>
                <div className="flex gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[8px] bg-[#f5f1e8] text-[#24493d]"><PestIcon name={entry.icon} className="h-8 w-8" /></span>
                  <div>
                    <h3 className="text-xl font-black text-[#102337]">{entry.title}</h3>
                    <p className="mt-2 font-bold leading-7 text-[#24493d]">{entry.marker}</p>
                  </div>
                </div>
                <p className="mt-4 leading-7 text-[#405160]">{entry.text}</p>
                <div className="mt-5 flex flex-col items-start gap-2">
                  <Link href={entry.href} className="focus-ring rounded-[4px] font-black text-[#a6422b] underline decoration-2 underline-offset-4 hover:text-[#7f2f1e]">{entry.linkLabel} →</Link>
                  {entry.secondaryLink ? <Link href={entry.secondaryLink.href} className="focus-ring rounded-[4px] text-sm font-bold text-[#24493d] underline underline-offset-4 hover:text-[#bf593f]">{entry.secondaryLink.label}</Link> : null}
                </div>
              </article>
            ))}
          </div>
          <aside className="mt-10 border-l-4 border-[#E86A33] bg-[#f5f1e8] p-6 sm:p-8">
            <h3 className="text-2xl font-black text-[#102337]">Vous hésitez entre plusieurs nuisibles ?</h3>
            <p className="mt-3 max-w-3xl leading-7 text-[#405160]">Ne choisissez pas une catégorie au hasard uniquement à partir d&apos;un seul signe. Une piqûre, un bruit ou une trace sombre peut avoir plusieurs origines.</p>
            <div className="mt-5"><ButtonLink href="/guides/identifier-un-nuisible-var/" variant="dark">Identifier un nuisible à partir des signes observés</ButtonLink></div>
          </aside>
        </div>
      </Section>
      <Section className="py-12 sm:py-20">
        <div className="container max-w-[1160px] grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <Eyebrow>Partir d&apos;un signe</Eyebrow>
            <h2 className="text-3xl font-black text-[#102337] sm:text-4xl">Partez de ce que vous avez observé</h2>
            <p className="mt-4 leading-8 text-[#405160]">Vous n&apos;avez pas vu directement le nuisible ? C&apos;est fréquent. Commencez par décrire le signe le plus concret plutôt que d&apos;essayer de poser vous-même un diagnostic.</p>
          </div>
          <div className="divide-y divide-[#102337]/15 border-t border-[#102337]/15">
            {observations.map((observation, index) => (
              <article key={observation.title} className="grid gap-3 py-5 sm:grid-cols-[2.5rem_1fr]">
                <span className="font-black text-[#bf593f]">0{index + 1}</span>
                <div><h3 className="text-lg font-black text-[#102337]">{observation.title}</h3><p className="mt-2 leading-7 text-[#405160]">{observation.text}</p>{observation.link ? <Link href={observation.link.href} className="focus-ring mt-3 inline-flex rounded-[4px] font-bold text-[#a6422b] underline underline-offset-4">{observation.link.label}</Link> : null}</div>
              </article>
            ))}
          </div>
          <div className="lg:col-start-2">
            <p className="leading-7 text-[#405160]">Le guide d&apos;identification regroupe les principaux signes rencontrés dans le Var et permet de poursuivre la recherche sans choisir immédiatement un traitement.</p>
            <div className="mt-5"><ButtonLink href="/guides/identifier-un-nuisible-var/" variant="dark">Utiliser le guide d&apos;identification</ButtonLink></div>
          </div>
        </div>
      </Section>
      <Section tone="white" className="py-12 sm:py-20">
        <div className="container max-w-[1160px]">
          <Eyebrow>Préciser le contexte</Eyebrow>
          <h2 className="text-3xl font-black text-[#102337] sm:text-4xl">Où avez-vous remarqué le problème ?</h2>
          <p className="mt-4 max-w-3xl leading-8 text-[#405160]">Le même signe n&apos;a pas toujours la même signification selon l&apos;endroit où il apparaît. Le type de lieu aide aussi à mieux décrire la demande.</p>
          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {places.map(([title, text], index) => <article key={title} className={index === 4 ? "md:col-span-2 lg:col-span-2" : ""}><h3 className="border-t-2 border-[#24493d] pt-4 text-xl font-black text-[#102337]">{title}</h3><p className="mt-3 leading-7 text-[#405160]">{text}</p></article>)}
          </div>
          <Link href="/zones-intervention/" className="focus-ring mt-9 inline-flex rounded-[4px] font-bold text-[#24493d] underline decoration-2 underline-offset-4 hover:text-[#bf593f]">Voir les zones couvertes dans le Var →</Link>
        </div>
      </Section>
      <Section tone="dark" className="py-12 sm:py-20">
        <div className="container max-w-[1160px] grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.14em] text-[#F2C94C]">Demande gratuite et sans engagement</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black sm:text-4xl">Décrivez le problème avant de choisir une solution</h2>
            <div className="mt-5 max-w-3xl space-y-4 leading-7 text-white/80">
              <p>Il n&apos;est pas nécessaire de connaître avec certitude le nom du nuisible pour effectuer une demande.</p>
              <p>La commune, le type de lieu, les signes observés et leur emplacement permettent déjà de mieux comprendre la situation. Une photo peut également être ajoutée lorsqu&apos;elle apporte un élément utile.</p>
              <p>Stop Nuisible Var recueille ces informations afin de qualifier la demande et, avec votre consentement, de la transmettre à un professionnel partenaire susceptible de correspondre au besoin.</p>
              <p>La plateforme n&apos;effectue pas directement les interventions et ne garantit pas un diagnostic à partir d&apos;une simple photo.</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:min-w-72"><ButtonLink href="/demande-devis/">Décrire mon problème</ButtonLink><ButtonLink href="/comment-ca-marche/" variant="secondary">Comment fonctionne la mise en relation ?</ButtonLink></div>
          <p className="text-sm text-white/70 lg:col-span-2">Demande gratuite et sans engagement. Les informations sont transmises à un professionnel partenaire uniquement avec votre consentement.</p>
        </div>
      </Section>
      <Section className="py-12 sm:py-20">
        <div className="container max-w-3xl">
          <h2 className="mb-6 text-3xl font-black text-[#102337] sm:text-4xl">Questions fréquentes sur le choix d&apos;un traitement nuisible</h2>
          <FAQ items={faq} />
        </div>
      </Section>
    </main>
  );
}

const varSectors = [
  {
    name: "Aire toulonnaise",
    cities: ["Toulon", "La Seyne-sur-Mer", "La Garde", "La Valette-du-Var", "Ollioules"],
    context: "Habitat collectif, commerces, locaux poubelles, caves, restaurants et appartements.",
  },
  {
    name: "Littoral hyérois",
    cities: ["Hyères", "Carqueiranne", "La Londe-les-Maures", "Le Pradet", "Bormes-les-Mimosas"],
    context: "Maisons avec jardin, résidences, locations saisonnières, moustiques, guêpes et punaises de lit.",
  },
  {
    name: "Est Var",
    cities: ["Fréjus", "Saint-Raphaël", "Puget-sur-Argens", "Roquebrune-sur-Argens", "Le Muy"],
    context: "Hébergements touristiques, campings, résidences secondaires, commerces et délais courts.",
  },
  {
    name: "Centre Var / Dracénie",
    cities: ["Draguignan", "Trans-en-Provence", "Lorgues", "Vidauban", "Flayosc"],
    context: "Maisons, caves, combles, garages, dépendances, rongeurs, termites et guêpes.",
  },
  {
    name: "Provence Verte",
    cities: ["Brignoles", "Garéoult", "Saint-Maximin-la-Sainte-Baume", "Le Luc", "Flassans-sur-Issole"],
    context: "Maisons, jardins, dépendances, pins, chenilles processionnaires, rongeurs et guêpes.",
  },
  {
    name: "Golfe de Saint-Tropez",
    cities: ["Saint-Tropez", "Sainte-Maxime", "Cogolin", "Ramatuelle", "Gassin"],
    context: "Locations saisonnières, hôtels, restaurants, villas et besoin de discrétion.",
  },
  {
    name: "Ouest Var",
    cities: ["Six-Fours-les-Plages", "Sanary-sur-Mer", "Bandol", "Saint-Cyr-sur-Mer", "Le Beausset"],
    context: "Littoral, résidences, maisons avec extérieur, locations et terrasses.",
  },
];

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
          <h1 className="text-5xl font-black text-[#102337]">Zones d&apos;intervention nuisibles dans le Var</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#405160]">
            Les demandes sont traitées en priorité sur les principales communes du Var. Même si votre commune n’est pas encore listée, vous pouvez envoyer une demande : elle sera qualifiée selon votre secteur, le nuisible et l’urgence.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><ButtonLink /><PhoneLink /></div>
        </div>
      </Section>
      <TrustList />
      <Section tone="white">
        <div className="container">
          <h2 className="text-3xl font-black text-[#102337]">Les grands secteurs couverts dans le Var</h2>
          <p className="mt-4 max-w-3xl leading-8 text-[#405160]">
            La demande reste possible selon le secteur : ces informations aident à qualifier la commune, le nuisible
            concerné et les disponibilités de rappel.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {varSectors.map((sector) => (
              <article key={sector.name} className="rounded-[8px] border border-[#102337]/10 bg-[#f5f1e8] p-5">
                <h3 className="text-xl font-black text-[#102337]">{sector.name}</h3>
                <p className="mt-3 text-sm font-bold leading-6 text-[#24493d]">{sector.cities.join(", ")}</p>
                <p className="mt-4 text-sm leading-6 text-[#405160]">{sector.context}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 max-w-3xl rounded-[8px] border border-[#102337]/10 bg-white p-5">
            <p className="leading-8 text-[#405160]">
              Vous ne voyez pas votre commune ? Décrivez quand même votre demande : le secteur exact, le nuisible, le
              type de lieu et l’urgence permettent de vérifier si un rappel est possible.
            </p>
            <div className="mt-5">
              <ButtonLink href="/demande-devis/">Décrire ma demande</ButtonLink>
            </div>
          </div>
          <h2 className="mt-12 text-3xl font-black text-[#102337]">Villes prioritaires</h2>
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
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#405160]">Le fonctionnement est volontairement simple : vous expliquez, la demande est qualifiée, puis elle est transmise à un professionnel partenaire adapté selon votre commune, le type de nuisible et le niveau d&apos;urgence.</p>
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
              Stop Nuisible Var sélectionne des professionnels et intermédiaires spécialisés selon leur zone d&apos;intervention, leur capacité de rappel, leur expérience sur le nuisible concerné et la clarté de leurs devis.
            </p>
            <p className="mt-4 leading-8 text-[#405160]">
              Le réseau de partenaires est construit progressivement, avec une priorité donnée aux zones couvertes, à la capacité de rappel et à la clarté des devis.
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
    "Vous pouvez demander l'accès, la rectification ou la suppression de vos informations en utilisant le formulaire du site ou l'adresse contact@stop-nuisible-var.com.",
  ]} />;
}

function LegalPage() {
  return <TextPage slug="mentions-legales" paragraphs={[
    "Éditeur du site : Stop Nuisible Var, plateforme locale de demande de rappel et de mise en relation anti-nuisibles dans le Var. Contact : via le formulaire du site ou l'adresse contact@stop-nuisible-var.com.",
    "Responsable de publication : propriétaire du site Stop Nuisible Var. Hébergeur : Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis.",
    "Stop Nuisible Var est un site de demande de devis et de mise en relation locale. Les demandes peuvent être transmises à un professionnel partenaire avec l'accord de l'utilisateur.",
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
