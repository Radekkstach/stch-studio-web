import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { scrollToSection } from "../utils/scrollToSection";
import { findProjectBySlug } from "../data/projectsData";
import { useTranslation } from "../i18n";

const detailPath = (lang, slug) =>
  lang === "en" ? `/en/archive/project/${slug}` : `/archiv/projekt/${slug}`;

const Pricing = () => {
  const containerRef = useRef(null);
  const gridRef = useRef(null);
  const { t, lang } = useTranslation();

  const tiers = t("pricing.tiers");
  const [titleTop, titleBottom] = t("pricing.title");
  const exampleLabel = t("pricing.exampleLabel");
  const exampleSoon = t("pricing.exampleSoon");

  useGSAP(
    () => {
      if (window.innerWidth < 768) {
        gsap.set(".price-card", { clearProps: "all" });
        return;
      }

      gsap.fromTo(
        gridRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      id="Cenik"
      className="py-24 md:py-40 bg-background relative z-10 overflow-hidden"
      ref={containerRef}
    >
      <div className="absolute top-32 left-[12%] w-56 h-56 md:w-72 md:h-72 bg-indigo-600/20 blur-[18px] md:blur-[90px] rounded-full pointer-events-none -z-10 opacity-35 md:opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-4">
            {t("pricing.eyebrow")}
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-tight">
            {titleTop}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-300 dark:from-indigo-400 dark:to-white">
              {titleBottom}
            </span>
          </h3>
          <p className="mt-6 text-base md:text-lg text-muted leading-relaxed">
            {t("pricing.lead")}
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch"
        >
          {tiers.map((tier) => {
            const example = tier.exampleSlug
              ? findProjectBySlug(tier.exampleSlug, lang)
              : null;

            return (
              <div
                key={tier.name}
                className="price-card group flex flex-col p-8 rounded-3xl border border-foreground/10 bg-surface/60 backdrop-blur-0 md:backdrop-blur-sm hover:bg-foreground/5 hover:border-indigo-500/50 transition-[background-color,border-color] duration-300"
              >
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-indigo-400">
                  {tier.name}
                </p>

                <p className="mt-5 text-4xl md:text-[2.75rem] font-bold leading-none tracking-tight text-foreground">
                  {tier.price}
                </p>

                <p className="mt-5 text-sm text-muted leading-relaxed">
                  {tier.desc}
                </p>

                <div className="mt-7 pt-7 border-t border-foreground/10 space-y-3">
                  {tier.features.map((feature) => (
                    <p
                      key={feature}
                      className="flex gap-3 text-sm text-foreground/80"
                    >
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-400"
                        aria-hidden="true"
                      />
                      {feature}
                    </p>
                  ))}
                </div>

                <div className="mt-auto pt-7">
                  {example ? (
                    <Link
                      to={detailPath(lang, example.slug)}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 transition-colors duration-300 hover:text-indigo-400"
                    >
                      {exampleLabel}: {example.title}
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center text-sm text-muted/50">
                      {exampleSoon}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-center gap-7 text-center">
          <p className="max-w-2xl text-sm leading-relaxed text-muted/80">
            {t("pricing.note")}
          </p>
          <a
            href="#Kontakt"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("Kontakt");
            }}
            className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-3.5 text-sm font-semibold text-background transition-[background-color,color,transform] duration-300 hover:scale-[1.03] hover:bg-indigo-500 hover:text-white"
          >
            {t("pricing.cta")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
