"use client";

export type TrackingEvent =
  | "form_start"
  | "form_submit_success"
  | "photo_selected"
  | "click_phone"
  | "click_cta_devis"
  | "nuisible_select";

type TrackingParams = {
  page_path?: string;
  page_title?: string;
  page_type?: string;
  service_slug?: string;
  city_slug?: string;
  form_location?: string;
  has_photo?: boolean;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(eventName: TrackingEvent, params?: TrackingParams) {
  if (typeof window === "undefined") return;
  if (!Array.isArray(window.dataLayer)) return;

  window.dataLayer.push({
    event: eventName,
    ...sanitizeParams({
      page_path: window.location.pathname,
      page_title: document.title,
      ...params,
    }),
  });
}

function sanitizeParams(params: TrackingParams) {
  const allowed: TrackingParams = {};

  if (typeof params.page_path === "string") allowed.page_path = params.page_path;
  if (typeof params.page_title === "string") allowed.page_title = params.page_title;
  if (typeof params.page_type === "string") allowed.page_type = params.page_type;
  if (typeof params.service_slug === "string") allowed.service_slug = params.service_slug;
  if (typeof params.city_slug === "string") allowed.city_slug = params.city_slug;
  if (typeof params.form_location === "string") allowed.form_location = params.form_location;
  if (typeof params.has_photo === "boolean") allowed.has_photo = params.has_photo;

  return allowed;
}
