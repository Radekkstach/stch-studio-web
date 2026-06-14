import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Lock } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import mystchLogo from "../assets/mystch_logo.png";
import shotPrehled from "../assets/cms/prehled.jpg";
import shotUprava from "../assets/cms/uprava.jpg";
import shotFotky from "../assets/cms/fotky.jpg";
import shotNastaveni from "../assets/cms/nastaveni.jpg";
import { useTranslation } from "../i18n";

// Real admin screenshots, in the same order as the `screens` array in i18n.
// A null slot renders a styled placeholder instead.
const screenImages = [shotPrehled, shotUprava, shotFotky, shotNastaveni];

const MyStch = () => {
  const { t, lang } = useTranslation();
  const containerRef = useRef(null);
  const [active, setActive] = useState(0);

  const homePath = lang === "en" ? "/en" : "/";
  const contactHref = lang === "en" ? "/en#Kontakt" : "/#Kontakt";

  const screens = t("myStch.screens");
  const steps = t("myStch.steps");
  const [titleTop, titleBottom] = t("myStch.title");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(
    () => {
      gsap.from(".ms-header > *", {
        y: 28,
        opacity: 0,
        duration: 0.75,
        stagger: 0.09,
        ease: "power3.out",
      });
      gsap.from(".ms-window", {
        y: 36,
        opacity: 0,
        scale: 0.97,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.2,
      });
      gsap.from(".ms-step", {
        y: 28,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".ms-steps",
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: containerRef },
  );

  const activeImage = screenImages[active];

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background text-foreground selection:bg-indigo-500/30"
    >
      <div className="pointer-events-none absolute top-0 left-1/2 -z-0 h-[520px] w-[80vw] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[140px]" />

      {/* ── BACK LINK ── */}
      <header className="container relative z-10 mx-auto px-6 pt-28 md:pt-32">
        <Link
          to={homePath}
          className="ms-header group inline-flex items-center gap-3 text-muted transition-colors duration-300 hover:text-foreground"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 transition-[background-color,border-color,transform] duration-300 group-hover:-translate-x-1 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/20">
            <ArrowLeft size={18} />
          </div>
          <span className="text-sm font-medium uppercase tracking-[0.1em]">
            {t("myStch.back")}
          </span>
        </Link>
      </header>

      {/* ── HERO ── */}
      <section className="container relative z-10 mx-auto mt-12 px-6 text-center md:mt-16">
        <img
          src={mystchLogo}
          alt="mySTCH"
          className="ms-header mx-auto mb-6 h-12 w-auto object-contain dark:invert md:h-16"
        />
        <p className="ms-header mb-7 font-mono text-xs uppercase tracking-[0.22em] text-indigo-400">
          {t("myStch.eyebrow")}
        </p>

        <h1 className="ms-header mx-auto max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
          {titleTop}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-300 dark:from-indigo-400 dark:to-white">
            {titleBottom}
          </span>
        </h1>

        <p className="ms-header mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {t("myStch.lead")}
        </p>

        <Link
          to={contactHref}
          className="ms-header mt-9 inline-flex items-center justify-center rounded-full bg-foreground px-8 py-3.5 text-sm font-semibold text-background transition-[background-color,color,transform] duration-300 hover:scale-105 hover:bg-indigo-500 hover:text-white"
        >
          {t("myStch.ctaTop")}
        </Link>
      </section>

      {/* ── INTERACTIVE WINDOW ── */}
      <section className="container relative z-10 mx-auto mt-16 px-6 md:mt-20">
        <div className="ms-window relative mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-surface shadow-2xl shadow-black/40">
            {/* window chrome */}
            <div className="relative flex items-center border-b border-foreground/10 bg-foreground/[0.04] px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>
              <div className="absolute left-1/2 hidden -translate-x-1/2 sm:block">
                <div className="flex items-center gap-2 rounded-md bg-background/60 px-3 py-1 text-xs text-muted">
                  <Lock size={11} />
                  {t("myStch.urlBar")}
                </div>
              </div>
            </div>

            {/* body */}
            <div className="relative aspect-[16/10] bg-background">
              {activeImage ? (
                <img
                  key={active}
                  src={activeImage}
                  alt={screens[active].label}
                  className="absolute inset-0 h-full w-full object-cover object-left-top animate-in fade-in duration-300"
                />
              ) : (
                <div
                  key={active}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4 animate-in fade-in duration-300"
                >
                  <img
                    src={mystchLogo}
                    alt=""
                    className="h-14 w-14 rounded-2xl object-contain opacity-20"
                  />
                  <p className="text-lg font-semibold text-foreground/40">
                    {screens[active].label}
                  </p>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted/30">
                    {t("myStch.previewLabel")}
                  </span>
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-indigo-500/8 to-transparent" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {screens.map((screen, i) => (
            <button
              key={screen.label}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-full border px-4 py-2 text-sm transition-[background-color,border-color,color] duration-300 ${
                active === i
                  ? "border-indigo-500 bg-indigo-500 text-white"
                  : "border-foreground/15 bg-transparent text-muted hover:border-foreground/40 hover:text-foreground"
              }`}
            >
              {screen.label}
            </button>
          ))}
        </div>

        <p className="mx-auto mt-5 max-w-xl text-center text-sm leading-relaxed text-muted md:text-base">
          {screens[active].caption}
        </p>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="container relative z-10 mx-auto mt-24 px-6 md:mt-32">
        <h2 className="mb-12 text-center text-2xl font-bold tracking-tight text-foreground md:text-4xl">
          {t("myStch.howTitle")}
        </h2>
        <div className="ms-steps grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="ms-step rounded-3xl border border-foreground/10 bg-surface/60 p-8 backdrop-blur-0 md:backdrop-blur-sm"
            >
              <span className="block font-mono text-4xl font-bold text-foreground/10">
                {step.num}
              </span>
              <h3 className="mt-5 text-lg font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="container relative z-10 mx-auto mt-20 px-6 pb-24 md:mt-28 md:pb-32">
        <div className="relative overflow-hidden rounded-3xl border border-indigo-500/20 bg-indigo-500/5 p-10 text-center md:p-16">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/5" />
          <h2 className="relative mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            {t("myStch.ctaTitle")}
          </h2>
          <p className="relative mx-auto mb-8 max-w-xl text-muted md:text-lg">
            {t("myStch.ctaText")}
          </p>
          <Link
            to={contactHref}
            className="group relative inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-sm font-semibold text-background transition-[background-color,transform] duration-300 hover:scale-105 hover:bg-indigo-500 hover:text-white"
          >
            {t("myStch.ctaButton")}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MyStch;
