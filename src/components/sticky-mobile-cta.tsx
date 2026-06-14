import Link from "next/link";
import { PhoneLink } from "@/components/ui";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-[#102337]/10 bg-white p-3 shadow-[0_-12px_30px_rgba(16,35,55,.12)] sm:hidden">
      <PhoneLink className="focus-ring flex h-12 items-center justify-center rounded-[7px] bg-[#102337] text-sm font-black text-white" />
      <Link href="/demande-devis/" className="focus-ring flex h-12 items-center justify-center rounded-[7px] bg-[#bf593f] text-sm font-black text-white" data-track-cta>
        Rappel gratuit
      </Link>
    </div>
  );
}
