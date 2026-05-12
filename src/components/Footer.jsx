import React, { useEffect, useState } from "react";
import {
  Linkedin,
  Instagram,
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  X,
} from "lucide-react";
import logoWhite from "../assets/nav_logo.png";
import { scrollToSection } from "../utils/scrollToSection";
import { reopenBanner } from "../utils/consent";
import { useTranslation } from "../i18n";

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useTranslation();

  const openModal = () => setModalOpen(true);

  useEffect(() => {
    const handler = () => openModal();
    window.addEventListener("stch:open-gdpr", handler);
    return () => window.removeEventListener("stch:open-gdpr", handler);
  }, []);

  const sections = t("footer.modal.sections");

  return (
    <footer className="relative overflow-hidden border-t border-foreground/10 bg-background pt-24 pb-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-40 w-[24rem] md:h-56 md:w-[42rem] -translate-x-1/2 bg-indigo-500/10 blur-[18px] md:blur-[120px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="rounded-[32px] border border-foreground/10 bg-foreground/[0.03] px-6 py-10 backdrop-blur-0 md:backdrop-blur-sm md:px-10 md:py-12">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl space-y-6">
                <a href="#hero" className="block w-fit">
                  <img
                    src={logoWhite}
                    alt="STCH Studio Logo"
                    loading="lazy"
                    decoding="async"
                    className="h-10 w-auto object-contain opacity-95 dark:invert-0 invert"
                  />
                </a>

                <div className="space-y-4">
                  <p className="text-[0.7rem] uppercase tracking-[0.32em] text-indigo-500 dark:text-indigo-300/80">
                    {t("footer.brand")}
                  </p>
                  <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
                    {t("footer.headline")}
                  </h2>
                  <p className="max-w-xl text-sm leading-relaxed text-muted md:text-base">
                    {t("footer.description")}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5 lg:items-end">
                <a
                  href="#Kontakt"
                  className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-[background-color,color] duration-300 hover:bg-indigo-500 hover:text-white"
                >
                  {t("footer.cta")}
                </a>

                <div className="flex gap-3">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/radek-stach/"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 text-foreground transition-[background-color,color] duration-300 hover:bg-foreground hover:text-background"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/stchstudio.cz/"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 text-foreground transition-[background-color,color] duration-300 hover:bg-foreground hover:text-background"
                  >
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <a
                href="mailto:info@stchstudio.cz"
                className="group rounded-2xl border border-foreground/10 bg-foreground/[0.02] px-5 py-4 transition-colors hover:bg-foreground/[0.05]"
              >
                <div className="mb-2 flex items-center gap-3 text-foreground">
                  <Mail size={18} className="text-indigo-400" />
                  <span className="text-sm font-medium">{t("footer.emailLabel")}</span>
                </div>
                <p className="text-sm text-muted transition-colors group-hover:text-foreground/80">
                  info@stchstudio.cz
                </p>
              </a>

              <a
                href="tel:+420702002964"
                className="group rounded-2xl border border-foreground/10 bg-foreground/[0.02] px-5 py-4 transition-colors hover:bg-foreground/[0.05]"
              >
                <div className="mb-2 flex items-center gap-3 text-foreground">
                  <Phone size={18} className="text-indigo-400" />
                  <span className="text-sm font-medium">{t("footer.phoneLabel")}</span>
                </div>
                <p className="text-sm text-muted transition-colors group-hover:text-foreground/80">
                  +420 702 002 964
                </p>
              </a>

              <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] px-5 py-4">
                <div className="mb-2 flex items-center gap-3 text-foreground">
                  <MapPin size={18} className="text-indigo-400" />
                  <span className="text-sm font-medium">{t("footer.locationLabel")}</span>
                </div>
                <p className="text-sm text-muted">{t("footer.location")}</p>
              </div>
            </div>

            <div className="flex flex-col gap-5 border-t border-foreground/10 pt-6 md:flex-row md:items-center md:justify-between">
              <p className="text-center text-xs text-muted md:text-left">
                © {new Date().getFullYear()} STCH Studio. {t("footer.rights")}
              </p>

              <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
                <div className="flex gap-6 text-xs text-muted">
                  <button
                    onClick={openModal}
                    className="transition-colors hover:text-foreground"
                  >
                    {t("footer.privacy")}
                  </button>
                  <button
                    onClick={reopenBanner}
                    className="transition-colors hover:text-foreground"
                  >
                    {t("footer.cookies")}
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => scrollToSection("hero")}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 text-foreground transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:bg-indigo-500 hover:text-white"
                >
                  <ArrowUp size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 md:backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative flex max-h-[80vh] w-full max-w-2xl flex-col overflow-y-auto rounded-2xl border border-foreground/10 bg-surface shadow-2xl">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-foreground/10 bg-surface p-6">
              <h3 className="text-xl font-bold text-foreground">
                {t("footer.modal.title")}
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                aria-label={t("footer.modal.close")}
                className="rounded-full p-2 text-muted transition-[background-color,color] hover:bg-foreground/10 hover:text-foreground"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4 p-6 text-sm leading-relaxed text-muted">
              {sections.map((section, idx) => (
                <p key={idx}>
                  <strong className="text-foreground">{section.title}</strong>
                  <br /> {section.body}
                </p>
              ))}
            </div>

            <div className="border-t border-foreground/10 bg-surface p-6">
              <button
                onClick={() => setModalOpen(false)}
                className="w-full rounded-full bg-foreground py-3 font-bold text-background transition-[background-color,color] hover:bg-indigo-500 hover:text-white"
              >
                {t("footer.modal.understood")}
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
