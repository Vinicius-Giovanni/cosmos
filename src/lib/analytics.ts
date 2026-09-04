declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: "click_contact" | "click_whatsapp" | "form_submit") {
  window.gtag?.("event", name);
}