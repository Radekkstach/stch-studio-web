import React, { Suspense, lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PrivacyNotice from "./components/PrivacyNotice";
import { LanguageProvider } from "./i18n";
import {
  detectBrowserLang,
  langFromPathname,
  buildLangPath,
  DEFAULT_LANG,
  SUPPORTED_LANGS,
  STORAGE_KEY as LANG_STORAGE_KEY,
} from "./i18n/lang";

const Footer = lazy(() => import("./components/Footer"));
const Services = lazy(() => import("./components/Services"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Process = lazy(() => import("./components/Process"));
const Pricing = lazy(() => import("./components/Pricing"));
const Cms = lazy(() => import("./components/Cms"));
const Archive = lazy(() => import("./components/Archive"));
const CaseStudy = lazy(() => import("./components/CaseStudy"));
const MyStch = lazy(() => import("./components/MyStch"));
const AboutMe = lazy(() => import("./components/AboutMe"));

gsap.registerPlugin(ScrollTrigger, useGSAP);

const sectionFallback = (minHeight) => (
  <div className="w-full px-6 py-12" style={{ minHeight }} aria-hidden="true" />
);

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // When arriving with a hash (e.g. from a CTA on /mystch → "/#Kontakt"),
  // scroll to the target section. Retries because sections are lazy-loaded
  // and may not exist on the first frame. Once scrolled, the hash is cleared
  // so later actions (e.g. switching language) don't re-trigger the jump.
  useEffect(() => {
    const id = location.hash.replace("#", "");
    if (!id) return;

    let raf;
    let tries = 0;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        navigate(location.pathname + location.search, { replace: true });
        return;
      }
      if (tries++ < 60) raf = requestAnimationFrame(tryScroll);
    };
    raf = requestAnimationFrame(tryScroll);

    return () => cancelAnimationFrame(raf);
  }, [location.hash, location.pathname, location.search, navigate]);

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-background">
      <div className="min-h-screen bg-background text-foreground selection:bg-indigo-500/30 selection:text-indigo-200">
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
              <Process />
            </Suspense>
          </div>
          <div>
            <Suspense fallback={sectionFallback(560)}>
              <Cms />
            </Suspense>
          </div>
          <div>
            <Suspense fallback={sectionFallback(640)}>
              <Pricing />
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

// One-shot redirect for first-time visitors with EN browser → /en.
// Stored choice always wins. Runs once per session.
const InitialLangRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("stch-lang-resolved")) return;
    sessionStorage.setItem("stch-lang-resolved", "1");

    const currentLang = langFromPathname(location.pathname);
    let stored = null;
    try {
      const v = localStorage.getItem(LANG_STORAGE_KEY);
      if (SUPPORTED_LANGS.includes(v)) stored = v;
    } catch {
      /* ignore */
    }

    const target = stored ?? detectBrowserLang();
    if (target !== currentLang && target !== DEFAULT_LANG) {
      navigate(buildLangPath(location.pathname, target) + location.search + location.hash, {
        replace: true,
      });
    } else if (target === DEFAULT_LANG && currentLang !== DEFAULT_LANG && stored === DEFAULT_LANG) {
      navigate(buildLangPath(location.pathname, DEFAULT_LANG) + location.search + location.hash, {
        replace: true,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

const LocalizedRoutes = () => (
  <LanguageProvider>
    <InitialLangRedirect />
    <Navbar />
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
      <Route
        path="/archiv/projekt/:slug"
        element={
          <Suspense fallback={sectionFallback(640)}>
            <CaseStudy />
          </Suspense>
        }
      />
      <Route
        path="/mystch"
        element={
          <Suspense fallback={sectionFallback(640)}>
            <MyStch />
          </Suspense>
        }
      />
      <Route
        path="/o-mne"
        element={
          <Suspense fallback={sectionFallback(640)}>
            <AboutMe />
          </Suspense>
        }
      />
      <Route path="/en" element={<Home />} />
      <Route
        path="/en/archive"
        element={
          <Suspense fallback={sectionFallback(640)}>
            <Archive />
          </Suspense>
        }
      />
      <Route
        path="/en/archive/project/:slug"
        element={
          <Suspense fallback={sectionFallback(640)}>
            <CaseStudy />
          </Suspense>
        }
      />
      <Route
        path="/en/mystch"
        element={
          <Suspense fallback={sectionFallback(640)}>
            <MyStch />
          </Suspense>
        }
      />
      <Route
        path="/en/about"
        element={
          <Suspense fallback={sectionFallback(640)}>
            <AboutMe />
          </Suspense>
        }
      />
    </Routes>
    <PrivacyNotice />
  </LanguageProvider>
);

function App() {
  return (
    <Router>
      <LocalizedRoutes />
    </Router>
  );
}

export default App;
