import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "../i18n";

const Process = () => {
  const containerRef = useRef(null);
  const gridRef = useRef(null);
  const { t } = useTranslation();

  const steps = t("process.steps");
  const [titleTop, titleBottom] = t("process.title");

  useGSAP(
    () => {
      if (window.innerWidth < 768) {
        gsap.set(".process-step", { clearProps: "all" });
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
      id="Proces"
      className="py-24 md:py-40 bg-background relative z-10 overflow-hidden"
      ref={containerRef}
    >
      <div className="absolute top-24 right-[12%] w-56 h-56 md:w-72 md:h-72 bg-indigo-600/25 blur-[18px] md:blur-[90px] rounded-full pointer-events-none -z-10 opacity-40 md:opacity-55" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-4">
            {t("process.eyebrow")}
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            {titleTop}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-300 dark:from-indigo-400 dark:to-white">
              {titleBottom}
            </span>
          </h3>
          <p className="mt-6 text-base md:text-lg text-muted leading-relaxed">
            {t("process.lead")}
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {steps.map((step) => (
            <div
              key={step.num}
              className="process-step group relative p-8 rounded-3xl border border-foreground/10 bg-surface/60 backdrop-blur-0 md:backdrop-blur-sm hover:bg-foreground/5 hover:border-indigo-500/50 transition-[background-color,border-color] duration-300"
            >
              <span className="block font-mono text-5xl font-bold text-foreground/10 group-hover:text-indigo-500/40 transition-colors duration-300 mb-6">
                {step.num}
              </span>

              <h4 className="text-xl font-bold text-foreground mb-3">
                {step.title}
              </h4>

              <p className="text-sm text-muted leading-relaxed group-hover:text-foreground/80 transition-colors">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
