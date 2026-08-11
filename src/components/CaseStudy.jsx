import React, { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "../i18n";
import {
  findProjectBySlug,
  getAdjacentProject,
} from "../data/projectsData";

const archivePath = (lang) => (lang === "en" ? "/en/archive" : "/archiv");
const detailPath = (lang, slug) =>
  lang === "en" ? `/en/archive/project/${slug}` : `/archiv/projekt/${slug}`;

const NotFound = () => {
  const { t, lang } = useTranslation();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
          {t("caseStudy.notFound.title")}
        </h1>
        <p className="mb-10 max-w-md text-muted">
          {t("caseStudy.notFound.description")}
        </p>
        <Link
          to={archivePath(lang)}
          className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-indigo-500 hover:bg-indigo-500/10"
        >
          <ArrowLeft size={16} />
          {t("caseStudy.notFound.action")}
        </Link>
      </div>
    </div>
  );
};

const CaseStudy = () => {
  const { slug } = useParams();
  const { t, lang } = useTranslation();
  const containerRef = useRef(null);

  const project = findProjectBySlug(slug, lang);
  const { prev, next } = project
    ? getAdjacentProject(project.slug, lang)
    : { prev: null, next: null };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useGSAP(
    () => {
      if (!project) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".cs-header > *", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
      })
        .from(
          ".cs-hero-image",
          { y: 40, opacity: 0, duration: 0.9 },
          "-=0.4",
        )
        .from(
          ".cs-meta-row > *",
          { y: 20, opacity: 0, duration: 0.6, stagger: 0.06 },
          "-=0.4",
        );

      // Řádky galerie přilétají ze strany, na které leží snímek (na mobilu jen zdola,
      // aby se stránka nedala odsunout do strany).
      const sideways = window.matchMedia("(min-width: 768px)").matches;
      gsap.utils.toArray(".cs-shot").forEach((row, i) => {
        const trigger = {
          trigger: row,
          start: "top 80%",
          toggleActions: "play none none none",
        };
        gsap.from(row.querySelector(".cs-shot-media"), {
          x: sideways ? (i % 2 === 1 ? -56 : 56) : 0,
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: trigger,
        });
        gsap.from(row.querySelector("figcaption"), {
          y: 32,
          opacity: 0,
          duration: 0.9,
          delay: 0.12,
          ease: "power3.out",
          scrollTrigger: trigger,
        });
      });

      gsap.utils.toArray(".cs-reveal").forEach((el) => {
        gsap.from(el, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    },
    { scope: containerRef, dependencies: [slug, lang] },
  );

  if (!project) {
    return <NotFound />;
  }

  const cs = project.caseStudy;

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background text-foreground selection:bg-indigo-500/30"
    >
      <div className="pointer-events-none absolute top-0 left-1/2 -z-0 h-[520px] w-[80vw] -translate-x-1/2 rounded-full bg-indigo-500/12 blur-[140px]" />

      <header className="container relative z-10 mx-auto px-6 pt-24 md:pt-32">
        <Link
          to={archivePath(lang)}
          className="cs-header group inline-flex items-center gap-3 text-muted transition-colors duration-300 hover:text-foreground"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 transition-[background-color,border-color,transform] duration-300 group-hover:-translate-x-1 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/20">
            <ArrowLeft size={18} />
          </div>
          <span className="text-sm font-medium uppercase tracking-[0.1em]">
            {t("caseStudy.backToArchive")}
          </span>
        </Link>

        <div className="cs-header mt-10 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted md:mt-14">
          <span className="text-indigo-400">{project.category}</span>
          <span className="text-muted/40">·</span>
          <span>{project.year}</span>
          {cs?.client && (
            <>
              <span className="text-muted/40">·</span>
              <span>{cs.client}</span>
            </>
          )}
        </div>

        <h1 className="cs-header mt-4 text-5xl font-bold leading-[1.05] tracking-tighter md:text-7xl lg:text-8xl">
          {project.title}
        </h1>

        {cs?.tagline && (
          <p className="cs-header mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            {cs.tagline}
          </p>
        )}

        <div className="cs-header mt-10 flex flex-wrap gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-[background-color,color,transform] duration-300 hover:scale-105 hover:bg-indigo-500 hover:text-white"
          >
            {t("caseStudy.visitLive")}
            <ExternalLink
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </header>

      <section className="container relative z-10 mx-auto mt-14 px-6 md:mt-20">
        <div className="cs-hero-image relative overflow-hidden rounded-3xl border border-foreground/10 bg-surface shadow-2xl">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent z-10" />
          <img
            src={project.image}
            alt={project.title}
            loading="eager"
            decoding="async"
            className="aspect-[16/10] w-full object-cover"
          />
        </div>
      </section>

      <section className="container relative z-10 mx-auto mt-16 px-6 md:mt-24">
        <div className="cs-meta-row grid grid-cols-2 gap-6 rounded-3xl border border-foreground/10 bg-foreground/[0.02] p-6 md:grid-cols-4 md:gap-8 md:p-10">
          <MetaCell label={t("caseStudy.client")} value={cs?.client ?? "—"} />
          <MetaCell label={t("caseStudy.year")} value={project.year} />
          <MetaCell
            label={t("caseStudy.timeline")}
            value={cs?.timeline ?? "—"}
          />
          <MetaCell
            label={t("caseStudy.category")}
            value={project.category}
          />
        </div>

        {cs?.techStack?.length > 0 && (
          <div className="cs-reveal mt-8 flex flex-wrap items-center gap-2">
            <span className="mr-2 font-mono text-xs uppercase tracking-[0.18em] text-muted">
              {t("caseStudy.tech")}
            </span>
            {cs.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-foreground/15 bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground/80"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </section>

      {cs?.challenge || cs?.approach ? (
        <section className="container relative z-10 mx-auto mt-20 px-6 md:mt-28">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            {cs?.challenge && (
              <div className="cs-reveal">
                <h2 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-indigo-400">
                  {t("caseStudy.challengeTitle")}
                </h2>
                <p className="text-lg leading-relaxed text-foreground/85 md:text-xl">
                  {cs.challenge}
                </p>
              </div>
            )}
            {cs?.approach && (
              <div className="cs-reveal">
                <h2 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-indigo-400">
                  {t("caseStudy.approachTitle")}
                </h2>
                <p className="text-lg leading-relaxed text-foreground/85 md:text-xl">
                  {cs.approach}
                </p>
              </div>
            )}
          </div>
        </section>
      ) : (
        <section className="container relative z-10 mx-auto mt-20 px-6 md:mt-28">
          <div className="cs-reveal mx-auto max-w-2xl rounded-3xl border border-foreground/10 bg-foreground/[0.02] p-8 text-center text-muted md:p-12">
            <p className="text-base md:text-lg leading-relaxed">
              {t("caseStudy.noCaseStudy")}
            </p>
          </div>
        </section>
      )}

      {cs?.gallery?.length > 0 && (
        <section className="container relative z-10 mx-auto mt-24 px-6 md:mt-36">
          <h2 className="cs-reveal font-mono text-xs uppercase tracking-[0.2em] text-indigo-400">
            {t("caseStudy.galleryTitle")}
          </h2>

          {/* Střídavé řádky: obrázek jednou vlevo, podruhé vpravo. Žádné rámečky —
              snímek stojí sám o sobě, text se veze vedle něj. */}
          <div className="mt-14 flex flex-col gap-24 md:mt-20 md:gap-36">
            {cs.gallery.map((shot, i) => (
              <GalleryRow
                key={i}
                shot={shot}
                index={i}
                flipped={i % 2 === 1}
                fallbackAlt={project.title}
              />
            ))}
          </div>
        </section>
      )}

      <section className="container relative z-10 mx-auto mt-20 px-6 pb-24 md:mt-28 md:pb-32">
        <div className="cs-reveal grid grid-cols-1 gap-4 md:grid-cols-2">
          {prev ? (
            <Link
              to={detailPath(lang, prev.slug)}
              className="group relative overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/[0.02] p-6 transition-[border-color,background-color,transform] duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-foreground/[0.04] md:p-8"
            >
              <p className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted">
                <ArrowLeft size={14} /> {t("caseStudy.prevProject")}
              </p>
              <p className="text-2xl font-bold text-foreground transition-colors group-hover:text-indigo-400 md:text-3xl">
                {prev.title}
              </p>
              <p className="mt-1 text-sm text-muted">{prev.category}</p>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              to={detailPath(lang, next.slug)}
              className="group relative overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/[0.02] p-6 transition-[border-color,background-color,transform] duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-foreground/[0.04] md:p-8 md:text-right"
            >
              <p className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted md:flex-row-reverse">
                {t("caseStudy.nextProject")} <ArrowRight size={14} />
              </p>
              <p className="flex items-center gap-3 text-2xl font-bold text-foreground transition-colors group-hover:text-indigo-400 md:justify-end md:text-3xl">
                {next.title}
                <ArrowUpRight
                  size={22}
                  className="hidden -translate-x-2 opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:inline-block"
                />
              </p>
              <p className="mt-1 text-sm text-muted">{next.category}</p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>
    </div>
  );
};

// Jeden řádek galerie: snímek na jedné straně, text na druhé. `shape` řídí jen to,
// kolik místa snímek dostane — na výšku (plakát, telefon) se drží úzký.
const GalleryRow = ({ shot, index, flipped, fallbackAlt }) => {
  const wide = shot.shape === "wide";

  return (
    <figure className="cs-shot grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-14 lg:gap-20">
      <div
        className={`cs-shot-media group relative ${
          wide ? "md:col-span-7" : "md:col-span-5"
        } ${flipped ? "md:order-2" : "md:order-1"}`}
      >
        <div className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-gradient-to-tr from-indigo-500/25 via-purple-500/10 to-transparent opacity-70 blur-3xl" />
        <img
          src={shot.image}
          alt={shot.title ?? fallbackAlt}
          loading="lazy"
          decoding="async"
          className={`relative w-full rounded-2xl shadow-[0_40px_90px_-25px_rgba(0,0,0,0.9)] ring-1 ring-foreground/10 transition-transform duration-700 ease-out group-hover:-translate-y-2 ${
            wide ? "" : "mx-auto max-w-[260px] sm:max-w-[300px]"
          }`}
        />
      </div>

      <figcaption
        className={`${wide ? "md:col-span-5" : "md:col-span-7"} ${
          flipped ? "md:order-1" : "md:order-2"
        }`}
      >
        <span className="font-mono text-sm text-indigo-400/60">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
          {shot.title}
        </h3>
        <div className="mt-6 h-px w-16 bg-gradient-to-r from-indigo-500 to-transparent" />
        <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
          {shot.caption}
        </p>
      </figcaption>
    </figure>
  );
};

const MetaCell = ({ label, value }) => (
  <div>
    <p className="mb-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
      {label}
    </p>
    <p className="text-base font-semibold text-foreground md:text-lg">
      {value}
    </p>
  </div>
);

export default CaseStudy;
