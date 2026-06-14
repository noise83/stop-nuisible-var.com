import Link from "next/link";
import type { City, Service } from "@/data/site";
import { PestIcon } from "@/components/icons";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/${service.slug}/`} className="focus-ring group rounded-[8px] border border-[#102337]/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl">
      <PestIcon name={service.icon} className="h-12 w-12 text-[#bf593f]" />
      <h3 className="mt-5 text-xl font-black text-[#102337]">{service.shortName}</h3>
      <p className="mt-3 text-sm leading-7 text-[#607080]">{service.description}</p>
      <span className="mt-5 inline-block text-sm font-bold text-[#24493d] group-hover:text-[#bf593f]">Voir la page -&gt;</span>
    </Link>
  );
}

export function CityCard({ city }: { city: City }) {
  return (
    <Link href={`/villes/${city.slug}/`} className="focus-ring rounded-[8px] border border-[#102337]/10 bg-white p-5 transition hover:border-[#bf593f]">
      <p className="text-xs font-bold uppercase tracking-[.12em] text-[#bf593f]">{city.zone}</p>
      <h3 className="mt-2 text-xl font-black text-[#102337]">{city.name}</h3>
      <p className="mt-3 text-sm leading-7 text-[#607080]">{city.intro}</p>
    </Link>
  );
}

export function RelatedLinks({ links }: { links: Array<{ label: string; href: string }> }) {
  return (
    <div className="rounded-[8px] border border-[#102337]/10 bg-[#f5f1e8] p-6">
      <p className="font-black text-[#102337]">A lire aussi</p>
      <ul className="mt-4 grid gap-2 text-sm font-semibold text-[#24493d] sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link className="hover:text-[#bf593f]" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
