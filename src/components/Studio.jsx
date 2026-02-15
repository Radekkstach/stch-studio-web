import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, Layout, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    icon: Layout,
    title: "Design & Estetika",
    desc: "Nevytváříme jen weby, tvoříme digitální architekturu. Každý pixel má svůj účel. Minimalismus, který není prázdný, ale funkční.",
  },
  {
    icon: Zap,
    title: "Technologie & Rychlost",
    desc: "Vteřiny rozhodují. Používáme Next.js a React pro okamžité načítání. Žádné staré šablony, jen čistý, moderní kód.",
  },
  {
    icon: TrendingUp,
    title: "Byznys & Růst",
    desc: "Krása bez výsledků je zbytečná. Zaměřujeme se na konverze, uživatelskou cestu (UX) a návratnost vaší investice.",
  },
];

const Studio = () => {
  const containerRef = useRef(null);
  const gridRef = useRef(null);

  useGSAP(
    () => {
      const cards = gridRef.current.children;

      // JEDNODUCHÁ, DECENTNÍ ANIMACE
      gsap.fromTo(
        cards,
        {
          y: 30, // Jen malý posun
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1, // Jemné zpoždění
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            // Play once = animace se přehraje jednou a zůstane (nebliká při scrollu nahoru/dolu)
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
      // PŘIDÁNO: overflow-hidden (zajistí, že glow effect nerozšíří stránku na mobilu)
      className="py-24 md:py-40 bg-background relative z-10 overflow-hidden"
      ref={containerRef}
    >
      {/* Záře v pozadí */}
      <div className="absolute top-40 left-[15%] w-72 h-72 bg-indigo-600/30 blur-[90px] rounded-full pointer-events-none -z-10 opacity-60 mix-blend-screen" />
      <div className="absolute bottom-32 right-[15%] w-64 h-64 bg-blue-500/50 blur-[90px] rounded-full pointer-events-none -z-10 opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Text */}
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-4">
            Studio Philosophy
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Spojujeme{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-white">
              umění designu
            </span>{" "}
            s logikou programování.
          </h3>
        </div>

        {/* Grid karet */}
        {/* grid-cols-1 zajistí, že na mobilu budou pod sebou */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {pillars.map((item, index) => (
            <div
              key={index}
              className="pillar-item group p-8 rounded-3xl border border-white/10 bg-background/80 backdrop-blur-sm hover:bg-white/5 hover:border-indigo-500/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:bg-indigo-500 group-hover:scale-110 transition-all duration-300">
                <item.icon
                  size={28}
                  className="text-indigo-400 group-hover:text-white transition-colors"
                />
              </div>

              <h4 className="text-xl font-bold text-white mb-4">
                {item.title}
              </h4>

              <p className="text-sm text-muted leading-relaxed group-hover:text-white/80 transition-colors">
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
