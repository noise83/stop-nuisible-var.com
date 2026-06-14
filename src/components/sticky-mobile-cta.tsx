import Link from "next/link";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#102337]/10 bg-white p-3 shadow-[0_-12px_30px_rgba(16,35,55,.12)] sm:hidden">
      <Link href="/demande-devis/" className="focus-ring flex h-12 items-center justify-center rounded-[7px] bg-[#bf593f] text-sm font-black text-white">
        Decrire mon probleme
      </Link>
    </div>
  );
}
