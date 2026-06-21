const trustItems = [
  "Demande gratuite et sans engagement",
  "Contact rapide selon disponibilité du partenaire",
  "Transmission selon votre commune, le nuisible et l’urgence",
  "Données transmises uniquement avec votre consentement",
  "Possibilité d’ajouter une photo",
  "Positionnement transparent : mise en relation avec des partenaires",
];

export function TrustList() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold tracking-tight text-slate-950">
          Un service clair, local et sans engagement
        </h2>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {trustItems.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-800"
            >
              <span
                aria-hidden="true"
                className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-bold text-white"
              >
                {"✓"}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
