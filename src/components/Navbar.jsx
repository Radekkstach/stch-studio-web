import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import logoImg from "../assets/nav_logo.png";
import { scrollToSection } from "../utils/scrollToSection";
import { useTheme } from "../utils/theme";
import { useTranslation } from "../i18n";

const ThemeToggle = ({ theme, onToggle, ariaLabel, className = "" }) => {
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={ariaLabel}
      aria-pressed={isDark}
      className={`relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 bg-foreground/[0.04] text-foreground overflow-hidden transition-[background-color,border-color,transform] duration-300 hover:bg-foreground/10 hover:border-foreground/30 active:scale-95 ${className}`}
    >
      <span
        className={`absolute inset-0 flex items-center justify-center transition-[opacity,transform] duration-500 ease-out ${
          isDark
            ? "opacity-0 -rotate-90 scale-50"
            : "opacity-100 rotate-0 scale-100"
        }`}
      >
        <Sun size={18} strokeWidth={2.25} />
      </span>
      <span
        className={`absolute inset-0 flex items-center justify-center transition-[opacity,transform] duration-500 ease-out ${
          isDark
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 rotate-90 scale-50"
        }`}
      >
        <Moon size={17} strokeWidth={2.25} />
      </span>
    </button>
  );
};

const LanguageToggle = ({ lang, onToggle, ariaLabel, className = "" }) => (
  <button
    type="button"
    onClick={onToggle}
    aria-label={ariaLabel}
    className={`relative inline-flex h-10 items-center justify-center gap-1 rounded-full border border-foreground/15 bg-foreground/[0.04] px-3 text-xs font-semibold uppercase tracking-wider text-foreground transition-[background-color,border-color,transform] duration-300 hover:bg-foreground/10 hover:border-foreground/30 active:scale-95 ${className}`}
  >
    <span className={lang === "cs" ? "text-foreground" : "text-muted"}>CZ</span>
    <span className="text-muted/50">/</span>
    <span className={lang === "en" ? "text-foreground" : "text-muted"}>EN</span>
  </button>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { theme, toggleTheme } = useTheme();
  const { t, lang, setLang } = useTranslation();
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/en";

  const navLinks = [
    { id: "Projekty", label: t("nav.projects") },
    { id: "Sluzby", label: t("nav.services") },
    { id: "Studio", label: t("nav.studio") },
  ];

  useEffect(() => {
    let ticking = false;

    const updateScrolledState = () => {
      const nextValue = window.scrollY > 50;
      setIsScrolled((prev) => (prev === nextValue ? prev : nextValue));
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;
      window.requestAnimationFrame(updateScrolledState);
    };

    updateScrolledState();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    gsap.from(".nav-anim", {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      stagger: 0.1,
    });
  });

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(
        ".mobile-link",
        { y: 50, opacity: 0, skewY: 5 },
        {
          y: 0,
          opacity: 1,
          skewY: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.2,
        },
      );
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    if (!isHome) {
      setIsMobileMenuOpen(false);
      const base = lang === "en" ? "/en" : "/";
      window.location.href = base + "#" + id;
      return;
    }
    scrollToSection(id, {
      closeMenu: () => setIsMobileMenuOpen(false),
      delay: isMobileMenuOpen ? 300 : 0,
    });
  };

  const toggleLang = () => setLang(lang === "cs" ? "en" : "cs");

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-[padding] duration-500 ease-in-out pointer-events-none ${
          isScrolled ? "pt-4 px-4 md:pt-6" : "pt-6 px-4 md:pt-10 md:px-12"
        }`}
      >
        <div
          className={`nav-anim flex items-center justify-between pointer-events-auto transition-[max-width,background-color,border-color,padding,box-shadow] duration-500 w-full rounded-full border ${
            isScrolled
              ? "max-w-4xl bg-surface/85 backdrop-blur-0 md:backdrop-blur-xl border-foreground/10 px-5 py-3 md:px-8 md:py-4 shadow-2xl"
              : "max-w-7xl bg-transparent border-transparent px-2 py-2 md:px-0 md:py-0"
          }`}
        >
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "hero")}
            className="relative flex items-center group"
          >
            <img
              src={logoImg}
              alt="Logo"
              className={`relative z-10 w-auto object-contain transition-[height,filter] duration-500 dark:invert-0 invert ${
                isScrolled ? "h-6 md:h-7" : "h-7 md:h-10"
              }`}
            />
          </a>

          <div className="hidden md:flex items-center gap-5 lg:gap-8">
            <div className="flex items-center gap-8">
              {navLinks.map((item) =>
                item.path ? (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="relative text-sm font-medium text-foreground/70 hover:text-foreground transition-colors py-2 group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-indigo-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out rounded-full" />
                  </Link>
                ) : (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className="relative text-sm font-medium text-foreground/70 hover:text-foreground transition-colors py-2 group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-indigo-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out rounded-full" />
                  </a>
                ),
              )}
            </div>

            <div className="flex items-center gap-2">
              <LanguageToggle
                lang={lang}
                onToggle={toggleLang}
                ariaLabel={t("nav.switchLanguage")}
              />
              <ThemeToggle
                theme={theme}
                onToggle={toggleTheme}
                ariaLabel={theme === "dark" ? t("nav.toLight") : t("nav.toDark")}
              />
            </div>

            <a
              href="#Kontakt"
              onClick={(e) => handleNavClick(e, "Kontakt")}
              className={`group relative overflow-hidden bg-foreground text-background font-semibold rounded-full transition-[padding,font-size,transform] duration-300 hover:scale-105 active:scale-95 ${
                isScrolled ? "px-6 py-2 text-sm" : "px-8 py-3 text-base"
              }`}
            >
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-background/40 to-transparent z-10" />
              <span className="relative z-20">{t("nav.contact")}</span>
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <LanguageToggle
              lang={lang}
              onToggle={toggleLang}
              ariaLabel={t("nav.switchLanguage")}
              className="h-9 px-2.5 text-[11px]"
            />
            <ThemeToggle
              theme={theme}
              onToggle={toggleTheme}
              ariaLabel={theme === "dark" ? t("nav.toLight") : t("nav.toDark")}
              className="h-9 w-9"
            />
            <button
              className="flex items-center justify-center p-2 text-foreground transition-colors pointer-events-auto z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      <div
        ref={menuRef}
        className={`fixed inset-0 z-40 bg-background flex flex-col justify-center px-8 transition-opacity duration-500 overflow-hidden md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none delay-300"
        }`}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 -right-32 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] -translate-y-1/2" />
          <div className="absolute bottom-0 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2" />
        </div>

        <div className="flex flex-col gap-6 relative z-10">
          <p className="mobile-link text-xs uppercase tracking-[0.2em] text-indigo-400 font-mono mb-4">
            {t("nav.menu")}
          </p>

          {navLinks.map((item) =>
            item.path ? (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mobile-link text-5xl sm:text-6xl font-bold text-foreground/50 hover:text-foreground transition-colors duration-300 w-fit"
              >
                {item.label}.
              </Link>
            ) : (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="mobile-link text-5xl sm:text-6xl font-bold text-foreground/50 hover:text-foreground transition-colors duration-300 w-fit"
              >
                {item.label}.
              </a>
            ),
          )}

          <div className="mobile-link mt-12 w-full h-[1px] bg-foreground/10" />

          <a
            href="#Kontakt"
            onClick={(e) => handleNavClick(e, "Kontakt")}
            className="mobile-link mt-8 w-full py-5 bg-foreground text-background text-xl font-bold rounded-full text-center transition-transform active:scale-95"
          >
            {t("nav.writeUs")}
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
