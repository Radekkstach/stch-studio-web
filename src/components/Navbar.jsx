import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Zap jsem odebral, nepouzival se
import logoImg from "../assets/logo2.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Funkce pro zavření menu po kliknutí na odkaz (pro mobil)
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav
        // ZMĚNA 1: pointer-events-none (aby šlo klikat "skrz" prázdná místa lišty)
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none ${
          isScrolled
            ? "py-4 bg-background/80 backdrop-blur-lg border-b border-white/5"
            : "py-6 bg-transparent"
        }`}
      >
        {/* ZMĚNA 2: pointer-events-auto (aby šlo klikat na Logo a Tlačítka uvnitř) */}
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between pointer-events-auto">
          {/* --- LOGO --- */}
          <a
            href="#hero"
            className="relative group flex items-center gap-2 font-bold text-2xl tracking-tight"
          >
            <div className="absolute -inset-1 bg-primary/50 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
            <img
              src={logoImg}
              alt="Logo"
              className="relative z-10 w-11 h-auto rounded-lg object-contain"
            />
            <span className="relative z-10">STUDIO</span>
          </a>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden md:flex items-center gap-8">
            {["Projekty", "Služby", "Studio"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-sm font-medium text-muted hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}

            <a
              href="#Kontakt"
              className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-white text-sm font-semibold rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]"
            >
              Kontakt
            </a>
          </div>

          {/* --- MOBILE TOGGLE --- */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* --- MOBILNÍ MENU OVERLAY (Tohle chybělo nebo bylo rozbité) --- */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {["Projekty", "Služby", "Studio"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={closeMenu}
            className="text-2xl font-bold text-white hover:text-primary transition-colors"
          >
            {item}
          </a>
        ))}
        <a
          href="#Kontakt"
          onClick={closeMenu}
          className="px-8 py-4 bg-primary text-white text-xl font-bold rounded-full shadow-lg"
        >
          Kontakt
        </a>
      </div>
    </>
  );
};

export default Navbar;
