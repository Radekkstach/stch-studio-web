import React, { useState, useRef } from "react";
import { ArrowRight, Code, ShoppingCart, BarChart3 } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const services = [
  {
    id: "01",
    title: "Web Design & Vývoj",
    description:
      "Tvoříme digitální zážitky, které si návštěvníci zapamatují. Od wireframu po pixel-perfect kód. Specializujeme se na React a Next.js pro maximální rychlost.",
    icon: Code,
  },
  {
    id: "02",
    title: "E-commerce Řešení",
    description:
      "E-shopy postavené na psychologii prodeje. Nejde nám jen o košík, ale o celou cestu zákazníka. Optimalizujeme konverzní poměry a uživatelskou přívětivost.",
    icon: ShoppingCart,
  },
  {
    id: "03",
    title: "Digitální Optimalizace",
    description:
      "Maximální výkon, SEO a rychlost. Ladíme detaily, které konkurence přehlíží. Zajistíme, abyste byli na Googlu vidět a web se načítal bleskově.",
    icon: BarChart3,
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  // Refy pro optimalizovaný pohyb (quickTo)
  const xTo = useRef(null);
  const yTo = useRef(null);

  const { contextSafe } = useGSAP({ scope: containerRef });

  useGSAP(
    () => {
      // 1. Nastavení animace myši (Parallax) - inicializace
      xTo.current = gsap.quickTo(".parallax-target", "x", {
        duration: 0.8,
        ease: "power3",
      });
      yTo.current = gsap.quickTo(".parallax-target", "y", {
        duration: 0.8,
        ease: "power3",
      });

      // 2. Animace Textu (Blur efekt) při změně activeIndex
      gsap.fromTo(
        ".service-content-anim",
        { y: 20, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.6,
          ease: "power2.out",
        },
      );
    },
    { scope: containerRef, dependencies: [activeIndex] },
  );

  // Funkce pro pohyb myši
  const handleMouseMove = contextSafe((e) => {
    // Mobil check - pokud je okno menší než 1024px, nic neděláme
    if (window.innerWidth < 1024) return;

    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    // Výpočet pohybu
    const x = (clientX - innerWidth / 2) * -0.05;
    const y = (clientY - innerHeight / 2) * -0.05;

    // Poslání hodnot do quickTo (pokud existuje)
    if (xTo.current && yTo.current) {
      xTo.current(x);
      yTo.current(y);
    }
  });

  return (
    <section
      id="Služby"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="py-24 md:py-40 bg-background relative z-30 overflow-visible"
    >
      {/* --- GLOW EFEKTY --- */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-600/50 blur-[120px] rounded-full pointer-events-none -z-10 mix-blend-screen opacity-60" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/30 blur-[100px] rounded-full pointer-events-none -z-10 opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-4">
            Naše Expertíza
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">
            Komplexní přístup <br className="hidden md:block" /> k digitálu.
          </h3>
        </div>

        {/* Na mobilu (grid-cols-1) se to seřadí pod sebe, na desktopu (lg:grid-cols-2) vedle sebe */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* --- LEVÁ STRANA (SEZNAM) --- */}
          {/* Pořadí: Na mobilu chceme seznam první, to je default. */}
          <div className="flex flex-col gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                // DŮLEŽITÉ PRO MOBIL: Přidán onClick
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                className={`
                    group flex items-center justify-between p-6 rounded-2xl cursor-pointer transition-all duration-500 border
                    ${
                      activeIndex === index
                        ? "bg-white/5 border-white/10 translate-x-4"
                        : "bg-transparent border-transparent opacity-50 hover:opacity-100"
                    }
                `}
              >
                <div className="flex items-center gap-6">
                  <span
                    className={`font-mono text-xl transition-colors duration-300 ${activeIndex === index ? "text-indigo-400" : "text-gray-500"}`}
                  >
                    /{service.id}
                  </span>
                  <h4
                    className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${activeIndex === index ? "text-white" : "text-gray-400"}`}
                  >
                    {service.title}
                  </h4>
                </div>
                <ArrowRight
                  className={`transition-all duration-300 ${activeIndex === index ? "opacity-100 translate-x-0 text-indigo-400" : "opacity-0 -translate-x-4"}`}
                />
              </div>
            ))}
          </div>

          {/* --- PRAVÁ STRANA (OBSAH) --- */}
          <div className="relative h-[500px] w-full flex items-center justify-center">
            {/* PARALLAX KONTEJNER (IKONA V POZADÍ) */}
            <div className="parallax-target absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
              <div className="transition-all duration-700 transform scale-110">
                {/* OPRAVA VELIKOSTI IKONY PRO MOBIL: 
                   Místo size={450} používáme className s w-full/h-full a omezíme rodiče.
                   To zabrání, aby ikona "rozbila" šířku na malém mobilu.
                */}
                <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
                  {React.createElement(services[activeIndex].icon, {
                    className: "w-full h-full",
                  })}
                </div>
              </div>
            </div>

            {/* TEXTOVÝ OBSAH */}
            <div className="service-content-anim relative z-10 max-w-lg w-full">
              <div className="w-16 h-16 mb-8 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                {React.createElement(services[activeIndex].icon, { size: 32 })}
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
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
