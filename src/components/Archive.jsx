import React, { useEffect, useRef } from "react";
import { ArrowLeft, ExternalLink, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { getLocalizedProjects } from "../data/projectsData";
import { useTranslation } from "../i18n";

const Archive = () => {
  const container = useRef();
  const { t, lang } = useTranslation();
  const projects = getLocalizedProjects(lang);

  // Scroll nahoru při načtení stránky
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animace při načtení stránky
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".archive-header > *", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
      }).from(
        ".archive-card",
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.05,
        },
        "-=0.6", // Začít animaci karet dříve, hned po hlavičce
      );
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="min-h-screen bg-background text-foreground selection:bg-indigo-500/30 overflow-hidden relative"
    >
      {/* Decentní background glow pro atmosféru */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* --- HLAVIČKA --- */}
      <header className="archive-header container mx-auto px-6 pt-16 pb-12 md:py-24 relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-foreground/10">
        <div className="flex flex-col items-start gap-8">
          <Link
            to={lang === "en" ? "/en" : "/"}
            className="group inline-flex items-center gap-3 text-muted hover:text-foreground transition-colors duration-300"
          >
            <div className="w-10 h-10 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:border-indigo-500/50 transition-[background-color,border-color,transform] duration-300 group-hover:-translate-x-1">
              <ArrowLeft size={18} />
            </div>
            <span className="text-sm uppercase tracking-[0.1em] font-medium">
              {t("archive.back")}
            </span>
          </Link>

          <div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
              {t("archive.titleStart")} <span className="text-indigo-400">{t("archive.titleHighlight")}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-xl leading-relaxed">
              {t("archive.description")}
            </p>
          </div>
        </div>

        {/* Profesionální zobrazení celkového počtu prací */}
        <div className="hidden md:block text-right pb-2 archive-fade">
          <div className="text-4xl font-light text-indigo-300/50">
            {String(projects.length).padStart(2, "0")}
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted mt-2">
            {t("archive.totalLabel")}
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 md:py-24 relative z-10">
        {/* --- GRID PROJEKTŮ --- */}
        {/* Zachováváme 2 sloupce a asymetrický look pro moderní studio vibe */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 lg:gap-x-12 lg:gap-y-24">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              /* Sudé karty na desktopech posunuty dolů o md:mt-24 pro asymetrický look */
              className={`archive-card group block ${
                index % 2 !== 0 ? "md:mt-24" : ""
              }`}
            >
              {/* Image Container */}
              {/* ZMĚNA: Poměr stran změněn na aspect-video (16:9) */}
              <div className="relative aspect-video overflow-hidden rounded-2xl mb-8 bg-foreground/5 border border-foreground/10 group-hover:border-indigo-500/30 transition-colors duration-500">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Hover ikona se skleněným efektem */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-[opacity,transform] duration-300 z-20">
                  <ExternalLink size={24} />
                </div>
              </div>

              {/* Informace pod obrázkem */}
              <div className="px-2">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs text-indigo-400 font-mono uppercase tracking-[0.1em]">
                    {project.category}
                  </span>
                  {project.year && (
                    <span className="text-xs text-muted font-mono border border-foreground/10 px-2 py-1 rounded">
                      {project.year}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-3 flex items-center gap-3 group-hover:text-indigo-300 transition-colors duration-300">
                  {project.title}
                  <ArrowUpRight
                    size={24}
                    className="opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-[opacity,transform] duration-300 ease-out"
                  />
                </h3>

                <p className="text-muted md:text-lg leading-relaxed max-w-md">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Archive;
