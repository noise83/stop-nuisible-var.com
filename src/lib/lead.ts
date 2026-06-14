import { z } from "zod";

export const leadStatuses = [
  "Nouveau",
  "Envoye au partenaire",
  "Contacte",
  "Valide",
  "Invalide",
  "Doublon",
  "Hors zone",
  "Mauvais numero",
] as const;

export const leadSchema = z.object({
  leadId: z.string().trim().min(8).max(80),
  createdAt: z.string().trim().min(10).max(80),
  status: z.enum(leadStatuses),
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().min(8).max(25),
  email: z.string().trim().email().max(120).optional().or(z.literal("")),
  city: z.string().trim().min(2).max(120),
  pest: z.string().trim().min(2).max(80),
  placeType: z.string().trim().min(2).max(80),
  urgency: z.string().trim().min(2).max(80),
  message: z.string().trim().max(1200).optional().or(z.literal("")),
  sourceUrl: z.string().trim().max(500).optional().or(z.literal("")),
  photoName: z.string().trim().max(160).optional().or(z.literal("")),
  consent: z.literal(true),
  website: z.string().max(0).optional().or(z.literal("")),
});

export type LeadPayload = z.infer<typeof leadSchema>;
export type LeadStatus = (typeof leadStatuses)[number];

export function sanitizeLine(value: string | undefined) {
  return (value ?? "").replace(/[\r\n<>]/g, " ").trim();
}

export function buildLeadEmail(lead: LeadPayload) {
  const subject = `Nouveau lead nuisibles Var - ${sanitizeLine(lead.pest)} - ${sanitizeLine(lead.city)}`;
  const rows = [
    ["ID lead", lead.leadId],
    ["Statut", lead.status],
    ["Date", lead.createdAt],
    ["Nuisible", lead.pest],
    ["Ville", lead.city],
    ["Nom/prenom", lead.name],
    ["Telephone", lead.phone],
    ["Email", lead.email || "Non renseigne"],
    ["Type de lieu", lead.placeType],
    ["Urgence", lead.urgency],
    ["Message", lead.message || "Non renseigne"],
    ["Photo", lead.photoName || "Non jointe"],
    ["URL d'origine", lead.sourceUrl || "Non renseignee"],
    ["Consentement RGPD", "oui"],
  ];
  const text = rows.map(([label, value]) => `${label}: ${sanitizeLine(value)}`).join("\n");
  const html = `<h1>Nouveau lead nuisibles Var</h1><table>${rows
    .map(
      ([label, value]) =>
        `<tr><th align="left" style="padding:6px 12px 6px 0">${label}</th><td>${sanitizeLine(value)}</td></tr>`,
    )
    .join("")}</table>`;

  return { subject, text, html };
}
