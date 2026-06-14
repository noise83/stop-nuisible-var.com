import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/breadcrumb";
import { RelatedLinks } from "@/components/cards";
import { FAQ } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { CTABand } from "@/components/page-blocks";
import { ButtonLink, Eyebrow, Section } from "@/components/ui";
import { getGuide, getService, guides } from "@/data/site";
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
  return (
    <main>
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
