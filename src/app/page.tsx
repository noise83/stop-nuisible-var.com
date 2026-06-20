import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FAQ } from "@/components/faq";
import { PestIcon } from "@/components/icons";
import { PhoneLink } from "@/components/ui";
import { priorityCities, services, type FAQItem } from "@/data/site";

export const metadata: Metadata = {
  title: "Nuisibles Var : demande de rappel et identification",
  description:
    "Rats, souris, cafards, punaises de lit, guêpes, frelons ou doute sur le nuisible dans le Var : décrivez le problème et demandez un rappel gratuit.",
  alternates: { canonical: "/" },
};

const pestChoices = [
  { label: "Punaises de lit", href: "/punaises-de-lit-var/", icon: "bedbug", hint: "Piqûres, literie, bagages" },
  { label: "Rats ou souris", href: "/deratisation-var/", icon: "rodent", hint: "Bruits, crottes, rongements" },
  { label: "Cafards / blattes", href: "/cafards-blattes-var/", icon: "roach", hint: "Cuisine, gaines, parties communes" },
  { label: "Guêpes ou frelons", href: "/guepes-frelons-var/", icon: "wasp", hint: "Nid, terrasse, jardin, hauteur" },
  { label: "Termites", href: "/termites-var/", icon: "termite", hint: "Bois, charpente, traces" },
  { label: "Moustique tigre", href: "/moustique-tigre-var/", icon: "mosquito", hint: "Jardin, terrasse, eau stagnante" },
  { label: "Chenilles processionnaires", href: "/chenilles-processionnaires-var/", icon: "caterpillar", hint: "Pins, cocons, zone fréquentée" },
  { label: "Pigeons / goélands", href: "/depigeonnage-var/", icon: "bird", hint: "Fientes, balcon, toiture" },
  { label: "Je ne sais pas", href: "/guides/identifier-un-nuisible-var/", icon: "bedbug", hint: "Comparer les signes observés" },
];

const trustItems = [
  "Demande gratuite et sans engagement",
  "Photo facultative",
  "Plateforme locale dédiée au Var",
  "Transmission uniquement avec consentement",
  "Pas de fausse agence locale affichée",
  "Rappel selon commune, nuisible et disponibilité",
];

const audienceCards = [
  {
    title: "Particuliers",
    text: "Précisez la commune, les pièces touchées, les signes visibles et depuis quand le problème revient.",
  },
  {
    title: "Professionnels",
    text: "Indiquez le type d'activité, les zones concernées, les horaires possibles et les contraintes d'ouverture.",
  },
  {
    title: "Locations saisonnières",
    text: "Ajoutez les dates d'arrivée ou de départ, le nombre de couchages et les contraintes d'accès au logement.",
  },
  {
    title: "Copropriétés",
    text: "Signalez les parties communes, gaines, caves, locaux poubelles et si un syndic ou gestionnaire est informé.",
  },
];

const requestedCities = [
  "Toulon",
  "Hyères",
  "La Seyne-sur-Mer",
  "Fréjus",
  "Saint-Raphaël",
  "Draguignan",
  "Brignoles",
  "Saint-Tropez",
  "Sainte-Maxime",
  "Sanary-sur-Mer",
  "Six-Fours-les-Plages",
  "La Garde",
  "La Valette-du-Var",
  "Le Pradet",
];

const recentLocalPages = [
  { label: "Punaises de lit à La Seyne-sur-Mer", href: "/punaises-de-lit-la-seyne-sur-mer/" },
  { label: "Dératisation à Hyères", href: "/deratisation-hyeres/" },
  { label: "Cafards à Fréjus", href: "/cafards-frejus/" },
  { label: "Dératisation à Saint-Raphaël", href: "/deratisation-saint-raphael/" },
  { label: "Cafards à Saint-Raphaël", href: "/cafards-saint-raphael/" },
  { label: "Guêpes et frelons à Fréjus", href: "/guepes-frelons-frejus/" },
  { label: "Dératisation à Brignoles", href: "/deratisation-brignoles/" },
  { label: "Cafards à Brignoles", href: "/cafards-brignoles/" },
];

