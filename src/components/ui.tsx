import Link from "next/link";
import { MAIN_CTA, PHONE_HREF } from "@/lib/constants";

export function ButtonLink({
  href = "/demande-devis/",
  children = MAIN_CTA,
  variant = "primary",
}: {
  href?: string;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "dark";
}) {
  const base =
    "focus-ring inline-flex items-center justify-center rounded-[7px] px-5 py-3 text-sm font-bold transition";
  const variants = {
    primary: "bg-[#bf593f] text-white shadow-[0_12px_30px_rgba(191,89,63,.24)] hover:bg-[#a94833]",
    secondary: "border border-[#24493d]/25 bg-white/75 text-[#102337] hover:bg-white",
    dark: "bg-[#102337] text-white hover:bg-[#18324c]",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]}`} data-track-cta>
      {children}
      <span aria-hidden="true" className="ml-2">
        -&gt;
      </span>
    </Link>
  );
}

export function PhoneLink({
  children = "Appeler",
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <a href={PHONE_HREF} className={className || "focus-ring inline-flex items-center justify-center rounded-[7px] bg-[#102337] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#18324c]"} data-track-phone>
      {children}
    </a>
  );
}

export function Section({
  children,
  tone = "light",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "light" | "white" | "dark" | "sand";
  className?: string;
}) {
  const tones = {
    light: "bg-[#f5f1e8]",
    white: "bg-white",
    dark: "bg-[#102337] text-white",
    sand: "bg-[#ece1cc]",
  };
  return <section className={`${tones[tone]} py-16 sm:py-20 ${className}`}>{children}</section>;
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-xs font-bold uppercase tracking-[.14em] text-[#bf593f]">{children}</p>;
}
