export const SITE_NAME = "Stop Nuisible Var";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://stop-nuisible-var.com";
export const MAIN_CTA = "Decrire mon probleme";
export const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER ?? "04 00 00 00 00";
export const PHONE_HREF = `tel:${PHONE_NUMBER.replace(/\D/g, "")}`;

export const CONSENT_TEXT =
  "J'accepte que mes informations soient transmises a une entreprise partenaire specialisee afin d'etre recontacte concernant ma demande.";