const faqItems: FAQItem[] = [
  {
    question: "Stop Nuisible Var intervient-il directement ?",
    answer:
      "Non. Stop Nuisible Var est une plateforme locale de mise en relation. Votre demande peut être transmise à un professionnel partenaire selon votre commune, le nuisible concerné et les disponibilités.",
  },
  {
    question: "La demande de rappel est-elle gratuite ?",
    answer:
      "Oui. La demande est gratuite et sans engagement. Vous restez libre de la suite donnée après le rappel.",
  },
  {
    question: "Puis-je envoyer une photo si je ne reconnais pas le nuisible ?",
    answer:
      "Oui, la photo est facultative. Elle peut aider à mieux orienter la demande, mais l'analyse reste indicative et ne remplace pas l'avis d'un professionnel.",
  },
  {
    question: "Quelles informations faut-il préciser ?",
    answer:
      "Indiquez la commune, le type de lieu, les signes observés, les zones touchées, l'urgence ressentie et un créneau de rappel possible.",
  },
];

function CtaLink({
  href = "/demande-devis/",
  children,
  variant = "primary",
}: {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark";
}) {
  const styles = {
    primary: "bg-[#E86A33] text-white shadow-[0_14px_32px_rgba(232,106,51,.22)] hover:bg-[#cf5524]",
    secondary: "border border-[#1F4D3A]/25 bg-white text-[#1F2933] hover:border-[#E86A33] hover:text-[#E86A33]",
    dark: "bg-[#1F4D3A] text-white hover:bg-[#173c2d]",
  };

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-12 items-center justify-center rounded-[8px] px-5 py-3 text-sm font-black transition ${styles[variant]}`}
      data-track-cta
    >
      {children}
      <span aria-hidden="true" className="ml-2">
        -&gt;
      </span>
    </Link>
  );
}

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-black uppercase tracking-[.14em] text-[#E86A33]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black leading-tight text-[#1F2933] sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 leading-8 text-[#51606d]">{text}</p> : null}
    </div>
  );
}

export default function HomePage() {
  const cityMap = new Map(priorityCities.map((city) => [city.name, city]));

  return (
    <main className="overflow-x-hidden bg-[#F6F1E8] text-[#1F2933]">
      <section className="bg-[#F6F1E8] py-10 sm:py-16">
        <div className="container grid items-center gap-10 lg:grid-cols-[1fr_.92fr]">
          <div>
            <p className="inline-flex rounded-full border border-[#1F4D3A]/15 bg-white px-3 py-2 text-xs font-black uppercase tracking-[.12em] text-[#1F4D3A]">
              Stop Nuisible Var
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.06] text-[#1F2933] sm:text-5xl lg:text-6xl">
              Un nuisible chez vous dans le Var ? Décrivez le problème et demandez un rappel
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#51606d]">
              Rats, souris, cafards, punaises de lit, guêpes, frelons ou doute sur le nuisible : Stop Nuisible Var vous aide à qualifier votre demande avant transmission à un professionnel partenaire.
            </p>
            <div className="mt-7 rounded-[8px] border border-[#1F4D3A]/15 bg-white px-4 py-3 text-sm font-black text-[#1F4D3A]">
              Plateforme locale de mise en relation — pas une entreprise d’intervention directe.
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CtaLink>Demander un rappel gratuit</CtaLink>
              <CtaLink href="/guides/identifier-un-nuisible-var/" variant="secondary">
                Identifier le nuisible
              </CtaLink>
            </div>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <PhoneLink className="focus-ring inline-flex min-h-12 items-center justify-center rounded-[8px] bg-[#1F4D3A] px-5 py-3 text-sm font-black text-white transition hover:bg-[#173c2d]" />
            </div>
          </div>

          <div className="order-first rounded-[8px] border border-[#1F4D3A]/12 bg-white p-3 shadow-[0_22px_60px_rgba(31,77,58,.14)] lg:order-none">
            <Image
              src="/images/home/home-hero-inspection-cuisine-var.webp"
              alt="Inspection visuelle dans une cuisine pour identifier des signes de nuisibles dans le Var"
              width={1200}
              height={928}
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="h-auto w-full rounded-[6px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="container">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionTitle
              eyebrow="Choix rapide"
              title="Quel est votre problème ?"
              text="Sélectionnez le cas le plus proche de votre situation pour consulter les signes utiles avant de demander un rappel."
            />
            <CtaLink href="/demande-devis/" variant="dark">
              Demander un rappel
            </CtaLink>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {pestChoices.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring group flex min-h-[92px] items-center gap-4 rounded-[8px] border border-[#1F4D3A]/12 bg-[#F6F1E8] p-4 transition hover:border-[#E86A33] hover:bg-white"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[8px] bg-white text-[#1F4D3A] ring-1 ring-[#1F4D3A]/10 group-hover:text-[#E86A33]">
                  <PestIcon name={item.icon} className="h-8 w-8" />
                </span>
                <span className="min-w-0">
                  <span className="block text-base font-black leading-5 text-[#1F2933]">{item.label}</span>
                  <span className="mt-1 block text-sm leading-5 text-[#51606d]">{item.hint}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F6F1E8] py-12 sm:py-16">
        <div className="container grid gap-8 lg:grid-cols-[.86fr_1.14fr] lg:items-center">
          <SectionTitle
            eyebrow="Photo facultative"
            title="Vous pouvez aussi joindre une photo"
            text="Une photo d’un insecte, d’un nid, de traces ou de dégâts peut aider à mieux orienter votre demande. Elle reste facultative."
          />
          <div className="rounded-[8px] border border-[#1F4D3A]/12 bg-white p-5 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <h3 className="text-xl font-black text-[#1F2933]">Photo d’insecte, nid, trace ou dégât</h3>
                <p className="mt-3 text-sm leading-7 text-[#51606d]">
                  Évitez d’envoyer une photo contenant un visage, une personne, un document personnel ou tout élément permettant de vous identifier inutilement.
                </p>
              </div>
              <div className="grid h-20 w-20 place-items-center rounded-[8px] bg-[#F2C94C] text-3xl font-black text-[#1F2933]">+</div>
            </div>
            <p className="mt-4 rounded-[8px] bg-[#F6F1E8] px-4 py-3 text-sm font-semibold leading-6 text-[#51606d]">
              L’analyse reste indicative et ne remplace pas l’avis d’un professionnel.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <CtaLink href="/demande-devis/">Ajouter une photo dans ma demande</CtaLink>
              <CtaLink href="/guides/identifier-un-nuisible-var/" variant="secondary">
                Voir le guide d’identification
              </CtaLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="container">
          <SectionTitle eyebrow="Confiance" title="Des preuves simples, sans promesse artificielle" />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {trustItems.map((item) => (
              <div key={item} className="flex gap-3 rounded-[8px] border border-[#1F4D3A]/12 bg-[#F6F1E8] p-4 text-sm font-black leading-6 text-[#1F2933]">
                <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#E86A33]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F6F1E8] py-12 sm:py-16">
        <div className="container">
          <SectionTitle
            eyebrow="Pour qui ?"
            title="Une demande utile selon votre situation"
            text="Le bon relais dépend du lieu, du niveau d’urgence, de l’accès et des personnes à coordonner."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {audienceCards.map((card) => (
              <article key={card.title} className="rounded-[8px] border border-[#1F4D3A]/12 bg-white p-5">
                <h3 className="text-xl font-black text-[#1F2933]">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#51606d]">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="container">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionTitle
              eyebrow="Services"
              title="Services principaux dans le Var"
              text="Retrouvez les pages mères existantes pour préciser les signes, les lieux touchés et les informations utiles avant rappel."
            />
            <Link className="font-black text-[#E86A33] hover:text-[#cf5524]" href="/traitement-nuisibles-var/">
              Voir tous les traitements -&gt;
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 8).map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}/`}
                className="focus-ring rounded-[8px] border border-[#1F4D3A]/12 bg-white p-5 transition hover:border-[#E86A33] hover:shadow-[0_14px_38px_rgba(31,77,58,.12)]"
              >
                <PestIcon name={service.icon} className="h-10 w-10 text-[#1F4D3A]" />
                <h3 className="mt-4 text-lg font-black text-[#1F2933]">{service.shortName}</h3>
                <p className="mt-2 text-sm leading-6 text-[#51606d]">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1F4D3A] py-12 text-white sm:py-16">
        <div className="container grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[.14em] text-[#F2C94C]">Var 83</p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Villes et zones couvertes progressivement</h2>
            <p className="mt-4 leading-8 text-white/78">
              Les communes avec une page dédiée sont cliquables. Les autres peuvent être précisées dans le formulaire.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {requestedCities.map((name) => {
              const city = cityMap.get(name);
              return city ? (
                <Link
                  key={name}
                  href={`/villes/${city.slug}/`}
                  className="focus-ring rounded-full border border-white/15 bg-white px-4 py-2 text-sm font-black text-[#1F4D3A] transition hover:bg-[#F2C94C]"
                >
                  {name}
                </Link>
              ) : (
                <span key={name} className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-bold text-white/82">
                  {name}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F6F1E8] py-12 sm:py-16">
        <div className="container">
          <div className="rounded-[8px] border border-[#1F4D3A]/12 bg-white p-5 sm:p-6">
            <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <p className="text-xs font-black uppercase tracking-[.14em] text-[#E86A33]">Pages locales</p>
                <h2 className="mt-3 text-3xl font-black leading-tight text-[#1F2933]">Pages locales récentes</h2>
                <p className="mt-4 text-sm leading-7 text-[#51606d]">
                  Quelques pages utiles pour qualifier la demande selon la ville et le nuisible, sans changer les URLs existantes.
                </p>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {recentLocalPages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="focus-ring rounded-[8px] border border-[#1F4D3A]/12 bg-[#F6F1E8] px-4 py-3 text-sm font-black text-[#1F4D3A] transition hover:border-[#E86A33] hover:text-[#E86A33]"
                  >
                    {page.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-6 rounded-[8px] border border-[#1F4D3A]/10 bg-[#F6F1E8] p-4">
              <h3 className="text-lg font-black text-[#1F2933]">Besoin d’identifier un nuisible ?</h3>
              <p className="mt-2 text-sm leading-7 text-[#51606d]">
                Le guide d’identification aide à comparer les signes observés avant d’envoyer une demande.
              </p>
              <Link className="mt-3 inline-flex font-black text-[#E86A33] hover:text-[#cf5524]" href="/guides/identifier-un-nuisible-var/" data-track-cta>
                Lire le guide d’identification -&gt;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="container grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <SectionTitle eyebrow="Questions" title="Questions fréquentes" />
          <FAQ items={faqItems} />
        </div>
      </section>

      <section className="bg-[#1F4D3A] py-12 text-white sm:py-16">
        <div className="container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[.14em] text-[#F2C94C]">Demande de rappel</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight sm:text-4xl">
              Décrivez le problème, la commune et les signes observés.
            </h2>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <CtaLink href="/demande-devis/">Demander un rappel gratuit</CtaLink>
            <CtaLink href="/guides/identifier-un-nuisible-var/" variant="secondary">
              Identifier le nuisible
            </CtaLink>
          </div>
        </div>
      </section>
    </main>
  );
}
