import { doctor } from "@/data/doctor";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: Array<Record<string, unknown>>;
  }
}

/**
 * Dispara un evento personalizado en GA4 y GTM.
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined") {
    if (window.gtag) {
      window.gtag("event", eventName, params);
    }
    if (window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...params,
      });
    }
  }
}

/**
 * Dispara la conversión de WhatsApp para Google Ads, GA4 y GTM.
 */
export function trackWhatsAppClick(source: string = "general") {
  const googleAdsId = doctor.googleAdsId || "AW-18345396143";
  const label = doctor.googleAdsWhatsappLabel;

  if (typeof window !== "undefined") {
    // 1. Evento de conversión de Google Ads
    if (window.gtag) {
      if (label) {
        window.gtag("event", "conversion", {
          send_to: `${googleAdsId}/${label}`,
          event_category: "Engagement",
          event_label: `WhatsApp - ${source}`,
          value: 1.0,
          currency: "MXN",
        });
      } else {
        window.gtag("event", "conversion", {
          send_to: googleAdsId,
          event_category: "Engagement",
          event_label: `WhatsApp - ${source}`,
        });
      }

      // 2. Evento personalizado de GA4
      window.gtag("event", "clic_whatsapp", {
        source,
        event_category: "Contact",
        event_label: "WhatsApp CTA",
      });
    }

    // 3. GTM DataLayer Push
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "clic_whatsapp",
        event_type: "conversion",
        source,
      });
      window.dataLayer.push({
        event: "whatsapp_click",
        source,
      });
    }
  }
}

/**
 * Dispara la conversión de Llamada Telefónica para Google Ads, GA4 y GTM.
 */
export function trackPhoneClick(source: string = "general") {
  const googleAdsId = doctor.googleAdsId || "AW-18345396143";
  const label = doctor.googleAdsPhoneLabel;

  if (typeof window !== "undefined") {
    // 1. Evento de conversión de Google Ads
    if (window.gtag) {
      if (label) {
        window.gtag("event", "conversion", {
          send_to: `${googleAdsId}/${label}`,
          event_category: "Engagement",
          event_label: `Llamada - ${source}`,
          value: 1.0,
          currency: "MXN",
        });
      } else {
        window.gtag("event", "conversion", {
          send_to: googleAdsId,
          event_category: "Engagement",
          event_label: `Llamada - ${source}`,
        });
      }

      // 2. Evento personalizado de GA4
      window.gtag("event", "clic_llamar", {
        source,
        event_category: "Contact",
        event_label: "Llamada CTA",
      });
    }

    // 3. GTM DataLayer Push
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "clic_llamar",
        event_type: "conversion",
        source,
      });
      window.dataLayer.push({
        event: "phone_click",
        source,
      });
    }
  }
}

/**
 * Trackea scroll hasta un elemento específico.
 */
export function trackScrollTo(sectionName: string) {
  trackEvent(`scroll_${sectionName}`, { section: sectionName });
}
