import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "../i18n";

const AboutMe = () => {
  const { t, lang } = useTranslation();
  const containerRef = useRef(null);
  const homePath = lang === "en" ? "/en" : "/";
  const contactHref = lang === "en" ? "/en#Kontakt" : "/#Kontakt";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(
    () => {
      gsap.from(".am-header > *", {
        y: 28,
        opacity: 0,
        duration: 0.75,
        stagger: 0.09,
        ease: "power3.out",
      });
      gsap.from(".am-portrait", {
        scale: 0.94,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.25,
      });
      gsap.from(".am-body > *", {
        y: 24,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.3,
      });
      gsap.from(".am-cta", {
        y: 32,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".am-cta",
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: containerRef },
  );

  const storyParagraphs = t("aboutMe.storyBody").split("\n\n");

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background text-foreground selection:bg-indigo-500/30"
    >
      <div className="pointer-events-none absolute top-0 left-1/2 -z-0 h-[520px] w-[70vw] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[140px]" />

      {/* ── BACK LINK ── */}
      <header className="container relative z-10 mx-auto px-6 pt-28 md:pt-32">
        <Link
          to={homePath}
          className="am-header group inline-flex items-center gap-3 text-muted transition-colors duration-300 hover:text-foreground"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 transition-[background-color,border-color,transform] duration-300 group-hover:-translate-x-1 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/20">
            <ArrowLeft size={18} />
          </div>
          <span className="text-sm font-medium uppercase tracking-[0.1em]">
            {t("aboutMe.back")}
          </span>
        </Link>
      </header>

      {/* ── MAIN CONTENT ── */}
      <section className="container relative z-10 mx-auto mt-14 px-6 md:mt-20">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[340px_1fr] lg:grid-cols-[400px_1fr] md:gap-16 lg:gap-24">

          {/* Portrait */}
          <div className="am-portrait">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/[0.03]">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted/25">
                <div className="h-24 w-24 rounded-full bg-foreground/8" />
                <span className="font-mono text-xs uppercase tracking-widest">foto</span>
              </div>
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-indigo-500/8 to-transparent" />
            </div>
          </div>

          {/* Text */}
          <div className="am-body flex flex-col justify-center">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-indigo-400">
              {t("aboutMe.eyebrow")}
            </p>

            <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tighter md:text-6xl lg:text-7xl">
              {t("aboutMe.name")}
            </h1>

            <p className="mt-2 text-lg text-muted">{t("aboutMe.role")}</p>

            <div className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted/50">
              <MapPin size={13} />
              {t("aboutMe.location")}
            </div>

            <p className="mt-10 text-xl leading-relaxed text-foreground/85 md:text-2xl">
              {t("aboutMe.intro")}
            </p>

            <div className="mt-10 border-t border-foreground/10 pt-10">
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-indigo-400">
                {t("aboutMe.storyTitle")}
              </p>
              <div className="space-y-4">
                {storyParagraphs.map((para, i) => (
                  <p key={i} className="text-base leading-relaxed text-muted md:text-lg">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="container relative z-10 mx-auto mt-20 px-6 pb-24 md:mt-28 md:pb-32">
        <div className="am-cta relative overflow-hidden rounded-3xl border border-indigo-500/20 bg-indigo-500/5 p-10 text-center md:p-16">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/5" />
          <h2 className="relative mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            {t("aboutMe.ctaTitle")}
          </h2>
          <p className="relative mx-auto mb-8 max-w-xl text-muted md:text-lg">
            {t("aboutMe.ctaText")}
          </p>
          <a
            href={contactHref}
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-sm font-semibold text-background transition-[background-color,transform] duration-300 hover:scale-105 hover:bg-indigo-500 hover:text-white"
          >
            {t("aboutMe.ctaButton")}
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
