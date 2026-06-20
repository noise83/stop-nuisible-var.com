import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/breadcrumb";
import { RelatedLinks } from "@/components/cards";
import { FAQ } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { CTABand } from "@/components/page-blocks";
import { ButtonLink, Eyebrow, Section } from "@/components/ui";
import { getGuide, getService, guides, type Guide, type GuideLink, type IllustratedGuidePest } from "@/data/site";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/jsonld";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/guides/${guide.slug}/` },
  };
}

export default async function GuidePage({ params }: { params: Params }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  const service = getService(guide.serviceSlug);
  const crumbs = [
    { name: "Accueil", href: "/" },
    { name: "Guides", href: "/traitement-nuisibles-var/" },
    { name: guide.title, href: `/guides/${guide.slug}/` },
  ];

  if (guide.illustratedGuide) {
    return <IllustratedGuidePage guide={guide} crumbs={crumbs} />;
  }

  return (
    <main className="overflow-x-hidden">
      <JsonLd data={[breadcrumbJsonLd(crumbs), faqJsonLd(guide.faq), articleJsonLd(guide.title, guide.description, `/guides/${guide.slug}/`, guide.published)]} />
      <Breadcrumb items={crumbs} />
      <Section>
        <div className="container max-w-4xl">
          <Eyebrow>Guide conseil</Eyebrow>
          <h1 className="text-4xl font-black leading-tight text-[#102337] sm:text-5xl">{guide.title}</h1>
          <p className="mt-6 text-lg leading-8 text-[#405160]">{guide.description}</p>
          <div className="mt-8"><ButtonLink /></div>
        </div>
      </Section>
      <Section tone="white">
        <article className="container grid gap-10 lg:grid-cols-[1fr_330px]">
          <div className="space-y-8">
            {guide.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-3xl font-black text-[#102337]">{section.heading}</h2>
                <p className="mt-4 leading-8 text-[#405160]">{section.body}</p>
              </section>
            ))}
            <FAQ items={guide.faq} />
          </div>
          <RelatedLinks
            links={[
              service ? { label: service.title, href: `/${service.slug}/` } : { label: "Traitement nuisibles Var", href: "/traitement-nuisibles-var/" },
              { label: "Demande de devis", href: "/demande-devis/" },
              ...guides.filter((item) => item.slug !== guide.slug).slice(0, 4).map((item) => ({ label: item.title, href: `/guides/${item.slug}/` })),
            ]}
          />
        </article>
      </Section>
      <CTABand title="Besoin d'un avis adapté à votre commune ?" text="Le formulaire transmet les informations utiles sans donner de consignes dangereuses." />
    </main>
  );
}

