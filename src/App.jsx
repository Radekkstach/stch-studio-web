import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const Footer = lazy(() => import("./components/Footer"));
const Services = lazy(() => import("./components/Services"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Studio = lazy(() => import("./components/Studio"));
const Archive = lazy(() => import("./components/Archive"));

gsap.registerPlugin(ScrollTrigger, useGSAP);

const sectionFallback = (minHeight) => (
  <div className="w-full px-6 py-12" style={{ minHeight }} aria-hidden="true" />
);

const Home = () => {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-background">
      <div className="min-h-screen bg-background text-white selection:bg-indigo-500/30 selection:text-indigo-200">
        <Navbar />
        <main>
          <div id="hero">
            <Hero />
          </div>
          <div>
            <Suspense fallback={sectionFallback(640)}>
              <Projects />
            </Suspense>
          </div>
          <div>
            <Suspense fallback={sectionFallback(720)}>
              <Services />
            </Suspense>
          </div>
          <div>
            <Suspense fallback={sectionFallback(560)}>
              <Studio />
            </Suspense>
          </div>
          <div>
            <Suspense fallback={sectionFallback(760)}>
              <Contact />
            </Suspense>
          </div>
        </main>
        <Suspense fallback={sectionFallback(320)}>
          <Footer />
        </Suspense>
      </div>
    </main>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/archiv"
          element={
            <Suspense fallback={sectionFallback(640)}>
              <Archive />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
