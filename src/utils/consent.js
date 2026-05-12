const STORAGE_KEY = "stch_consent_v1";
const EXPIRY_MS = 365 * 24 * 60 * 60 * 1000;

export const CONSENT_EVENT = "stch:consent-change";

const defaultState = { analytics: false, decided: false };

export function getConsent() {
  if (typeof window === "undefined") return defaultState;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    const parsed = JSON.parse(raw);
    if (!parsed?.timestamp || Date.now() - parsed.timestamp > EXPIRY_MS) {
      localStorage.removeItem(STORAGE_KEY);
      return defaultState;
    }
    return {
      analytics: !!parsed.analytics,
      decided: true,
      timestamp: parsed.timestamp,
    };
  } catch {
    return defaultState;
  }
}

export function hasDecided() {
  return getConsent().decided;
}

function pushToGtag({ analytics }) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("consent", "update", {
    analytics_storage: analytics ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

export function setConsent({ analytics }) {
  const payload = { analytics: !!analytics, timestamp: Date.now() };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // localStorage může být zakázané (private mode) — souhlas pak platí jen pro tuto session
  }
  pushToGtag({ analytics: payload.analytics });
  window.dispatchEvent(
    new CustomEvent(CONSENT_EVENT, { detail: { analytics: payload.analytics } }),
  );
}

export function reopenBanner() {
  window.dispatchEvent(new CustomEvent("stch:consent-reopen"));
}
