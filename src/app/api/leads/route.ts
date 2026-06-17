import { NextRequest, NextResponse } from "next/server";
import { leadSchema } from "@/lib/lead";
import { sendLeadEmail } from "@/lib/email";

const attempts = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 5;
const allowedPhotoTypes = new Set(["image/jpeg", "image/png", "image/webp"]);
const maxPhotoSize = 4 * 1024 * 1024;

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
    return NextResponse.json({ ok: false, message: "Trop de demandes. Réessayez plus tard." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  let photo: { filename: string; content: Buffer } | undefined;
  try {
    const contentType = request.headers.get("content-type") ?? "";
    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      body = Object.fromEntries(formData.entries());
      const file = formData.get("photo");
      if (file instanceof File && file.size > 0) {
        if (!allowedPhotoTypes.has(file.type)) {
          return NextResponse.json({ ok: false, message: "Format de photo non accepté. Utilisez JPG, PNG ou WEBP." }, { status: 400 });
        }
        if (file.size > maxPhotoSize) {
          return NextResponse.json({ ok: false, message: "La photo est trop lourde. Taille maximale : 4 Mo." }, { status: 400 });
        }
        photo = {
          filename: file.name || "photo-lead",
          content: Buffer.from(await file.arrayBuffer()),
        };
        body.photoName = photo.filename;
      }
    } else {
      body = (await request.json()) as Record<string, unknown>;
    }
  } catch {
    return NextResponse.json({ ok: false, message: "Format invalide." }, { status: 400 });
  }

  body.leadId = crypto.randomUUID();
  body.createdAt = new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" });
  body.status = "Nouveau";
  body.consent = body.consent === true || body.consent === "on" || body.consent === "true";
  if (typeof body.sourceUrl === "string") {
    try {
      const source = new URL(body.sourceUrl);
      body.utmSource = source.searchParams.get("utm_source") ?? "";
      body.utmMedium = source.searchParams.get("utm_medium") ?? "";
      body.utmCampaign = source.searchParams.get("utm_campaign") ?? "";
    } catch {
      body.utmSource = "";
      body.utmMedium = "";
      body.utmCampaign = "";
    }
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, message: "Certains champs sont incomplets ou invalides." }, { status: 400 });
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true, message: "Votre demande est enregistrée." });
  }

  try {
    await sendLeadEmail(parsed.data, photo);
    return NextResponse.json({
      ok: true,
      leadId: parsed.data.leadId,
      message: "Votre demande est enregistrée. Elle est transmise selon votre commune, le type de nuisible et le niveau d'urgence.",
    });
  } catch (error) {
    console.error("[lead:error]", error);
    return NextResponse.json({ ok: false, message: "La demande n'a pas pu être transmise." }, { status: 500 });
  }
}
