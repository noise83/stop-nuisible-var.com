"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { CONSENT_TEXT, PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";
import { trackEvent } from "@/lib/tracking";

const pests = ["Punaises de lit", "Rats ou souris", "Cafards / blattes", "Guêpes ou frelons", "Termites / xylophages", "Moustique tigre", "Chenilles processionnaires", "Pigeons / goélands", "Je ne sais pas"];
const placeTypes = ["Maison", "Appartement", "Commerce", "Restaurant", "Hôtel / location", "Copropriété", "Jardin", "Autre"];
const urgencies = ["Très urgent", "Aujourd'hui", "Cette semaine", "Simple renseignement"];
const callbackSlots = ["Dès que possible", "Matin", "Midi", "Après-midi", "Soir"];
const photoAccept = ".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp";
const allowedPhotoTypes = new Set(["image/jpeg", "image/png", "image/webp"]);
const maxPhotoSize = 4 * 1024 * 1024;
const photoFormatError = "Format de photo non accepté. Utilisez JPG, PNG ou WEBP.";
const photoSizeError = "La photo est trop lourde. Taille maximale : 4 Mo.";

export function LeadForm({ defaultCity = "", defaultPest = "" }: { defaultCity?: string; defaultPest?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [photoError, setPhotoError] = useState("");
  const [photoName, setPhotoName] = useState("");
  const started = useRef(false);

  function validatePhoto(file: File | undefined) {
    if (!file || file.size === 0) {
      setPhotoError("");
      setPhotoName("");
      return true;
    }
    if (!allowedPhotoTypes.has(file.type)) {
      setPhotoError(photoFormatError);
      setPhotoName("");
      return false;
    }
    if (file.size > maxPhotoSize) {
      setPhotoError(photoSizeError);
      setPhotoName("");
      return false;
    }
    setPhotoError("");
    setPhotoName(file.name);
    return true;
  }

  function onPhotoChange(event: React.ChangeEvent<HTMLInputElement>) {
    const isValid = validatePhoto(event.currentTarget.files?.[0]);
    if (isValid && event.currentTarget.files?.[0]) {
      trackEvent("photo_selected", { form_location: "lead_form", has_photo: true });
    }
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const photo = formData.get("photo");
    if (photo instanceof File && !validatePhoto(photo)) {
      setStatus("error");
      setMessage(photo.size > maxPhotoSize ? photoSizeError : photoFormatError);
      return;
    }
    formData.set("sourceUrl", window.location.href);
    formData.set("sourcePage", window.location.pathname);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        body: formData,
      });
      const result = (await response.json()) as { ok?: boolean; message?: string; leadId?: string };
      if (!response.ok || !result.ok) throw new Error(result.message || "Erreur");
      setStatus("success");
      setMessage(result.message || "Votre demande est enregistrée.");
      trackEvent("form_submit_success", { form_location: "lead_form", has_photo: photo instanceof File && photo.size > 0 });
      form.reset();
      setPhotoError("");
      setPhotoName("");
    } catch {
      setStatus("error");
      setMessage("La demande n'a pas pu être envoyée. Vérifiez les champs et réessayez.");
    }
  }

  return (
    <form
      onFocus={() => {
        if (!started.current) {
          started.current = true;
          trackEvent("form_start", { form_location: "lead_form" });
        }
      }}
      onSubmit={onSubmit}
      className="rounded-[8px] border border-[#102337]/10 bg-white p-4 shadow-xl sm:p-6"
      noValidate
    >
      <div className="mb-4 rounded-[7px] bg-[#102337] px-4 py-3 text-white sm:mb-5">
        <p className="text-sm font-black">Rappel gratuit</p>
        <p className="mt-1 text-xs text-white/75">Décrivez l&apos;essentiel. Votre demande est transmise selon votre commune, le nuisible et l&apos;urgence.</p>
        <a href={PHONE_HREF} className="mt-3 inline-flex text-sm font-black text-[#dfcaa2] underline-offset-4 hover:underline" data-track-phone>
          Appeler le {PHONE_NUMBER}
        </a>
      </div>
      <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
        <Select label="Type de nuisible" name="pest" options={pests} required defaultValue={defaultPest} />
        <Field label="Ville" name="city" required defaultValue={defaultCity} />
        <Field label="Code postal" name="postalCode" inputMode="numeric" required />
        <Select label="Urgence" name="urgency" options={urgencies} required />
        <Select label="Type de lieu" name="placeType" options={placeTypes} required />
        <Field label="Nom" name="name" required />
        <Field label="Téléphone" name="phone" type="tel" required />
        <Field label="Email facultatif" name="email" type="email" />
        <Select label="Créneau de rappel préféré" name="callbackSlot" options={callbackSlots} />
        <label className="block md:col-span-2">
          <span className="text-sm font-bold text-[#102337]">Photo facultative</span>
          <span className="mt-2 block text-sm leading-6 text-[#405160]">
            Ajoutez une photo d’un insecte, d’un nid, de traces ou de dégâts visibles si vous souhaitez faciliter la pré-identification du problème.
          </span>
          <span className="mt-2 block text-sm leading-6 text-[#405160]">
            Formats acceptés : JPG, PNG ou WEBP. Taille maximale : 4 Mo.
          </span>
          <span className="mt-2 block text-sm leading-6 text-[#405160]">
            Pour comparer les traces, piqûres, crottes ou nids, vous pouvez consulter le{" "}
            <Link className="font-bold text-[#bf593f] underline-offset-4 hover:underline" href="/guides/identifier-un-nuisible-var/">
              guide pour identifier les signes d&apos;un nuisible dans le Var
            </Link>.
          </span>
          <span className="mt-2 block text-sm leading-6 text-[#405160]">
            L’analyse reste indicative et ne remplace pas l’avis d’un professionnel.
          </span>
          <span className="mt-2 block text-sm leading-6 text-[#405160]">
            Évitez d’envoyer une photo contenant un visage, une personne, un document personnel ou tout élément permettant de vous identifier inutilement.
          </span>
          <input name="photo" type="file" accept={photoAccept} onChange={onPhotoChange} aria-invalid={photoError ? "true" : "false"} aria-describedby="photo-help" className="mt-3 w-full rounded-[7px] border border-[#102337]/15 bg-[#f5f1e8] px-4 py-3 text-sm outline-none focus:border-[#bf593f]" />
          <span id="photo-help" className={`mt-2 block text-sm font-semibold ${photoError ? "text-[#9a3e2e]" : "text-[#24493d]"}`} role={photoError ? "alert" : undefined}>
            {photoError || (photoName ? `Fichier sélectionné : ${photoName}` : "Aucune photo sélectionnée.")}
          </span>
        </label>
      </div>
      <label className="mt-5 block">
        <span className="text-sm font-bold text-[#102337]">Message facultatif</span>
        <textarea name="message" maxLength={1200} rows={3} className="mt-2 w-full rounded-[7px] border border-[#102337]/15 bg-[#f5f1e8] px-4 py-3 outline-none focus:border-[#bf593f]" placeholder="Exemple : traces dans la cuisine, nid sous toiture, piqûres au réveil..." />
      </label>
      <div hidden aria-hidden="true" style={{ display: "none" }}>
        <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      </div>
      <label className="mt-5 flex gap-3 rounded-[7px] bg-[#f5f1e8] p-4 text-sm leading-6 text-[#405160]">
        <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 accent-[#bf593f]" />
        <span>{CONSENT_TEXT}</span>
      </label>
      <button disabled={status === "loading"} className="focus-ring mt-6 w-full rounded-[7px] bg-[#bf593f] px-5 py-4 font-black text-white transition hover:bg-[#a94833] disabled:cursor-not-allowed disabled:opacity-70">
        {status === "loading" ? "Envoi en cours..." : "Être rappelé gratuitement"}
      </button>
      {message ? (
        <p className={`mt-4 rounded-[7px] p-4 text-sm font-semibold ${status === "success" ? "bg-[#eaf3ed] text-[#24493d]" : "bg-[#fff0ec] text-[#9a3e2e]"}`} role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}

function Field({ label, name, type = "text", inputMode, required = false, defaultValue = "" }: { label: string; name: string; type?: string; inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"]; required?: boolean; defaultValue?: string }) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-[#102337]">{label}</span>
      <input name={name} type={type} inputMode={inputMode} required={required} defaultValue={defaultValue} className="mt-2 min-h-12 w-full rounded-[7px] border border-[#102337]/15 bg-[#f5f1e8] px-4 py-3 outline-none focus:border-[#bf593f]" />
    </label>
  );
}

function Select({ label, name, options, required = false, className = "", defaultValue = "" }: { label: string; name: string; options: string[]; required?: boolean; className?: string; defaultValue?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-bold text-[#102337]">{label}</span>
      <select name={name} required={required} defaultValue={defaultValue} onChange={() => name === "pest" && trackEvent("nuisible_select")} className="mt-2 min-h-12 w-full rounded-[7px] border border-[#102337]/15 bg-[#f5f1e8] px-4 py-3 outline-none focus:border-[#bf593f]">
        <option value="">Choisir</option>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </label>
  );
}
