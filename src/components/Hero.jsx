import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDownRight, ChevronRight } from "lucide-react";
import { scrollToSection } from "../utils/scrollToSection";

gsap.registerPlugin(useGSAP);

const rotatingPhrases = ["webu", "inovací", "vaší značky", "internetu"];

const longestPhrase = rotatingPhrases.reduce((longest, current) =>
  current.length > longest.length ? current : longest,
);

const Hero = () => {
  const container = useRef();
  const [activePhraseIndex, setActivePhraseIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActivePhraseIndex((current) => (current + 1) % rotatingPhrases.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-line", {
        y: 120,
        skewY: 7,
        stagger: 0.15,
        duration: 1.2,
      })
        .from(
          ".hero-fade",
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
            stagger: 0.1,
          },
          "-=0.6",
        )
        .from(
          ".hero-glow",
          {
            opacity: 0,
            scale: 0.8,
            duration: 2,
          },
          "-=1",
        );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-visible pt-24 pb-20 bg-hero-gradient"
    >
      {/* Glow efekt */}
      <div className="hero-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] bg-indigo-500/20 rounded-full blur-[56px] md:blur-[120px] pointer-events-none" />
      <div className="absolute left-1/2 bottom-[-140px] -translate-x-1/2 w-[90vw] h-64 md:w-[760px] md:h-80 bg-indigo-500/12 blur-[72px] md:blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        {/* Badge */}
        <div className="hero-fade inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs md:text-sm font-medium text-indigo-300 mb-6 md:mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Premium Web Development
        </div>

        {/* Nadpis */}
        <h1 className="hero-title text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-6 md:mb-8">
          <div className="overflow-hidden">
            <span className="hero-line hero-rotating-line" aria-live="polite">
              <span className="hero-rotating-line-sizer" aria-hidden="true">
                <span>Budoucnost </span>
                <span>{longestPhrase}</span>
              </span>
              <span className="hero-rotating-line-content">
                <span className="hero-static-slot" aria-hidden="true">
                  <span className="hero-static-sizer">Budoucnost</span>
                  <span
                    key={`static-${activePhraseIndex}`}
                    className="hero-static-word text-white"
                  >
                    Budoucnost
                  </span>
                </span>
                <span
                  key={rotatingPhrases[activePhraseIndex]}
                  className="animated-gradient-text hero-rotating-word"
                >
                  {rotatingPhrases[activePhraseIndex]}
                </span>
              </span>
            </span>
          </div>
          <div className="overflow-hidden">
            <span className="hero-line inline-block py-1">
              začíná právě teď<span className="animated-gradient-text2">.</span>
            </span>
          </div>
        </h1>

        {/* Popis */}
        <p className="hero-fade text-base md:text-xl text-muted max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-2">
          Vystupte z davu šedých šablon. Stavíme interaktivní zážitky, které si
          vaši zákazníci zapamatují na první pohled.
        </p>

        {/* --- TLAČÍTKA PŘEDĚLANÁ NA JAVASCRIPT SCROLL --- */}
        <div className="hero-fade flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0">
          {/* Tlačítko 1 - Chci se odlišit -> Odkaz na Kontakt */}
          <a
            href="#Kontakt"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("Kontakt");
            }}
            className="w-full sm:w-auto h-14 px-8 inline-flex items-center justify-center rounded-full bg-primary text-white font-medium text-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            Chci se odlišit <ChevronRight size={20} className="ml-2" />
          </a>

          {/* Tlačítko 2 - Projekty -> Odkaz na Projekty */}
          <a
            href="#Projekty"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("Projekty");
            }}
            className="w-full sm:w-auto h-14 px-8 inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent text-white font-medium text-lg hover:bg-white/5 transition-colors cursor-pointer"
          >
            <ArrowDownRight size={18} className="mr-2" /> Prozkoumat projekty
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
    </section>
  );
};

export default Hero;
