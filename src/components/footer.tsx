import Link from "next/link";
import { priorityCities, services } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[#102337] pb-24 pt-14 text-white sm:pb-10">
      <div className="container grid gap-10 lg:grid-cols-[1.2fr_.9fr_.9fr_.9fr]">
        <div>
          <p className="text-xl font-black">Stop Nuisible Var</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/72">
            Plateforme locale de demande de rappel et de mise en relation. Nous ne declarons pas intervenir directement : votre demande est transmise a un professionnel ou partenaire specialise.
          </p>
        </div>
        <FooterColumn title="Nuisibles" links={services.slice(0, 8).map((s) => ({ label: s.shortName, href: `/${s.slug}/` }))} />
        <FooterColumn title="Villes" links={priorityCities.slice(0, 8).map((c) => ({ label: c.name, href: `/villes/${c.slug}/` }))} />
        <FooterColumn
          title="Confiance"
          links={[
            { label: "Demande de devis", href: "/demande-devis/" },
            { label: "Comment ca marche", href: "/comment-ca-marche/" },
            { label: "Partenaires", href: "/partenaires/" },
            { label: "Confidentialite", href: "/confidentialite/" },
            { label: "Mentions legales", href: "/mentions-legales/" },
          ]}
        />
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: Array<{ label: string; href: string }> }) {
  return (
    <div>
      <p className="font-bold text-[#dfcaa2]">{title}</p>
      <ul className="mt-4 space-y-2 text-sm text-white/72">
        {links.map((link) => (
          <li key={link.href}>
            <Link className="hover:text-white" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
