import React, { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "../i18n";

const Hero = () => {
  const container = useRef();
  const [activePhraseIndex, setActivePhraseIndex] = useState(0);
  const { t } = useTranslation();

  const rotatingPhrases = t("hero.rotating");
  const titleStatic = t("hero.titleStatic");
  const longestPhrase = useMemo(
    () =>
      rotatingPhrases.reduce(
        (longest, current) =>
          current.length > longest.length ? current : longest,
        rotatingPhrases[0] || "",
      ),
    [rotatingPhrases],
  );

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActivePhraseIndex((current) => (current + 1) % rotatingPhrases.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, [rotatingPhrases.length]);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-line", {
        y: 120,
        skewY: 7,
        stagger: 0.15,
        duration: 1.2,
      })
        .from(
          ".hero-fade",
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
            stagger: 0.1,
          },
          "-=0.6",
        );
      // .hero-glow fades in via CSS (see index.css) — keeping it off the GSAP
      // ticker avoids dropped frames while the page is still loading on mobile.
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-visible pt-36 pb-20 bg-hero-gradient"
    >
      <div className="hero-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105vw] h-[105vw] md:w-[1100px] md:h-[1100px] rounded-full pointer-events-none" />
      <div className="hero-glow-band absolute left-1/2 bottom-[-140px] -translate-x-1/2 w-[120vw] h-80 md:w-[1200px] md:h-[560px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h1 className="hero-title font-bold tracking-tighter leading-[1.1] mb-8 md:mb-12">
          <div className="overflow-hidden py-[0.3em] -my-[0.3em]">
            <span className="hero-line hero-rotating-line" aria-live="polite">
              <span className="hero-rotating-line-sizer" aria-hidden="true">
                <span>{titleStatic} </span>
                <span>{longestPhrase}</span>
              </span>
              <span className="hero-rotating-line-content">
                <span className="hero-static-slot" aria-hidden="true">
                  <span className="hero-static-sizer">{titleStatic}</span>
                  <span
                    key={`static-${activePhraseIndex}`}
                    className="hero-static-word text-foreground"
                  >
                    {titleStatic}
                  </span>
                </span>
                <span
                  key={rotatingPhrases[activePhraseIndex]}
                  className="animated-gradient-text hero-rotating-word "
                >
                  {rotatingPhrases[activePhraseIndex]}
                </span>
              </span>
            </span>
          </div>
          <div className="overflow-hidden">
            <span className="hero-line inline-block py-1">
              {t("hero.titleEnd")}
              <span className="animated-gradient-text2">.</span>
            </span>
          </div>
        </h1>

        <p className="hero-fade text-base md:text-xl text-foreground/75 max-w-xl mx-auto leading-relaxed text-balance px-2">
          {t("hero.description")}
        </p>
      </div>
    </section>
  );
};

export default Hero;
