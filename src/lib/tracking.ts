"use client";

export type TrackingEvent =
  | "lead_form_view"
  | "lead_form_submit"
  | "cta_click"
  | "nuisible_select"
  | "city_page_view";

export function trackEvent(eventName: TrackingEvent, params?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") return;
  const gtag = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag;
  gtag?.("event", eventName, params ?? {});
}
