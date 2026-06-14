"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/tracking";

export function TrackingListener() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      if (target?.closest("[data-track-cta]")) {
        trackEvent("cta_click");
      }
      if (target?.closest("[data-track-phone]")) {
        trackEvent("phone_click");
      }
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
