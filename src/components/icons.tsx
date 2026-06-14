const paths: Record<string, React.ReactNode> = {
  bedbug: (
    <>
      <ellipse cx="24" cy="25" rx="9" ry="13" />
      <path d="M18 18c-3-3-4-6-2-9M30 18c3-3 4-6 2-9M16 24H8M32 24h8M17 30l-8 5M31 30l8 5" />
      <path d="M20 16c2-2 6-2 8 0M19 25h10M20 32h8" />
    </>
  ),
  rodent: (
    <>
      <path d="M12 30c2-10 11-15 23-8 6 4 6 12 0 16-8 5-21 2-23-8Z" />
      <circle cx="33" cy="25" r="1.5" />
      <path d="M17 21c-2-6 5-9 8-4M38 31c4 0 7 2 8 5M12 31H5" />
    </>
  ),
  roach: (
    <>
      <ellipse cx="24" cy="25" rx="8" ry="14" />
      <path d="M18 14c-4-5-6-8-4-11M30 14c4-5 6-8 4-11M16 22H8M32 22h8M17 29H8M31 29h9M20 15c3 3 5 3 8 0M24 12v27" />
    </>
  ),
  wasp: (
    <>
      <path d="M10 25c8-9 17-9 28 0-11 9-20 9-28 0Z" />
      <path d="M20 18c-2-8 7-10 10-3M18 25h16M22 19l-3 12M28 19l3 12M38 25l7-3" />
    </>
  ),
  termite: (
    <>
      <path d="M13 35c5-14 16-20 27-18-3 12-12 20-27 18Z" />
      <path d="M16 32 8 40M22 25l-8-7M29 21l-5-10M33 28h10M19 34h18" />
    </>
  ),
  mosquito: (
    <>
      <path d="M24 15v20M24 20l-12-8M24 20l12-8M24 26l-15 3M24 26l15 3M24 35l-7 9M24 35l7 9M24 16l3-9" />
      <ellipse cx="24" cy="25" rx="4" ry="10" />
    </>
  ),
  caterpillar: (
    <>
      <circle cx="11" cy="29" r="5" />
      <circle cx="20" cy="27" r="6" />
      <circle cx="31" cy="28" r="6" />
      <circle cx="40" cy="31" r="4" />
      <path d="M19 18v-7M31 19v-8M13 34l-4 6M24 33l-4 7M35 34l-3 7" />
    </>
  ),
  bird: (
    <>
      <path d="M8 29c10-13 23-16 34-6-10 0-15 6-19 15-4-6-9-8-15-9Z" />
      <path d="M28 18c5-6 9-8 14-8-1 6-5 10-11 12M40 23l6 2-6 3" />
    </>
  ),
};

export function PestIcon({ name, className = "" }: { name: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name] ?? paths.bedbug}
    </svg>
  );
}

export function VarMap({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 520 380" role="img" aria-label="Carte abstraite du Var">
      <rect width="520" height="380" rx="20" fill="#f5f1e8" />
      <path d="M86 230c45-76 94-129 181-142 68-10 123 12 158 58 31 41 22 88-18 116-48 33-122 14-168 50-35 27-82 31-124 6-32-19-44-53-29-88Z" fill="#24493d" opacity=".16" />
      <path d="M98 248c42-62 95-102 166-110 58-7 109 8 142 46" fill="none" stroke="#24493d" strokeWidth="8" strokeLinecap="round" />
      <path d="M77 296c92 30 183 30 273-1 43-15 67-34 94-55" fill="none" stroke="#bf593f" strokeWidth="10" strokeLinecap="round" />
      <g fill="#102337">
        <circle cx="172" cy="221" r="8" />
        <circle cx="250" cy="166" r="8" />
        <circle cx="330" cy="207" r="8" />
        <circle cx="289" cy="273" r="8" />
      </g>
      <g fill="#dfcaa2">
        <path d="M118 132c18-22 36-33 56-34-10 19-28 31-56 34Z" />
        <path d="M386 95c20 4 34 14 43 31-20-1-34-11-43-31Z" />
      </g>
    </svg>
  );
}
