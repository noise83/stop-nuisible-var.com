import { NextRequest, NextResponse } from "next/server";
import { leadSchema } from "@/lib/lead";
import { sendLeadEmail } from "@/lib/email";

const attempts = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 5;

function rateLimit(ip: string) {
  const now = Date.now();
  const current = attempts.get(ip);
  if (!current || current.resetAt < now) {
    attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (current.count >= LIMIT) return false;
  current.count += 1;
  return true;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (!rateLimit(ip)) {
    return NextResponse.json({ ok: false, message: "Trop de demandes. Reessayez plus tard." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Format invalide." }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, message: "Certains champs sont incomplets ou invalides." }, { status: 400 });
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true, message: "Votre demande a ete enregistree." });
  }

  try {
    await sendLeadEmail(parsed.data);
    return NextResponse.json({
      ok: true,
      message: "Votre demande a ete enregistree. Un professionnel ou partenaire specialise pourra vous recontacter.",
    });
  } catch (error) {
    console.error("[lead:error]", error);
    return NextResponse.json({ ok: false, message: "La demande n'a pas pu etre transmise." }, { status: 500 });
  }
}
