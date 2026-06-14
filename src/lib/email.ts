import type { LeadPayload } from "@/lib/lead";
import { buildLeadEmail } from "@/lib/lead";
import type { Resend } from "resend";

let resendClient: Resend | null = null;

async function getResend() {
  if (!process.env.RESEND_API_KEY) return null;
  if (!resendClient) {
    const { Resend } = await import("resend");
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }
  return resendClient;
}

export async function sendLeadEmail(lead: LeadPayload, photo?: { filename: string; content: Buffer }) {
  const to = process.env.LEADS_RECIPIENT_EMAIL;
  const admin = process.env.ADMIN_EMAIL;
  const from = process.env.LEADS_FROM_EMAIL ?? "Stop Nuisible Var <onboarding@resend.dev>";
  const resend = await getResend();
  const email = buildLeadEmail(lead);

  if (!to || !resend) {
    console.info(
      "[lead:dev] Email non envoye : configurez RESEND_API_KEY et LEADS_RECIPIENT_EMAIL pour activer l'envoi en production.",
      email.subject,
      email.text,
    );
    return { sent: false, dev: true };
  }

  await resend.emails.send({
    from,
    to,
    cc: admin && admin !== to ? admin : undefined,
    subject: email.subject,
    text: email.text,
    html: email.html,
    attachments: photo ? [{ filename: photo.filename, content: photo.content }] : undefined,
  });

  return { sent: true, dev: false };
}
