"use client";

import { useEffect, useRef, useState } from "react";
import { CONSENT_TEXT } from "@/lib/constants";
import { trackEvent } from "@/lib/tracking";

const pests = ["Punaises de lit", "Rats ou souris", "Cafards / blattes", "Guepes ou frelons", "Termites / xylophages", "Moustique tigre", "Chenilles processionnaires", "Pigeons / goelands", "Je ne sais pas"];
const placeTypes = ["Maison", "Appartement", "Commerce", "Restaurant", "Hotel / location", "Copropriete", "Jardin", "Autre"];
const urgencies = ["Urgent", "Aujourd'hui", "Cette semaine", "Simple renseignement"];

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const started = useRef(false);

  useEffect(() => {
    trackEvent("lead_form_view");
  }, []);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("sourceUrl", window.location.href);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        body: formData,
      });
      const result = (await response.json()) as { ok?: boolean; message?: string; leadId?: string };
      if (!response.ok || !result.ok) throw new Error(result.message || "Erreur");
      setStatus("success");
      setMessage(result.message || "Votre demande a ete enregistree.");
      trackEvent("lead_form_submit", { leadId: result.leadId ?? "" });
      trackEvent("lead_created", { leadId: result.leadId ?? "" });
      trackEvent("lead_step_complete", { leadId: result.leadId ?? "", step: "form" });
      form.reset();
    } catch {
      setStatus("error");
      setMessage("La demande n'a pas pu etre envoyee. Verifiez les champs et reessayez.");
    }
  }

  return (
    <form
      onFocus={() => {
        if (!started.current) {
          started.current = true;
          trackEvent("lead_step_start", { step: "form" });
        }
      }}
      onSubmit={onSubmit}
      className="rounded-[8px] border border-[#102337]/10 bg-white p-5 shadow-xl sm:p-6"
      noValidate
    >
      <div className="mb-5 rounded-[7px] bg-[#102337] px-4 py-3 text-white">
        <p className="text-sm font-black">Rappel gratuit</p>
        <p className="mt-1 text-xs text-white/75">Decrivez l'essentiel, un partenaire pourra vous recontacter.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Select label="Type de nuisible" name="pest" options={pests} required />
        <Field label="Ville ou code postal" name="city" required />
        <Select label="Urgence" name="urgency" options={urgencies} required />
        <Select label="Type de lieu" name="placeType" options={placeTypes} required />
        <Field label="Nom" name="name" required />
        <Field label="Telephone" name="phone" type="tel" required />
        <Field label="Email facultatif" name="email" type="email" />
        <label className="block">
          <span className="text-sm font-bold text-[#102337]">Photo facultative</span>
          <input name="photo" type="file" accept="image/*" className="mt-2 w-full rounded-[7px] border border-[#102337]/15 bg-[#f5f1e8] px-4 py-3 text-sm outline-none focus:border-[#bf593f]" />
        </label>
      </div>
      <label className="mt-5 block">
        <span className="text-sm font-bold text-[#102337]">Message facultatif</span>
        <textarea name="message" maxLength={1200} rows={3} className="mt-2 w-full rounded-[7px] border border-[#102337]/15 bg-[#f5f1e8] px-4 py-3 outline-none focus:border-[#bf593f]" placeholder="Exemple : traces dans la cuisine, nid sous toiture, piqures au reveil..." />
      </label>
      <label className="hidden" aria-hidden="true">
        Site web
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <label className="mt-5 flex gap-3 rounded-[7px] bg-[#f5f1e8] p-4 text-sm leading-6 text-[#405160]">
        <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 accent-[#bf593f]" />
        <span>{CONSENT_TEXT}</span>
      </label>
      <button disabled={status === "loading"} className="focus-ring mt-6 w-full rounded-[7px] bg-[#bf593f] px-5 py-4 font-black text-white transition hover:bg-[#a94833] disabled:cursor-not-allowed disabled:opacity-70">
        {status === "loading" ? "Envoi en cours..." : "Envoyer ma demande"}
      </button>
      {message ? (
        <p className={`mt-4 rounded-[7px] p-4 text-sm font-semibold ${status === "success" ? "bg-[#eaf3ed] text-[#24493d]" : "bg-[#fff0ec] text-[#9a3e2e]"}`} role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-[#102337]">{label}</span>
      <input name={name} type={type} required={required} className="mt-2 w-full rounded-[7px] border border-[#102337]/15 bg-[#f5f1e8] px-4 py-3 outline-none focus:border-[#bf593f]" />
    </label>
  );
}

function Select({ label, name, options, required = false, className = "" }: { label: string; name: string; options: string[]; required?: boolean; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-bold text-[#102337]">{label}</span>
      <select name={name} required={required} onChange={() => name === "pest" && trackEvent("nuisible_select")} className="mt-2 w-full rounded-[7px] border border-[#102337]/15 bg-[#f5f1e8] px-4 py-3 outline-none focus:border-[#bf593f]">
        <option value="">Choisir</option>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </label>
  );
}
