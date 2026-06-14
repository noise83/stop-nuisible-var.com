"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/tracking";

export function CityPageViewTracker({ city }: { city: string }) {
  useEffect(() => {
    trackEvent("city_page_view", { city });
  }, [city]);

  return null;
}
