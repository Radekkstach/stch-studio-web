import React, { useState, useRef } from "react";
import {
  ArrowRight,
  Code,
  ShoppingCart,
  Workflow,
  BarChart3,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "../i18n";

const SERVICE_ICONS = [Code, ShoppingCart, Workflow, BarChart3];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const { t } = useTranslation();

  const items = t("services.items");
  const services = items.map((item, idx) => ({
    ...item,
    icon: SERVICE_ICONS[idx] || Code,
  }));

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

    const x = (clientX - innerWidth / 2) * -0.05;
    const y = (clientY - innerHeight / 2) * -0.05;

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
      className="py-24 md:py-40 bg-background relative z-30 overflow-visible"
    >
      {/* Offsets are px/vw, not percentages: `top-[-10%]` resolved against the
          section's own height, so the glows drifted with the content and hung
          much further into the neighbouring sections on mobile than on desktop. */}
      <div className="section-glow-indigo absolute -top-24 -left-[15vw] h-[92vw] w-[92vw] md:-top-28 md:-left-24 md:h-[900px] md:w-[900px] pointer-events-none -z-10" />
      <div className="section-glow-blue absolute -bottom-24 -right-[15vw] h-[80vw] w-[80vw] md:-bottom-28 md:-right-24 md:h-[760px] md:w-[760px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-4">
            {t("services.eyebrow")}
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-foreground">
            {titleLines[0]} <br className="hidden md:block" /> {titleLines[1]}
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="flex flex-col gap-6">
            {services.map((service, index) => (
              <div
                key={service.id}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                className={`
                    group flex items-center justify-between p-6 rounded-2xl cursor-pointer transition-[background-color,border-color,opacity,transform] duration-500 border
                    ${
                      activeIndex === index
                        ? "bg-foreground/5 border-foreground/10 translate-x-4"
                        : "bg-transparent border-transparent opacity-50 hover:opacity-100"
                    }
                `}
              >
                <div className="flex items-center gap-6">
                  <span
                    className={`font-mono text-xl transition-colors duration-300 ${activeIndex === index ? "text-indigo-400" : "text-muted/70"}`}
                  >
                    /{service.id}
                  </span>
                  <h4
                    className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${activeIndex === index ? "text-foreground" : "text-muted"}`}
                  >
                    {service.title}
                  </h4>
                </div>
                <ArrowRight
                  className={`transition-[opacity,transform,color] duration-300 ${activeIndex === index ? "opacity-100 translate-x-0 text-indigo-400" : "opacity-0 -translate-x-4"}`}
                />
              </div>
            ))}
          </div>

          <div className="relative h-[500px] w-full flex items-center justify-center">
            <div className="parallax-target absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
              <div className="scale-110">
                <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
                  {React.createElement(services[activeIndex].icon, {
                    className: "w-full h-full",
                  })}
                </div>
              </div>
            </div>

            <div className="service-content-anim relative z-10 max-w-lg w-full">
              <div className="w-16 h-16 mb-8 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                {React.createElement(services[activeIndex].icon, { size: 32 })}
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {services[activeIndex].title}
              </h3>

              <p className="text-xl text-muted leading-relaxed">
                {services[activeIndex].description}
              </p>

              <div className="mt-8 h-1 w-24 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
