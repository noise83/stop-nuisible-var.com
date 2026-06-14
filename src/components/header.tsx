import Link from "next/link";
import { services } from "@/data/site";
import { ButtonLink } from "@/components/ui";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#102337]/10 bg-[#f5f1e8]/95 backdrop-blur">
      <div className="container flex h-20 items-center justify-between gap-6">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-[7px]">
          <span className="grid h-11 w-11 place-items-center rounded-[8px] bg-[#102337] text-lg font-black text-white">SN</span>
          <span>
            <span className="block text-base font-black text-[#102337]">Stop Nuisible Var</span>
            <span className="hidden text-xs text-[#607080] sm:block">Demandes locales de rappel et devis</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-semibold text-[#102337] lg:flex" aria-label="Navigation principale">
          <Link className="hover:text-[#bf593f]" href="/traitement-nuisibles-var/">Services</Link>
          <Link className="hover:text-[#bf593f]" href="/zones-intervention/">Zones</Link>
          <Link className="hover:text-[#bf593f]" href="/comment-ca-marche/">Comment ca marche</Link>
          <Link className="hover:text-[#bf593f]" href="/partenaires/">Partenaires</Link>
          <div className="group relative">
            <button className="font-semibold hover:text-[#bf593f]">Nuisibles</button>
            <div className="invisible absolute right-0 top-8 w-72 rounded-[8px] border border-[#102337]/10 bg-white p-3 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
              {services.map((service) => (
                <Link key={service.slug} href={`/${service.slug}/`} className="block rounded-[6px] px-3 py-2 hover:bg-[#f5f1e8]">
                  {service.shortName}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <div className="hidden sm:block">
          <ButtonLink />
        </div>
        <details className="relative lg:hidden">
          <summary className="focus-ring list-none rounded-[7px] border border-[#102337]/15 px-3 py-2 text-sm font-black text-[#102337]">
            Menu
          </summary>
          <div className="absolute right-0 top-12 w-72 rounded-[8px] border border-[#102337]/10 bg-white p-3 text-sm font-semibold text-[#102337] shadow-xl">
            <Link className="block rounded-[6px] px-3 py-2 hover:bg-[#f5f1e8]" href="/traitement-nuisibles-var/">Services</Link>
            <Link className="block rounded-[6px] px-3 py-2 hover:bg-[#f5f1e8]" href="/zones-intervention/">Zones</Link>
            <Link className="block rounded-[6px] px-3 py-2 hover:bg-[#f5f1e8]" href="/comment-ca-marche/">Comment ca marche</Link>
            <Link className="block rounded-[6px] px-3 py-2 hover:bg-[#f5f1e8]" href="/partenaires/">Partenaires</Link>
            <Link className="mt-2 block rounded-[6px] bg-[#bf593f] px-3 py-2 text-center text-white" href="/demande-devis/">Decrire mon probleme</Link>
          </div>
        </details>
      </div>
    </header>
  );
}
