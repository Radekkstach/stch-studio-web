import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDownRight, ChevronRight } from "lucide-react";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const container = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-title span", {
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

  // --- TOTO JE TA ZMĚNA (JavaScriptový scroll) ---
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Vynutíme plynulý scroll na daný element
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      ref={container}
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 bg-hero-gradient"
    >
      {/* Glow efekt */}
      <div className="hero-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] bg-indigo-500/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

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
            <span className="inline-block text-gradient py-1">
              Budoucnost webu
            </span>
          </div>
          <div className="overflow-hidden">
            <span className="inline-block py-1">začíná právě teď.</span>
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
            className="w-full sm:w-auto h-14 px-8 inline-flex items-center justify-center rounded-full bg-primary text-white font-medium text-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            Chci se odlišit <ChevronRight size={20} className="ml-2" />
          </a>

          {/* Tlačítko 2 - Projekty -> Odkaz na Projekty */}
          <a
            href="#Projekty"
            className="w-full sm:w-auto h-14 px-8 inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent text-white font-medium text-lg hover:bg-white/5 transition-colors cursor-pointer"
          >
            <ArrowDownRight size={18} className="mr-2" /> Prozkoumat projekty
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-fade absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 pointer-events-none">
        <p className="text-[10px] uppercase tracking-[0.2em]">Scrolluj</p>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
