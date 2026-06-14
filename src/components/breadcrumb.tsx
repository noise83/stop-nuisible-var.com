import Link from "next/link";

export function Breadcrumb({ items }: { items: Array<{ name: string; href: string }> }) {
  return (
    <nav aria-label="Fil d'Ariane" className="container pt-6 text-sm text-[#607080]">
      <ol className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {index === items.length - 1 ? (
              <span className="font-semibold text-[#102337]">{item.name}</span>
            ) : (
              <Link className="hover:text-[#bf593f]" href={item.href}>
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
