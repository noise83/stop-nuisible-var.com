import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-[#f5f1e8] py-24">
      <div className="container max-w-2xl">
        <h1 className="text-5xl font-black text-[#102337]">Page introuvable</h1>
        <p className="mt-5 leading-8 text-[#607080]">La page demandée n&apos;existe pas ou a changé d&apos;adresse.</p>
        <Link className="mt-8 inline-flex rounded-[7px] bg-[#bf593f] px-5 py-3 font-bold text-white" href="/">
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
