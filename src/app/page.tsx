import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/components/faq";
import { PestIcon } from "@/components/icons";
import { priorityCities, services, type FAQItem } from "@/data/site";

export const metadata: Metadata = {
  title: "Nuisibles Var : dératisation, cafards, punaises de lit, frelons",
  description:
    "Rats, cafards, punaises de lit, guêpes, frelons ou termites dans le Var ? Décrivez votre problème et demandez un rappel gratuit sans engagement.",
  alternates: { canonical: "/" },
};

const serviceLinks = [
  { label: "Rats et souris", slug: "deratisation-var", icon: "rodent" },
  { label: "Punaises de lit", slug: "punaises-de-lit-var", icon: "bedbug" },
  { label: "Cafards / blattes", slug: "cafards-blattes-var", icon: "roach" },
  { label: "Guêpes et frelons", slug: "guepes-frelons-var", icon: "wasp" },
  { label: "Termites", slug: "termites-var", icon: "termite" },
  { label: "Moustique tigre", slug: "moustique-tigre-var", icon: "mosquito" },
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

const processSteps = [
  ["1", "Vous décrivez le problème", "Commune, type de nuisible, lieu touché, urgence et signes observés."],
  ["2", "Votre demande est qualifiée", "Les informations sont structurées pour orienter la demande sans vous faire répéter."],
  ["3", "Un partenaire adapté peut vous rappeler", "La mise en relation dépend de votre secteur, du nuisible et des disponibilités."],
  ["4", "Vous restez libre de choisir", "Le rappel est sans engagement et ne vous oblige pas à accepter un devis."],
];

const urgentSigns = [
  "Cafards visibles en plein jour",
  "Bruits dans les murs ou les combles",
  "Crottes de rats ou de souris",
  "Suspicion de punaises de lit",
  "Nid de guêpes ou de frelons",
  "Commerce, location ou copropriété concerné",
];

const trustCards = [
  ["Une demande claire", "Le formulaire rassemble les informations utiles avant toute transmission."],
  ["Un partenaire selon votre secteur", "La commune, le nuisible et l'urgence orientent la mise en relation."],
  ["Un rappel sans engagement", "Vous pouvez échanger, comparer et décider librement après le contact."],
  ["Une plateforme transparente", "Stop Nuisible Var facilite la demande sans se présenter comme intervenant direct."],
];

const faqItems: FAQItem[] = [
  {
    question: "Le rappel est-il gratuit ?",
    answer:
      "Oui, la demande de rappel est gratuite et sans engagement. Le professionnel partenaire peut ensuite proposer un devis adapté à la situation.",
  },
  {
    question: "Stop Nuisible Var intervient-il directement ?",
    answer:
      "Non. Stop Nuisible Var est une plateforme locale de demande de rappel et de mise en relation avec des professionnels partenaires.",
  },
  {
    question: "Quels nuisibles sont concernés ?",
    answer:
      "Les demandes peuvent concerner rats, souris, cafards, blattes, punaises de lit, guêpes, frelons, termites, moustique tigre et autres nuisibles fréquents dans le Var.",
  },
  {
    question: "Dans quelles villes du Var le service fonctionne-t-il ?",
    answer:
      "Les demandes sont possibles dans les principales communes du Var, notamment Toulon, Hyères, La Seyne-sur-Mer, Fréjus, Saint-Raphaël, Draguignan, Brignoles et Saint-Tropez.",
  },
  {
    question: "Suis-je obligé d’accepter le devis ?",
    answer:
      "Non. Le rappel et la mise en relation ne vous obligent pas à accepter une proposition. Vous restez libre de choisir la suite à donner.",
  },
];

const recentLocalPages = [
  { label: "Punaises de lit à La Seyne-sur-Mer", href: "/punaises-de-lit-la-seyne-sur-mer/" },
  { label: "Punaises de lit à Draguignan", href: "/punaises-de-lit-draguignan/" },
  { label: "Dératisation à Saint-Raphaël", href: "/deratisation-saint-raphael/" },
  { label: "Cafards à Saint-Raphaël", href: "/cafards-saint-raphael/" },
  { label: "Guêpes et frelons à Fréjus", href: "/guepes-frelons-frejus/" },
  { label: "Guêpes et frelons à Draguignan", href: "/guepes-frelons-draguignan/" },
  { label: "Dératisation à Brignoles", href: "/deratisation-brignoles/" },
  { label: "Cafards à Brignoles", href: "/cafards-brignoles/" },
];

function CtaLink({
  href = "/demande-devis/",
  children,
  variant = "primary",
}: {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const styles =
    variant === "primary"
      ? "bg-[#E86A33] text-white shadow-[0_16px_34px_rgba(232,106,51,.25)] hover:bg-[#cf5524]"
      : "border border-[#1F4D3A]/20 bg-white text-[#1F2933] hover:border-[#E86A33] hover:text-[#E86A33]";

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-12 items-center justify-center rounded-[8px] px-5 py-3 text-sm font-black transition ${styles}`}
      data-track-cta
    >
      {children}
      <span aria-hidden="true" className="ml-2">
        -&gt;
      </span>
    </Link>
  );
}

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-black uppercase tracking-[.14em] text-[#E86A33]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black leading-tight text-[#1F2933] sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 leading-8 text-[#51606d]">{text}</p> : null}
    </div>
  );
}

export default function HomePage() {
  const availableServices = serviceLinks
    .map((item) => {
      const service = services.find((entry) => entry.slug === item.slug);
      return service ? { ...item, service } : null;
    })
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const cityMap = new Map(priorityCities.map((city) => [city.name, city]));

  return (
    <main className="bg-[#F6F1E8] text-[#1F2933]">
      <section className="relative overflow-hidden bg-[#F6F1E8]">
        <div className="container grid min-h-[calc(100vh-80px)] items-center gap-10 py-14 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
          <div>
            <div className="flex flex-wrap gap-2">
              {["Sans engagement", "Var 83", "Mise en relation transparente"].map((badge) => (
                <span key={badge} className="rounded-full border border-[#1F4D3A]/15 bg-white px-3 py-2 text-xs font-black text-[#1F4D3A]">
                  {badge}
                </span>
              ))}
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.05] text-[#1F2933] sm:text-5xl lg:text-6xl">
              Nuisibles dans le Var ? Décrivez votre problème et demandez un rappel
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#51606d]">
              Rats, souris, cafards, punaises de lit, guêpes, frelons, termites ou moustiques : Stop Nuisible Var vous aide à transmettre une demande claire à un professionnel partenaire selon votre commune, le nuisible concerné et le niveau d&apos;urgence.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaLink>Demander un rappel gratuit</CtaLink>
              <CtaLink variant="secondary">Identifier un nuisible avec une photo</CtaLink>
            </div>
          </div>

          <div className="relative rounded-[8px] bg-[#1F4D3A] p-5 text-white shadow-[0_24px_70px_rgba(31,77,58,.22)] sm:p-7">
            <div className="absolute right-5 top-5 h-16 w-16 rounded-full bg-[#F2C94C]/85" />
            <p className="text-sm font-black uppercase tracking-[.14em] text-[#F2C94C]">Plateforme locale</p>
            <h2 className="mt-6 max-w-md text-3xl font-black leading-tight">Une demande qualifiée avant transmission</h2>
            <div className="mt-8 grid gap-3">
              {["Commune et type de lieu", "Nuisible ou signes observés", "Urgence et créneau de rappel", "Consentement obligatoire"].map((item) => (
                <div key={item} className="rounded-[8px] border border-white/12 bg-white/8 p-4 text-sm font-bold">
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-white/76">
              Stop Nuisible Var ne se présente pas comme une entreprise d&apos;intervention directe. Votre demande peut être transmise à un partenaire adapté.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-18">
        <div className="container grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <SectionTitle
            eyebrow="Photo utile"
            title="Vous ne savez pas quel nuisible vous avez trouvé ?"
            text="Ajoutez une photo d’un insecte, d’un nid, de traces ou de dégâts visibles. La photo peut aider à pré-identifier le problème avant transmission de votre demande."
          />
          <div className="rounded-[8px] border border-[#1F4D3A]/12 bg-[#F6F1E8] p-5 sm:p-6">
            <div className="grid aspect-[4/3] place-items-center rounded-[8px] border border-dashed border-[#1F4D3A]/30 bg-white text-center">
              <div className="px-6">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#F2C94C] text-2xl font-black text-[#1F2933]">+</span>
                <p className="mt-4 font-black text-[#1F2933]">Photo d&apos;insecte, nid, trace ou dégât</p>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CtaLink>Envoyer une photo</CtaLink>
              <p className="text-sm leading-6 text-[#51606d]">L’analyse reste indicative et ne remplace pas l’avis d’un professionnel.</p>
            </div>
            <p className="mt-4 rounded-[8px] bg-white px-4 py-3 text-sm font-semibold leading-6 text-[#51606d]">
              Évitez d’envoyer une photo contenant un visage, une personne, un document personnel ou tout élément permettant de vous identifier inutilement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F6F1E8] py-14 sm:py-18">
        <div className="container">
          <SectionTitle eyebrow="Fonctionnement" title="Comment ça marche" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map(([number, title, text]) => (
              <article key={number} className="rounded-[8px] border border-[#1F4D3A]/12 bg-white p-5">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#1F4D3A] font-black text-white">{number}</span>
                <h3 className="mt-5 text-xl font-black text-[#1F2933]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#51606d]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-18">
        <div className="container">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <SectionTitle
              eyebrow="Nuisibles"
              title="Les demandes les plus fréquentes"
              text="Accédez aux pages existantes pour préciser le type de nuisible avant d'envoyer votre demande."
            />
            <Link className="font-black text-[#E86A33] hover:text-[#cf5524]" href="/traitement-nuisibles-var/">
              Voir tous les services -&gt;
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {availableServices.map(({ label, icon, service }) => (
              <Link
                key={service.slug}
                href={`/${service.slug}/`}
                className="focus-ring rounded-[8px] border border-[#1F4D3A]/12 bg-white p-5 transition hover:-translate-y-1 hover:border-[#E86A33] hover:shadow-xl"
              >
                <PestIcon name={icon} className="h-11 w-11 text-[#E86A33]" />
                <h3 className="mt-5 text-xl font-black text-[#1F2933]">{label}</h3>
                <p className="mt-3 text-sm leading-7 text-[#51606d]">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1F4D3A] py-14 text-white sm:py-18">
        <div className="container grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <SectionTitle eyebrow="Urgence" title="Quand demander un rappel rapidement ?" text="Certaines situations méritent d'être décrites sans attendre pour faciliter l'orientation de la demande." />
            <div className="mt-6">
              <CtaLink>Décrire mon problème maintenant</CtaLink>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {urgentSigns.map((item) => (
              <div key={item} className="rounded-[8px] border border-white/12 bg-white/8 p-4 text-sm font-semibold leading-6">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F6F1E8] py-14 sm:py-18">
        <div className="container">
          <SectionTitle
            eyebrow="Var 83"
            title="Communes couvertes dans le Var"
            text="Les communes avec une page dédiée sont cliquables. Les autres peuvent être indiquées dans le formulaire de demande."
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {requestedCities.map((name) => {
              const city = cityMap.get(name);
              return city ? (
                <Link
                  key={name}
                  href={`/villes/${city.slug}/`}
                  className="focus-ring rounded-full border border-[#1F4D3A]/15 bg-white px-4 py-2 text-sm font-black text-[#1F4D3A] transition hover:border-[#E86A33] hover:text-[#E86A33]"
                >
                  {name}
                </Link>
              ) : (
                <span key={name} className="rounded-full border border-[#1F4D3A]/10 bg-white/60 px-4 py-2 text-sm font-bold text-[#51606d]">
                  {name}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-18">
        <div className="container">
          <SectionTitle eyebrow="Confiance" title="Pourquoi passer par Stop Nuisible Var ?" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {trustCards.map(([title, text]) => (
              <article key={title} className="rounded-[8px] border border-[#1F4D3A]/12 bg-[#F6F1E8] p-5">
                <h3 className="text-lg font-black text-[#1F2933]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#51606d]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F6F1E8] py-14 sm:py-18">
        <div className="container grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <SectionTitle eyebrow="Questions" title="FAQ courte" />
          <FAQ items={faqItems} />
        </div>
      </section>

      <section className="bg-white py-12 sm:py-14">
        <div className="container">
          <div className="rounded-[8px] border border-[#1F4D3A]/12 bg-[#F6F1E8] p-5 sm:p-6">
            <h2 className="text-2xl font-black text-[#1F2933]">Dernières pages locales utiles</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#51606d]">
              Quelques pages récemment ajoutées pour préciser votre demande selon la ville et le nuisible.
            </p>
            <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {recentLocalPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="focus-ring rounded-[8px] border border-[#1F4D3A]/12 bg-white px-4 py-3 text-sm font-black text-[#1F4D3A] transition hover:border-[#E86A33] hover:text-[#E86A33]"
                >
                  {page.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1F4D3A] py-14 text-white sm:py-18">
        <div className="container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[.14em] text-[#F2C94C]">Demande de rappel</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight sm:text-4xl">
              Besoin d&apos;un rappel pour un problème de nuisibles dans le Var ?
            </h2>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <CtaLink>Demander un rappel gratuit</CtaLink>
            <CtaLink variant="secondary">Ajouter une photo</CtaLink>
          </div>
        </div>
      </section>
    </main>
  );
}
