import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Zap, Smartphone, Globe, Layout, Search, Rocket } from "lucide-react";
import Card from "./Card";

// Registrace pluginu
gsap.registerPlugin(ScrollTrigger);

const featuresData = [
  {
    title: "Design na míru",
    description:
      "Žádné šablony. Tvoříme unikátní vizuální identitu, která vaši značku odliší od konkurence.",
    icon: Layout,
    className: "md:col-span-2", // Široká karta - Design je priorita
  },
  {
    title: "100% Responzivní",
    description:
      "Váš web bude vypadat skvěle na telefonu, tabletu i velkém monitoru.",
    icon: Smartphone,
    className: "md:col-span-1", // Standardní karta
  },
  {
    title: "SEO & Rychlost",
    description:
      "Optimalizace pro Google a bleskové načítání, aby vám neutíkali zákazníci.",
    icon: Zap,
    className: "md:col-span-1",
  },
  {
    title: "Moderní technologie",
    description:
      "Stavíme na Reactu a Next.js. Žádný zasekaný WordPress, ale čistý a rychlý kód.",
    icon: Rocket, // Změna ikony na raketu
    className: "md:col-span-2", // Široká karta
  },
  {
    title: "Komplexní správa",
    description:
      "Od registrace domény přes hosting až po pravidelnou údržbu. O nic se nestaráte.",
    icon: Globe,
    className: "md:col-span-3", // Plná šířka
  },
];

const Features = () => {
  const container = useRef();

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".bento-card");

      gsap.from(cards, {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });
    },
    { scope: container },
  );

  return (
    <section
      id="Features"
      className="py-24 relative overflow-hidden"
      ref={container}
    >
      {/* Pozadí */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-indigo-950/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Hlavička sekce - Upraveno pro STCH studio */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Weby, které <span className="text-gradient">fungují</span>
          </h2>
          <p className="text-muted text-lg">
            V STCH studiu spojujeme precizní design s nejnovějšími
            technologiemi. Tvoříme digitální produkty, které pomáhají vašemu
            byznysu růst.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          {featuresData.map((feature, index) => (
            <Card
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              className={`bento-card ${feature.className} flex flex-col justify-between`}
            />
          ))}

          {/* Spodní Banner / CTA */}
          <div className="bento-card md:col-span-3 glass-panel p-8 rounded-3xl flex items-center justify-center relative overflow-hidden group">
            {/* Animované pozadí po hoveru */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="text-center relative z-10">
              <p className="text-sm font-mono text-indigo-300 mb-2 tracking-widest uppercase">
                Ready for launch
              </p>
              <div className="text-4xl md:text-6xl font-bold tracking-tight text-white/30 group-hover:text-white transition-colors duration-500">
                STCH STUDIO
                {/* Tady si můžeš vrátit: ADAM SMRDI, pokud chceš :D */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
