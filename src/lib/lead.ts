import { z } from "zod";

export const leadStatuses = [
  "Nouveau",
  "Envoyé au partenaire",
  "Contacté",
  "Valide",
  "Invalide",
  "Doublon",
  "Hors zone",
  "Mauvais numéro",
  "Devis fait",
  "Client signé",
] as const;

export const leadSchema = z.object({
  leadId: z.string().trim().min(8).max(80),
  createdAt: z.string().trim().min(10).max(80),
  status: z.enum(leadStatuses),
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().min(8).max(25),
  email: z.string().trim().email().max(120).optional().or(z.literal("")),
  city: z.string().trim().min(2).max(120),
  postalCode: z.string().trim().min(2).max(12),
  pest: z.string().trim().min(2).max(80),
  placeType: z.string().trim().min(2).max(80),
  urgency: z.string().trim().min(2).max(80),
  callbackSlot: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().max(1200).optional().or(z.literal("")),
  sourcePage: z.string().trim().max(180).optional().or(z.literal("")),
  sourceUrl: z.string().trim().max(500).optional().or(z.literal("")),
  utmSource: z.string().trim().max(120).optional().or(z.literal("")),
  utmMedium: z.string().trim().max(120).optional().or(z.literal("")),
  utmCampaign: z.string().trim().max(160).optional().or(z.literal("")),
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
  const subject = `Nouveau lead nuisibles Var — ${sanitizeLine(lead.pest)} — ${sanitizeLine(lead.city)}`;
  const rows = [
    ["ID lead", lead.leadId],
    ["Statut", lead.status],
    ["Date / heure", lead.createdAt],
    ["Nuisible", lead.pest],
    ["Ville", lead.city],
    ["Code postal", lead.postalCode],
    ["Nom / prénom", lead.name],
    ["Téléphone", lead.phone],
    ["Email", lead.email || "Non renseigné"],
    ["Type de lieu", lead.placeType],
    ["Urgence", lead.urgency],
    ["Créneau de rappel préféré", lead.callbackSlot || "Non renseigné"],
    ["Message", lead.message || "Non renseigné"],
    ["Photo", lead.photoName || "Non jointe"],
    ["Page source", lead.sourcePage || "Non renseignée"],
    ["URL d'origine", lead.sourceUrl || "Non renseignée"],
    ["UTM source", lead.utmSource || "Non renseigné"],
    ["UTM medium", lead.utmMedium || "Non renseigné"],
    ["UTM campaign", lead.utmCampaign || "Non renseigné"],
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
