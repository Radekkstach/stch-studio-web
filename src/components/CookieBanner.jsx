import React, { useEffect, useState } from "react";
import { Cookie, Settings, X } from "lucide-react";
import { hasDecided, setConsent, getConsent } from "../utils/consent";
import { useTranslation } from "../i18n";

const REOPEN_EVENT = "stch:consent-reopen";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsOn, setAnalyticsOn] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasDecided()) setVisible(true);
    }, 600);

    const reopen = () => {
      const current = getConsent();
      setAnalyticsOn(current.analytics);
      setShowSettings(true);
      setVisible(true);
    };
    window.addEventListener(REOPEN_EVENT, reopen);
    return () => {
      clearTimeout(timer);
      window.removeEventListener(REOPEN_EVENT, reopen);
    };
  }, []);

  if (!visible) return null;

  const acceptAll = () => {
    setConsent({ analytics: true });
    setVisible(false);
    setShowSettings(false);
  };

  const rejectAll = () => {
    setConsent({ analytics: false });
    setVisible(false);
    setShowSettings(false);
  };

  const saveCustom = () => {
    setConsent({ analytics: analyticsOn });
    setVisible(false);
    setShowSettings(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t("cookies.title")}
      className="fixed inset-x-0 bottom-0 z-[100] flex justify-center px-4 pb-4 pointer-events-none animate-in fade-in slide-in-from-bottom-4 duration-500"
    >
      <div className="pointer-events-auto w-full max-w-2xl rounded-2xl border border-foreground/10 bg-surface/95 p-5 shadow-2xl backdrop-blur-xl md:p-6">
        {!showSettings ? (
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-500 dark:text-indigo-300">
                <Cookie size={18} />
              </div>
              <div className="flex-1">
                <h3 className="mb-1 text-sm font-semibold text-foreground">
                  {t("cookies.title")}
                </h3>
                <p className="text-xs leading-relaxed text-muted md:text-sm">
                  {t("cookies.description")}
                </p>
              </div>
            </div>

            <div className="flex flex-col-reverse gap-2 sm:flex-row sm:items-center sm:justify-end">
              <button
                onClick={() => {
                  setAnalyticsOn(getConsent().analytics);
                  setShowSettings(true);
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-4 py-2.5 text-xs font-medium text-foreground/80 transition-colors hover:bg-foreground/10 hover:text-foreground"
              >
                <Settings size={14} /> {t("cookies.settings")}
              </button>
              <button
                onClick={rejectAll}
                className="rounded-full border border-foreground/10 bg-transparent px-4 py-2.5 text-xs font-medium text-foreground/80 transition-colors hover:bg-foreground/10 hover:text-foreground"
              >
                {t("cookies.reject")}
              </button>
              <button
                onClick={acceptAll}
                className="rounded-full bg-foreground px-5 py-2.5 text-xs font-semibold text-background transition-colors hover:bg-indigo-500 hover:text-white"
              >
                {t("cookies.accept")}
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {t("cookies.panelTitle")}
                </h3>
                <p className="mt-1 text-xs text-muted">
                  {t("cookies.panelSubtitle")}
                </p>
              </div>
              <button
                onClick={() => setShowSettings(false)}
                className="rounded-full p-1.5 text-muted transition-colors hover:bg-foreground/10 hover:text-foreground"
                aria-label={t("cookies.closeSettings")}
              >
                <X size={16} />
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-start justify-between gap-4 rounded-xl border border-foreground/10 bg-foreground/[0.02] p-4">
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {t("cookies.necessary")}{" "}
                    <span className="ml-1 text-[10px] uppercase tracking-wider text-indigo-500 dark:text-indigo-300">
                      {t("cookies.necessaryBadge")}
                    </span>
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {t("cookies.necessaryDesc")}
                  </p>
                </div>
                <Toggle checked disabled />
              </div>

              <div className="flex items-start justify-between gap-4 rounded-xl border border-foreground/10 bg-foreground/[0.02] p-4">
                <div>
                  <p className="text-sm font-medium text-foreground">{t("cookies.analytics")}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {t("cookies.analyticsDesc")}
                  </p>
                </div>
                <Toggle
                  checked={analyticsOn}
                  onChange={() => setAnalyticsOn((v) => !v)}
                />
              </div>
            </div>

            <div className="flex flex-col-reverse gap-2 sm:flex-row sm:items-center sm:justify-end">
              <button
                onClick={rejectAll}
                className="rounded-full border border-foreground/10 bg-transparent px-4 py-2.5 text-xs font-medium text-foreground/80 transition-colors hover:bg-foreground/10 hover:text-foreground"
              >
                {t("cookies.rejectAll")}
              </button>
              <button
                onClick={saveCustom}
                className="rounded-full border border-foreground/10 bg-foreground/10 px-4 py-2.5 text-xs font-medium text-foreground transition-colors hover:bg-foreground/20"
              >
                {t("cookies.save")}
              </button>
              <button
                onClick={acceptAll}
                className="rounded-full bg-foreground px-5 py-2.5 text-xs font-semibold text-background transition-colors hover:bg-indigo-500 hover:text-white"
              >
                {t("cookies.accept")}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Toggle = ({ checked, disabled = false, onChange }) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    disabled={disabled}
    onClick={onChange}
    className={`relative h-6 w-11 shrink-0 rounded-full p-0.5 transition-colors ${
      checked ? "bg-indigo-500" : "bg-foreground/15"
    } ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
  >
    <span
      className={`block h-5 w-5 rounded-full bg-white shadow transition-transform duration-200 ${
        checked ? "translate-x-5" : "translate-x-0"
      }`}
    />
  </button>
);

export default CookieBanner;
