import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: "01",
    title: "Strategie",
    desc: "Analýza konkurence a definice cílů. Pochopíme váš byznys.",
  },
  {
    id: "02",
    title: "Design",
    desc: "Wireframy, prototypy a UI design. Navrhneme vizuál, který nejen vypadá skvěle, ale i prodává.",
  },
  {
    id: "03",
    title: "Vývoj",
    desc: "Kódování v React/Next.js. Pixel-perfect a blesková rychlost.",
  },
  {
    id: "04",
    title: "Spuštění",
    desc: "Testování, SEO check a nasazení na produkční server. Jedeme.",
  },
];

const Process = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray(".process-item");

      // Animace: Postupné zobrazení kroků (Stagger effect)
      gsap.from(items, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%", // Začne, když je sekce v 70% obrazovky
        },
        y: 50, // Přijede zespodu
        opacity: 0, // Z neviditelna
        duration: 0.8,
        stagger: 0.2, // Každý další krok o 0.2s později
        ease: "power2.out",
      });

      // Animace linky (čára se vykreslí zleva doprava)
      gsap.from(".process-line", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        scaleX: 0, // Začne s nulovou šířkou
        transformOrigin: "left center", // Roztahuje se zleva
        duration: 1.5,
        ease: "power2.inOut",
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      id="Proces"
      className="py-24 md:py-32 bg-background relative overflow-hidden"
      ref={containerRef}
    >
      <div className="container mx-auto px-6">
        {/* Nadpis sekce */}
        <div className="mb-24 text-center">
          <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-4">
            Jak pracujeme
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">
            Od nápadu k realizaci.
          </h3>
        </div>

        {/* --- TIMELINE KONTEJNER --- */}
        <div className="relative">
          {/* Spojovací čára (jen na desktopu) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent process-line -translate-y-1/2 z-0" />

          {/* Grid 4 kroky */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="process-item group relative h-full">
                {" "}
                {/* h-full tady */}
                {/* Pozadí karty */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 -z-10 blur-xl" />
                {/* UPRAVENO: Přidáno 'h-full' a 'justify-between' */}
                <div className="h-full flex flex-col items-center text-center p-6 rounded-2xl border border-white/5 bg-background/50 backdrop-blur-sm group-hover:border-indigo-500/30 transition-all duration-300 justify-between">
                  {/* Vrchní část: Číslo a Nadpis */}
                  <div className="flex flex-col items-center">
                    <span className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent mb-4 group-hover:from-indigo-500/20 transition-all duration-500 select-none">
                      {step.id}
                    </span>

                    <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                      {step.title}
                    </h4>

                    {/* Popis - Zde jsem upravil text Designu, viz níže v poli steps */}
                    <p className="text-muted text-sm leading-relaxed max-w-[200px]">
                      {step.desc}
                    </p>
                  </div>

                  {/* Spodní část: Puntík (bude vždy dole díky justify-between) */}
                  <div className="w-3 h-3 rounded-full bg-indigo-500 mt-6 opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
