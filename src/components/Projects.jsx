import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getLocalizedProjects } from "../data/projectsData";
import { useTranslation } from "../i18n";

const Projects = () => {
  const { t, lang } = useTranslation();
  const featuredProjects = getLocalizedProjects(lang).slice(0, 3);

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
        gsap.set(".project-card", {
          clearProps: "all",
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
        className="overflow-x-hidden relative z-10 -mt-24 pt-24"
      >
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-background/70 to-background" />
        <div className="md:h-screen md:flex md:items-center py-20 md:py-0 relative z-10">
          <div className="container mx-auto px-6 md:px-0 md:w-full">
            {/* Nadpis sekce */}

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
                  <Link
                    to={
                      lang === "en"
                        ? `/en/archive/project/${project.slug}`
                        : `/archiv/projekt/${project.slug}`
                    }
                    className="group cursor-pointer block"
                  >
                    {/* Obrázek s overlayem */}
                    <div className="relative overflow-hidden rounded-3xl aspect-video md:aspect-[16/9] mb-6 border border-foreground/10 bg-surface">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700"
                      />

                      <div className="absolute top-6 right-6 w-12 h-12 bg-foreground rounded-full flex items-center justify-center text-background opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-[opacity,transform] duration-300 z-20">
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
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- TLAČÍTKO DO ARCHIVU --- */}
      <div className="w-full bg-background py-24 flex justify-center items-center relative z-10 ">
        <Link
          to={lang === "en" ? "/en/archive" : "/archiv"}
          className="group relative inline-flex items-center gap-4 px-8 py-4 bg-transparent border border-foreground/20 rounded-full hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-[border-color,background-color] duration-300"
        >
          <span className="text-xl font-medium text-foreground group-hover:text-indigo-400 dark:group-hover:text-indigo-300 transition-colors">
            {t("projects.viewArchive")}
          </span>

          <div className="w-10 h-10 bg-foreground/5 rounded-full flex items-center justify-center text-foreground group-hover:bg-indigo-500 group-hover:text-white transition-[background-color,color,transform] duration-300 group-hover:translate-x-2">
            <ArrowRight size={20} />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Projects;
