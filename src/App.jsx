import React, { useEffect, useRef } from "react";
// 1. OPRAVA: Přidán import Routeru (toto ti chybělo)
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import komponent
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Studio from "./components/Studio";
import Archive from "./components/Archive"; // Ujisti se, že cesta sedí

// Registrace pluginu
gsap.registerPlugin(ScrollTrigger);

// 2. OPRAVA: Komponentu Home jsme vytáhli VEN z App.
// Musí stát samostatně, aby kód byl čistý.
const Home = () => {
  return (
    <div className="bg-background min-h-screen text-white selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <div id="Projekty">
          <Projects />
        </div>
        <div id="Sluzby">
          <Services />
        </div>
        <div id="Studio">
          <Studio />
        </div>
        <div id="Kontakt">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

// --- HLAVNÍ APLIKACE ---
function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Inicializace Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Propojení Lenis a GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const update = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    // FIX KLIKÁNÍ na kotvy (#sekce)
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest("a");
      // Pokud to není odkaz nebo nezačíná mřížkou, ignorujeme
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#")) return; // Pokud to je odkaz na jinou stránku (/archiv), necháme ho být

      const targetId = href;
      if (targetId === "#") return;

      e.preventDefault();

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        lenis.scrollTo(targetElement, {
          offset: 0,
          immediate: false,
        });
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // Cleanup
    return () => {
      lenis.destroy();
      gsap.ticker.remove(update);
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  // 3. OPRAVA: Tady vracíme Router. Předtím jsi tu měl vnořenou funkci.
  return (
    <Router>
      <Routes>
        {/* Cesta pro hlavní stránku */}
        <Route path="/" element={<Home />} />

        {/* Cesta pro Archiv projektů */}
        <Route path="/archiv" element={<Archive />} />
      </Routes>
    </Router>
  );
}

export default App;
