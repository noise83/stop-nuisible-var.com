import { VarMap } from "@/components/icons";
import { ButtonLink, Eyebrow, PhoneLink, Section } from "@/components/ui";

export function ConversionHero({
  eyebrow,
  title,
  text,
  bullets,
}: {
  eyebrow: string;
  title: string;
  text: string;
  bullets: string[];
}) {
  return (
    <Section className="overflow-hidden">
      <div className="container grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="max-w-4xl text-4xl font-black leading-tight text-[#102337] sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#405160]">{text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink>Demander un rappel gratuit</ButtonLink>
            <PhoneLink>Appeler le 07 89 89 34 22</PhoneLink>
          </div>
          <ul className="mt-8 grid gap-3 text-sm font-semibold text-[#102337] sm:grid-cols-3">
            {bullets.map((bullet) => (
              <li key={bullet} className="rounded-[7px] border border-[#102337]/10 bg-white/60 px-4 py-3">{bullet}</li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <VarMap className="w-full shadow-[0_30px_80px_rgba(16,35,55,.18)]" />
          <div className="absolute -bottom-6 left-6 right-6 rounded-[8px] bg-[#102337] p-5 text-white shadow-xl">
            <p className="text-sm font-bold text-[#dfcaa2]">Plateforme de mise en relation</p>
            <p className="mt-2 text-sm leading-6 text-white/78">Votre demande est transmise à un professionnel partenaire adapté selon votre commune, le type de nuisible et le niveau d'urgence.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function ProcessSteps() {
  const steps = [
    ["1", "Vous décrivez le problème", "Nuisible, commune, type de lieu, urgence et informations utiles."],
    ["2", "La demande est qualifiée", "Les éléments servent à identifier le bon secteur et le type de professionnel."],
    ["3", "Transmission au bon partenaire", "Votre demande est transmise à un professionnel partenaire adapté selon votre commune, le type de nuisible et le niveau d'urgence."],
  ];
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {steps.map(([number, title, text]) => (
        <article key={number} className="rounded-[8px] border border-[#102337]/10 bg-white p-6">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#bf593f] font-black text-white">{number}</span>
          <h3 className="mt-5 text-xl font-black text-[#102337]">{title}</h3>
          <p className="mt-3 leading-7 text-[#607080]">{text}</p>
        </article>
      ))}
    </div>
  );
}

export function CTABand({ title, text }: { title: string; text: string }) {
  return (
    <section className="bg-[#24493d] py-12 text-white">
      <div className="container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-black">{title}</h2>
          <p className="mt-3 max-w-2xl text-white/76">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <PhoneLink>Appeler le 07 89 89 34 22</PhoneLink>
          <ButtonLink variant="primary">Demander un rappel gratuit</ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function EmergencyPanel() {
  return (
    <aside className="rounded-[8px] border border-[#bf593f]/25 bg-[#fff8f2] p-6">
      <p className="text-sm font-black uppercase tracking-[.12em] text-[#bf593f]">Besoin d'un rappel</p>
      <h2 className="mt-3 text-2xl font-black text-[#102337]">Décrivez le problème sans attendre que la situation s'installe.</h2>
      <p className="mt-3 leading-7 text-[#607080]">
        Le formulaire transmet les bonnes informations : commune, type de nuisible, lieu concerné, téléphone et niveau d'urgence. Aucune intervention immédiate n'est promise.
      </p>
      <div className="mt-5 flex flex-col gap-3">
        <PhoneLink />
        <ButtonLink>Demander un rappel gratuit</ButtonLink>
      </div>
    </aside>
  );
}
