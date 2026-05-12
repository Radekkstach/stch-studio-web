import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Zap, Layout, TrendingUp } from "lucide-react";
import { useTranslation } from "../i18n";

const PILLAR_ICONS = [Layout, Zap, TrendingUp];

const Studio = () => {
  const containerRef = useRef(null);
  const gridRef = useRef(null);
  const { t } = useTranslation();

  const pillars = t("studio.pillars").map((p, idx) => ({
    ...p,
    icon: PILLAR_ICONS[idx] || Layout,
  }));

  useGSAP(
    () => {
      if (window.innerWidth < 768) {
        gsap.set(".pillar-item", { clearProps: "all" });
        return;
      }

      const cards = gridRef.current.children;

      gsap.fromTo(
        cards,
        {
          y: 30,
          opacity: 0,
        },
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
      id="Studio"
      className="py-24 md:py-40 bg-background relative z-10 overflow-hidden"
      ref={containerRef}
    >
      <div className="absolute top-40 left-[15%] w-56 h-56 md:w-72 md:h-72 bg-indigo-600/30 blur-[18px] md:blur-[90px] rounded-full pointer-events-none -z-10 opacity-45 md:opacity-60" />
      <div className="absolute bottom-32 right-[15%] w-48 h-48 md:w-64 md:h-64 bg-blue-500/50 blur-[18px] md:blur-[90px] rounded-full pointer-events-none -z-10 opacity-35 md:opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-4">
            {t("studio.eyebrow")}
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            {t("studio.titleStart")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-300 dark:from-indigo-400 dark:to-white">
              {t("studio.titleHighlight")}
            </span>{" "}
            {t("studio.titleEnd")}
          </h3>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {pillars.map((item, index) => (
            <div
              key={index}
              className="pillar-item group p-8 rounded-3xl border border-foreground/10 bg-surface/60 backdrop-blur-0 md:backdrop-blur-sm hover:bg-foreground/5 hover:border-indigo-500/50 transition-[background-color,border-color] duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:bg-indigo-500 group-hover:scale-110 transition-[background-color,transform] duration-300">
                <item.icon
                  size={28}
                  className="text-indigo-400 group-hover:text-white transition-colors"
                />
              </div>

              <h4 className="text-xl font-bold text-foreground mb-4">
                {item.title}
              </h4>

              <p className="text-sm text-muted leading-relaxed group-hover:text-foreground/80 transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Studio;
