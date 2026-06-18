"use client";

import { useEffect, useSyncExternalStore } from "react";

const GTM_ID = "GTM-TNSL83ND";
const consentKey = "snv-analytics-consent";

type ConsentChoice = "accepted" | "refused" | null;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function GoogleTagManagerConsent() {
  const choice = useSyncExternalStore(subscribeToConsent, getConsentSnapshot, getServerSnapshot);

  useEffect(() => {
    if (choice !== "accepted") return;
    loadGoogleTagManager();
  }, [choice]);

  useEffect(() => {
    if (choice !== "refused") return;
    removeGoogleTagManager();
  }, [choice]);

  function saveChoice(nextChoice: Exclude<ConsentChoice, null>) {
    window.localStorage.setItem(consentKey, nextChoice);
    window.dispatchEvent(new Event("snv-consent-change"));
  }

  return (
    <>
      {choice === "accepted" ? (
        <noscript>
          <iframe
            title="Google Tag Manager"
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      ) : null}
      {choice ? (
        <button
          type="button"
          onClick={() => {
            window.localStorage.removeItem(consentKey);
            removeGoogleTagManager();
            window.dispatchEvent(new Event("snv-consent-change"));
          }}
          className="fixed bottom-3 left-3 z-50 rounded-[7px] border border-[#102337]/15 bg-white/95 px-3 py-2 text-xs font-bold text-[#405160] shadow-lg"
        >
          Cookies
        </button>
      ) : (
        <div className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-3xl rounded-[8px] border border-[#102337]/15 bg-white p-4 text-sm shadow-2xl sm:flex sm:items-center sm:justify-between sm:gap-4">
          <p className="leading-6 text-[#405160]">
            Nous utilisons des cookies de mesure d’audience pour comprendre les pages consultées et améliorer le site. Vous pouvez accepter ou refuser.
          </p>
          <div className="mt-3 flex flex-col gap-2 sm:mt-0 sm:flex-row">
            <button
              type="button"
              onClick={() => saveChoice("accepted")}
              className="focus-ring rounded-[7px] bg-[#bf593f] px-4 py-2 text-sm font-black text-white"
            >
              Accepter les statistiques
            </button>
            <button
              type="button"
              onClick={() => saveChoice("refused")}
              className="focus-ring rounded-[7px] border border-[#102337]/15 bg-white px-4 py-2 text-sm font-black text-[#102337]"
            >
              Refuser
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function loadGoogleTagManager() {
  if (document.querySelector(`script[data-gtm-id="${GTM_ID}"]`)) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    "gtm.start": Date.now(),
    event: "gtm.js",
  });

  const script = document.createElement("script");
  script.async = true;
  script.dataset.gtmId = GTM_ID;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
}

function removeGoogleTagManager() {
  document.querySelector(`script[data-gtm-id="${GTM_ID}"]`)?.remove();
  delete window.dataLayer;
}

function subscribeToConsent(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("snv-consent-change", callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("snv-consent-change", callback);
  };
}

function getConsentSnapshot(): ConsentChoice {
  const storedChoice = window.localStorage.getItem(consentKey);
  return storedChoice === "accepted" || storedChoice === "refused" ? storedChoice : null;
}

function getServerSnapshot(): ConsentChoice {
  return null;
}
