import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link komponenty
import { projects } from "../data/projectsData"; // Import dat

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  // Vezmeme jen první 3 projekty
  const featuredProjects = projects.slice(0, 3);

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useGSAP(
    () => {
      let ctx = gsap.matchMedia();

      // Desktop: Horizontální scroll
      ctx.add("(min-width: 768px)", () => {
        const cards = gsap.utils.toArray(".project-card");

        gsap.to(cards, {
          xPercent: -100 * (cards.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / (cards.length - 1),
            // Dynamický výpočet délky scrollování podle šířky kontejneru
            end: () => "+=" + sectionRef.current.offsetWidth,
          },
        });
      });

      // Mobil: Fade-in animace zespodu
      ctx.add("(max-width: 767px)", () => {
        const cards = gsap.utils.toArray(".project-card");
        cards.forEach((card) => {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
          });
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <>
      <section
        id="Projekty"
        ref={sectionRef}
        className="bg-background overflow-hidden relative z-10"
      >
        <div className="md:h-screen md:flex md:items-center py-20 md:py-0">
          <div className="container mx-auto px-6 md:px-0 md:w-full">
            {/* Nadpis sekce */}
            <div className="md:absolute md:top-12 md:left-12 md:z-10 mb-12 md:mb-0 px-6 md:px-0">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                Vybraná práce.
              </h2>
            </div>

            {/* Slider karet */}
            <div
              ref={triggerRef}
              className="flex flex-col md:flex-row gap-12 md:gap-0 md:pl-[20vw]"
            >
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="project-card flex-shrink-0 w-full md:w-[60vw] md:px-8 flex flex-col justify-center"
                >
                  {/* Odkaz na konkrétní projekt (externí, např. na hotový web) */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group cursor-pointer block"
                  >
                    {/* Obrázek s overlayem */}
                    <div className="relative overflow-hidden rounded-3xl aspect-video md:aspect-[16/9] mb-6 border border-white/5 bg-surface">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-20">
                        <ArrowUpRight size={24} />
                      </div>
                    </div>

                    {/* Texty pod obrázkem */}
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-indigo-400 font-mono text-sm tracking-wider uppercase">
                          {project.category}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold mt-2 group-hover:text-indigo-300 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-muted text-sm max-w-[200px] text-right hidden md:block leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- TLAČÍTKO DO ARCHIVU --- */}
      <div className="w-full bg-background py-24 flex justify-center items-center relative z-10 ">
        <Link
          to="/archiv"
          className="group relative inline-flex items-center gap-4 px-8 py-4 bg-transparent border border-white/20 rounded-full hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300"
        >
          <span className="text-xl font-medium text-white group-hover:text-indigo-300 transition-colors">
            Zobrazit celý archiv
          </span>

          <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 group-hover:translate-x-2">
            <ArrowRight size={20} />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Projects;
