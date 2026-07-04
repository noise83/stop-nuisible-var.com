import Link from "next/link";
import { priorityCities, services } from "@/data/site";
import { CONTACT_EMAIL, CONTACT_EMAIL_HREF, PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#102337] pb-24 pt-14 text-white sm:pb-10">
      <div className="container grid gap-10 lg:grid-cols-[1.2fr_.9fr_.9fr_.9fr]">
        <div>
          <p className="text-xl font-black">Stop Nuisible Var</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/72">
            Stop Nuisible Var qualifie votre demande et peut la transmettre, avec votre accord, à un professionnel partenaire adapté.
          </p>
          <a href={PHONE_HREF} className="mt-5 inline-flex rounded-[7px] bg-[#bf593f] px-4 py-3 text-sm font-black text-white" data-track-phone>
            Appeler le {PHONE_NUMBER}
          </a>
          <p className="mt-4 text-sm leading-6 text-white/72">
            Contact administratif :{" "}
            <a className="font-bold text-white hover:text-[#dfcaa2]" href={CONTACT_EMAIL_HREF}>
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
        <FooterColumn title="Nuisibles" links={services.slice(0, 8).map((s) => ({ label: s.shortName, href: `/${s.slug}/` }))} />
        <FooterColumn title="Villes" links={priorityCities.slice(0, 8).map((c) => ({ label: c.name, href: `/villes/${c.slug}/` }))} />
        <FooterColumn
          title="Confiance"
          links={[
            { label: "Demande de rappel", href: "/demande-devis/" },
            { label: "Comment ça marche", href: "/comment-ca-marche/" },
            { label: "Partenaires", href: "/partenaires/" },
            { label: "Confidentialité", href: "/confidentialite/" },
            { label: "Mentions légales", href: "/mentions-legales/" },
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
