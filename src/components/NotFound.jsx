import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "../i18n";
import logoMark from "../assets/nav_logo.png";

const NotFound = () => {
  const { t, lang } = useTranslation();

  // Vercel na kazdou URL vrati index.html se stavem 200, takze vyhledavac by
  // jinak neexistujici adresu zaindexoval jako normalni stranku.
  useEffect(() => {
    window.scrollTo(0, 0);
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);
    return () => meta.remove();
  }, []);

  return (
    <main className="hero-section relative flex flex-col items-center justify-center overflow-hidden bg-hero-gradient px-6 pt-28 pb-16 text-foreground">
      <div className="hero-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105vw] h-[105vw] md:w-[1000px] md:h-[1000px] rounded-full pointer-events-none" />

      {/* Stejny vodoznak jako v hero — logo studia za obsahem. */}
      <div
        aria-hidden="true"
        className="hero-watermark pointer-events-none absolute left-1/2 top-1/2 w-[128vw] max-w-[1150px] aspect-[924/427]"
        style={{
          WebkitMaskImage: `url(${logoMark})`,
          maskImage: `url(${logoMark})`,
        }}
      />

      <div className="relative z-10 flex max-w-xl flex-col items-center text-center">
        <span
          role="img"
          aria-label="STCH Studio"
          style={{ "--logo-mask": `url(${logoMark})` }}
          className="animated-gradient-logo mb-10 block h-12 aspect-[924/427] md:h-14"
        />

        <p className="mb-4 text-[0.7rem] uppercase tracking-[0.32em] text-indigo-500 dark:text-indigo-300/80">
          {t("notFound.eyebrow")}
        </p>
        <h1 className="mb-5 text-4xl font-bold leading-[1.1] tracking-tighter md:text-6xl">
          {t("notFound.title")}
          <span className="animated-gradient-text2">.</span>
        </h1>
        <p className="mb-10 text-base leading-relaxed text-muted md:text-lg">
          {t("notFound.description")}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            to={lang === "en" ? "/en" : "/"}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-[background-color,color] duration-300 hover:bg-indigo-500 hover:text-white"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            {t("notFound.home")}
          </Link>
          <Link
            to={lang === "en" ? "/en/archive" : "/archiv"}
            className="inline-flex items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 px-6 py-3.5 text-sm font-medium text-foreground transition-colors duration-300 hover:bg-foreground/10"
          >
            {t("notFound.projects")}
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
