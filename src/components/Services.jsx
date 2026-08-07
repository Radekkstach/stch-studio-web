import React, { useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "../i18n";
import { ServiceSceneInView } from "./ServiceScenes";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const { t } = useTranslation();

  const services = t("services.items");
  const titleLines = t("services.title");

  const xTo = useRef(null);
  const yTo = useRef(null);

  useGSAP(
    () => {
      xTo.current = gsap.quickTo(".parallax-target", "x", {
        duration: 0.8,
        ease: "power3",
      });
      yTo.current = gsap.quickTo(".parallax-target", "y", {
        duration: 0.8,
        ease: "power3",
      });

      gsap.fromTo(
        ".service-content-anim",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        },
      );
    },
    { scope: containerRef, dependencies: [activeIndex] },
  );

  const handleMouseMove = (e) => {
    if (window.innerWidth < 1024) return;

    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    // Jemnejsi nez driv — posouva se cely ramecek s ilustraci, ne jen
    // pruhledna ikona na pozadi, takze velky posun by rusil.
    const x = (clientX - innerWidth / 2) * -0.02;
    const y = (clientY - innerHeight / 2) * -0.02;

    if (xTo.current && yTo.current) {
      xTo.current(x);
      yTo.current(y);
    }
  };

  return (
    <section
      id="Sluzby"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="py-24 md:py-40 relative z-30 overflow-visible -mt-24 pt-24"
    >
      {/* Fades out the hero glow that spills past the hero's bottom edge. Bez
          tohohle rezalo neprusvitne pozadi sekce zari rovnou vodorovnou carou.
          Sedi pod vlastnimi glowy sekce (-z-20 vs -z-10), aby je neztmavovalo. */}
      <div className="absolute inset-x-0 top-0 h-[320px] md:h-[420px] pointer-events-none -z-20 bg-gradient-to-b from-transparent via-background/70 to-background" />

      {/* Offsets are px/vw, not percentages: `top-[-10%]` resolved against the
          section's own height, so the glows drifted with the content and hung
          much further into the neighbouring sections on mobile than on desktop. */}
      <div className="section-glow-indigo absolute -top-24 -left-[15vw] h-[92vw] w-[92vw] md:-top-28 md:-left-24 md:h-[900px] md:w-[900px] pointer-events-none -z-10" />
      <div className="section-glow-blue absolute -bottom-24 -right-[15vw] h-[80vw] w-[80vw] md:-bottom-28 md:-right-24 md:h-[760px] md:w-[760px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 md:mb-20">
          <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-4">
            {t("services.eyebrow")}
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-foreground">
            {titleLines[0]} <br className="hidden md:block" /> {titleLines[1]}
          </h3>
        </div>

        {/* Desktop: seznam vlevo, ilustrace + popis vpravo. */}
        <div className="hidden lg:grid grid-cols-2 gap-24 items-start">
          <div className="flex flex-col gap-4">
            {services.map((service, index) => (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                aria-pressed={activeIndex === index}
                className={`
                    group flex w-full items-center justify-between rounded-2xl border p-6 text-left transition-[background-color,border-color,opacity,transform] duration-500
                    ${
                      activeIndex === index
                        ? "bg-foreground/5 border-foreground/10 translate-x-4"
                        : "bg-transparent border-transparent opacity-50 hover:opacity-100"
                    }
                `}
              >
                <span className="flex items-center gap-6">
                  <span
                    className={`font-mono text-xl transition-colors duration-300 ${activeIndex === index ? "text-indigo-400" : "text-muted/70"}`}
                  >
                    /{service.id}
                  </span>
                  <span
                    className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${activeIndex === index ? "text-foreground" : "text-muted"}`}
                  >
                    {service.title}
                  </span>
                </span>
                <ArrowRight
                  className={`shrink-0 transition-[opacity,transform,color] duration-300 ${activeIndex === index ? "opacity-100 translate-x-0 text-indigo-400" : "opacity-0 -translate-x-4"}`}
                />
              </button>
            ))}
          </div>

          <div className="service-content-anim">
            <div className="parallax-target relative mb-10 overflow-hidden rounded-3xl border border-foreground/10 bg-glass p-8 shadow-[0_20px_60px_-30px_rgba(99,102,241,0.55)]">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/[0.07] via-transparent to-transparent" />
              <ServiceSceneInView index={activeIndex} />
            </div>

            <h4 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
              {services[activeIndex].title}
            </h4>
            <p className="text-lg text-muted leading-relaxed">
              {services[activeIndex].description}
            </p>
            <div className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500" />
          </div>
        </div>

        {/* Mobil: zadne prepinani, kazda sluzba ma vlastni kartu i ilustraci. */}
        <div className="flex flex-col gap-6 lg:hidden">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="overflow-hidden rounded-3xl border border-foreground/10 bg-glass"
            >
              <div className="border-b border-foreground/10 bg-foreground/[0.02] p-5">
                <ServiceSceneInView index={index} />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-4">
                  <span className="font-mono text-base text-indigo-400">
                    /{service.id}
                  </span>
                  <h4 className="text-2xl font-bold text-foreground">
                    {service.title}
                  </h4>
                </div>
                <p className="text-base text-muted leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
