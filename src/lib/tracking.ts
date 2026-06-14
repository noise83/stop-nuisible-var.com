"use client";

export type TrackingEvent =
  | "form_start"
  | "form_submit"
  | "call_click"
  | "lead_created"
  | "city_page_view"
  | "lead_form_view"
  | "lead_step_start"
  | "lead_step_complete"
  | "lead_form_submit"
  | "cta_click"
  | "phone_click"
  | "nuisible_select";

export function trackEvent(eventName: TrackingEvent, params?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") return;
  const gtag = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag;
  gtag?.("event", eventName, params ?? {});
}
