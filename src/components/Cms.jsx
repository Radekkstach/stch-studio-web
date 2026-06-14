import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowUpRight, Lock } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { scrollToSection } from "../utils/scrollToSection";
import shotPrehled from "../assets/cms/prehled.jpg";
import { useTranslation } from "../i18n";

const Cms = () => {
  const containerRef = useRef(null);
  const { t, lang } = useTranslation();

  const points = t("cms.points");
  const [titleTop, titleBottom] = t("cms.title");
  const mystchPath = lang === "en" ? "/en/mystch" : "/mystch";

  useGSAP(
    () => {
      if (window.innerWidth < 768) {
        gsap.set(".cms-anim", { clearProps: "all" });
        return;
      }

      gsap.from(".cms-anim", {
        y: 28,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      id="Administrace"
      className="py-24 md:py-40 bg-background relative z-10 overflow-hidden"
      ref={containerRef}
    >
      <div className="absolute bottom-10 right-[10%] w-56 h-56 md:w-72 md:h-72 bg-indigo-600/20 blur-[18px] md:blur-[90px] rounded-full pointer-events-none -z-10 opacity-35 md:opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text */}
          <div>
            <h2 className="cms-anim text-sm font-mono text-indigo-400 uppercase tracking-widest mb-4">
              {t("cms.eyebrow")}
            </h2>
            <h3 className="cms-anim text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-tight">
              {titleTop}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-300 dark:from-indigo-400 dark:to-white">
                {titleBottom}
              </span>
            </h3>
            <p className="cms-anim mt-6 text-base md:text-lg text-muted leading-relaxed max-w-xl">
              {t("cms.lead")}
            </p>

            <div className="mt-10 space-y-6">
              {points.map((point) => (
                <div key={point.title} className="cms-anim flex gap-4">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-400">
                    <Check size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {point.title}
                    </p>
                    <p className="text-sm text-muted leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="cms-anim mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href="#Kontakt"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("Kontakt");
                }}
                className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-3.5 text-sm font-semibold text-background transition-[background-color,color,transform] duration-300 hover:scale-[1.03] hover:bg-indigo-500 hover:text-white"
              >
                {t("cms.cta")}
              </a>
              <Link
                to={mystchPath}
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 transition-colors duration-300 hover:text-indigo-400"
              >
                {t("cms.more")}
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>

          {/* Teaser mockup → links to the dedicated mySTCH page */}
          <Link to={mystchPath} className="cms-anim group block">
            <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-surface shadow-2xl shadow-black/30 transition-[border-color,transform] duration-300 group-hover:-translate-y-1 group-hover:border-indigo-500/40">
              <div className="relative flex items-center border-b border-foreground/10 bg-foreground/[0.04] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-green-400/80" />
                </div>
                <div className="absolute left-1/2 hidden -translate-x-1/2 sm:block">
                  <div className="flex items-center gap-2 rounded-md bg-background/60 px-3 py-1 text-xs text-muted">
                    <Lock size={11} />
                    vasefirma.cz/cms
                  </div>
                </div>
              </div>
              <div className="relative aspect-[16/11] overflow-hidden bg-background">
                <img
                  src={shotPrehled}
                  alt={t("cms.previewLabel")}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-left-top"
                />
                <div className="pointer-events-none absolute inset-0 flex items-end justify-end bg-gradient-to-t from-background/70 via-transparent to-transparent p-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground/90 px-4 py-2 text-xs font-semibold text-background opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {t("cms.more")}
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cms;
