import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import logoImg from "../assets/nav_logo.png";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animace pro vstup Navbaru po načtení
  useGSAP(() => {
    gsap.from(".nav-anim", {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      stagger: 0.1,
    });
  });

  // Animace obsahu mobilního menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"; // Zabrání scrollování stránky pod menu
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

  // Hladký JS scroll
  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    // Zpoždění pro plynulé zavření menu před scrollováním
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (id === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 300);
  };

  const navLinks = ["Projekty", "Služby", "Studio"];

  return (
    <>
      {/* --- HLAVNÍ NAVBAR --- */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-in-out pointer-events-none ${
          isScrolled ? "pt-4 px-4 md:pt-6" : "pt-6 px-4 md:pt-10 md:px-12"
        }`}
      >
        <div
          className={`nav-anim flex items-center justify-between pointer-events-auto transition-all duration-500 w-full rounded-full border ${
            isScrolled
              ? "max-w-4xl bg-[#0a0a0a]/80 backdrop-blur-sm md:backdrop-blur-xl border-white/10 px-5 py-3 md:px-8 md:py-4 shadow-2xl"
              : "max-w-7xl bg-transparent border-transparent px-2 py-2 md:px-0 md:py-0"
          }`}
        >
          {/* --- LOGO --- */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "hero")}
            className="relative flex items-center group"
          >
            <img
              src={logoImg}
              alt="Logo"
              className={`relative z-10 w-auto object-contain transition-all duration-500 ${
                isScrolled ? "h-6 md:h-7" : "h-7 md:h-10"
              }`}
            />
          </a>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <div className="flex items-center gap-8">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className="relative text-sm font-medium text-white/70 hover:text-white transition-colors py-2 group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-indigo-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out rounded-full" />
                </a>
              ))}
            </div>

            <a
              href="#Kontakt"
              onClick={(e) => handleNavClick(e, "Kontakt")}
              className={`group relative overflow-hidden bg-white text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 ${
                isScrolled ? "px-6 py-2 text-sm" : "px-8 py-3 text-base"
              }`}
            >
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-10" />
              <span className="relative z-20">Kontakt</span>
            </a>
          </div>

          {/* --- MOBILE TOGGLE --- */}
          <button
            className="md:hidden flex items-center justify-center p-2 text-white transition-colors pointer-events-auto z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* --- MOBILNÍ MENU OVERLAY --- */}
      <div
        ref={menuRef}
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-md flex flex-col justify-center px-8 transition-all duration-500 overflow-hidden md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none delay-300"
        }`}
      >
        {/* --- OPRAVENÉ SVÍTÍCÍ KRUHY ---
            Zabalené ve vlastním divu s absolutní pozicí a 'overflow-hidden'.
            Místo zrádného 'translate-x' používají záporné okraje.
        */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 -right-32 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] -translate-y-1/2" />
          <div className="absolute bottom-0 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2" />
        </div>

        <div className="flex flex-col gap-6 relative z-10">
          <p className="mobile-link text-xs uppercase tracking-[0.2em] text-indigo-400 font-mono mb-4">
            Navigace
          </p>

          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => handleNavClick(e, item)}
              className="mobile-link text-5xl sm:text-6xl font-bold text-white/50 hover:text-white transition-colors duration-300 w-fit"
            >
              {item}.
            </a>
          ))}

          <div className="mobile-link mt-12 w-full h-[1px] bg-white/10" />

          <a
            href="#Kontakt"
            onClick={(e) => handleNavClick(e, "Kontakt")}
            className="mobile-link mt-8 w-full py-5 bg-white text-black text-xl font-bold rounded-full text-center transition-transform active:scale-95"
          >
            Napsat nám
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