function IllustratedGuidePage({
  guide,
  crumbs,
}: {
  guide: Guide;
  crumbs: Array<{ name: string; href: string }>;
}) {
  const content = guide.illustratedGuide;
  if (!content) notFound();

  return (
    <main>
      <JsonLd data={[breadcrumbJsonLd(crumbs), faqJsonLd(guide.faq), articleJsonLd(guide.title, guide.description, `/guides/${guide.slug}/`, guide.published)]} />
      <Breadcrumb items={crumbs} />
      <Section className="py-10 sm:py-18">
        <div className="container grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
          <div className="min-w-0">
            <Eyebrow>Guide illustré</Eyebrow>
            <h1 className="break-words text-[2rem] font-black leading-tight text-[#102337] sm:text-5xl">{content.h1}</h1>
            <p className="mt-5 text-base leading-7 text-[#405160] sm:text-lg sm:leading-8">{content.introduction}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink>Demander un rappel gratuit</ButtonLink>
              <ButtonLink href="#photo" variant="secondary">Identifier avec une photo</ButtonLink>
            </div>
          </div>
          <Image
            src={content.heroImage}
            alt={content.heroImageAlt}
            width={960}
            height={540}
            priority
            unoptimized
            className="min-w-0 aspect-[16/10] w-full rounded-[8px] border border-[#102337]/10 bg-white object-cover shadow-sm"
          />
        </div>
      </Section>

      <Section tone="white" className="py-10 sm:py-16">
        <div className="container grid gap-8 lg:grid-cols-[260px_1fr] lg:items-start">
          <nav className="rounded-[8px] border border-[#102337]/10 bg-[#f5f1e8] p-5 lg:sticky lg:top-24" aria-label="Sommaire du guide">
            <p className="font-black text-[#102337]">Sommaire</p>
            <ul className="mt-4 grid gap-2 text-sm font-bold text-[#24493d]">
              {content.summary.map((item) => (
                <li key={item.href}>
                  <a className="hover:text-[#bf593f]" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="grid gap-6">
            {content.pests.map((pest) => (
              <PestGuideCard key={pest.id} pest={pest} />
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-10 sm:py-16">
        <div id="photo" className="container grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <Image
            src={content.photoBlock.image}
            alt={content.photoBlock.imageAlt}
            width={720}
            height={420}
            loading="lazy"
            unoptimized
            className="aspect-[16/10] w-full rounded-[8px] border border-[#102337]/10 bg-white object-cover shadow-sm"
          />
          <div>
            <Eyebrow>Photo facultative</Eyebrow>
            <h2 className="text-3xl font-black text-[#102337]">{content.photoBlock.title}</h2>
            <p className="mt-4 leading-8 text-[#405160]">{content.photoBlock.text}</p>
            <ul className="mt-5 grid gap-3 text-sm font-semibold leading-6 text-[#405160]">
              {content.photoBlock.checklist.map((item) => (
                <li key={item} className="rounded-[8px] bg-white p-4">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <ButtonLink>Envoyer une photo</ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="white" className="py-10 sm:py-16">
        <div className="container grid gap-8 lg:grid-cols-[1fr_360px]">
          <article>
            <Eyebrow>Var 83</Eyebrow>
            <h2 className="text-3xl font-black text-[#102337]">{content.localContext.title}</h2>
            <p className="mt-4 leading-8 text-[#405160]">{content.localContext.text}</p>
          </article>
          <RelatedLinks links={content.localContext.links} />
        </div>
      </Section>

      <Section className="py-10 sm:py-16">
        <div className="container grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <Eyebrow>Rappel</Eyebrow>
            <h2 className="text-3xl font-black text-[#102337]">{content.reminder.title}</h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {content.reminder.items.map((item) => (
              <li key={item} className="rounded-[8px] border border-[#102337]/10 bg-white p-4 text-sm font-semibold leading-6 text-[#405160]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="white" className="py-10 sm:py-16">
        <div className="container max-w-3xl">
          <h2 className="mb-6 text-3xl font-black text-[#102337]">Questions fréquentes</h2>
          <FAQ items={guide.faq} />
        </div>
      </Section>

      <section className="bg-[#102337] py-12 text-white sm:py-16">
        <div className="container flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.14em] text-[#f2c94c]">Demande claire</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight">{content.cta.title}</h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/75">{content.cta.text}</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            {content.cta.links.map((link, index) => (
              <ButtonLink key={link.href} href={link.href} variant={index === 0 ? "primary" : "secondary"}>
                {link.label}
              </ButtonLink>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function PestGuideCard({ pest }: { pest: IllustratedGuidePest }) {
  return (
    <section id={pest.id} className="scroll-mt-24 rounded-[8px] border border-[#102337]/10 bg-white p-4 shadow-sm sm:p-5">
      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        <Image
          src={pest.image}
          alt={pest.imageAlt}
          width={720}
          height={420}
          loading="lazy"
          unoptimized
          className="aspect-[4/3] w-full rounded-[8px] border border-[#102337]/10 bg-[#f5f1e8] object-cover"
        />
        <div>
          <h2 className="text-2xl font-black text-[#102337] sm:text-3xl">{pest.title}</h2>
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            <GuideList title="Signes fréquents" items={pest.signs} />
            <GuideList title="Lieux concernés" items={pest.places} />
            <GuideList title="Conseils avant rappel" items={pest.advice} />
          </div>
          <InlineLinks links={pest.links} />
        </div>
      </div>
    </section>
  );
}

function GuideList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-black uppercase tracking-[.08em] text-[#bf593f]">{title}</h3>
      <ul className="mt-3 grid gap-2 text-sm leading-6 text-[#405160]">
        {items.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>
    </div>
  );
}

function InlineLinks({ links }: { links: GuideLink[] }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="focus-ring rounded-full border border-[#24493d]/20 bg-[#f5f1e8] px-3 py-2 text-sm font-bold text-[#24493d] transition hover:border-[#bf593f] hover:text-[#bf593f]"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
