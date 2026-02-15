import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const techs = [
  "React", "TailwindCSS", "GSAP", "Vite", "Node.js", "TypeScript", "Figma", "Next.js", "Three.js", "Supabase"
];

const TechStack = () => {
  
  // Zdvojíme pole, aby smyčka byla plynulá (bezešvá)
  const repeatedTechs = [...techs, ...techs, ...techs];

  useGSAP(() => {
    gsap.to(".marquee-track", {
      xPercent: -50, // Posune se o polovinu své délky
      ease: "none",
      duration: 20,  // Rychlost posunu (čím vyšší číslo, tím pomalejší)
      repeat: -1     // Nekonečné opakování
    });
  });

  return (
    <section className="py-10 border-y border-white/5 bg-black/20 overflow-hidden relative">
      {/* Stíny na krajích pro "fade out" efekt */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex gap-16 marquee-track w-fit">
        {repeatedTechs.map((tech, index) => (
          <div key={index} className="flex items-center gap-2 group cursor-default">
            {/* Tady by normálně byly SVG ikony, pro demo použijeme text s tečkou */}
            <span className="w-2 h-2 rounded-full bg-indigo-500/50 group-hover:bg-indigo-400 group-hover:shadow-[0_0_10px_rgba(99,102,241,0.8)] transition-all" />
            <span className="text-lg font-medium text-white/40 group-hover:text-white transition-colors uppercase tracking-wider">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;