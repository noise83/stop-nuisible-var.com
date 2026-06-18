"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/tracking";

export function TrackingListener() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const cta = target?.closest("[data-track-cta]");
      if (cta instanceof HTMLAnchorElement && cta.pathname === "/demande-devis/") {
        trackEvent("click_cta_devis");
      }
      if (target?.closest("[data-track-phone]")) {
        trackEvent("click_phone");
      }
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
