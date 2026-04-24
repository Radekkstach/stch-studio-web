import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Studio from "./components/Studio";
import Archive from "./components/Archive";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-background">
      <div className="min-h-screen bg-background text-white selection:bg-indigo-500/30 selection:text-indigo-200">
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
    </main>
  );
};

function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const isTouchDevice =
      window.matchMedia("(pointer: coarse)").matches ||
      navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth < 1024;
    const shouldUseNativeScroll = isTouchDevice || isSmallScreen;

    let lenis = null;

    const syncScrollTrigger = () => ScrollTrigger.update();

    if (!shouldUseNativeScroll) {
      lenis = new Lenis({
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
      lenis.on("scroll", ScrollTrigger.update);
    } else {
      window.addEventListener("scroll", syncScrollTrigger, { passive: true });
    }

    const update = (time) => {
      lenis?.raf(time * 1000);
    };

    if (!shouldUseNativeScroll) {
      gsap.ticker.add(update);
      gsap.ticker.lagSmoothing(0);
    }

    const handleAnchorClick = (e) => {
      const anchor = e.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      const targetId = href;
      if (targetId === "#") return;

      e.preventDefault();

      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;

      if (lenis) {
        lenis.scrollTo(targetElement, {
          offset: 0,
          immediate: false,
        });
      } else {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      lenis?.destroy();
      gsap.ticker.remove(update);
      window.removeEventListener("scroll", syncScrollTrigger);
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archiv" element={<Archive />} />
      </Routes>
    </Router>
  );
}

export default App;
