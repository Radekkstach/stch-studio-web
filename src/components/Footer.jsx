import React, { useState } from "react";
import {
  Linkedin,
  Instagram,
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  X,
} from "lucide-react";
// Ujisti se, že cesta k logu sedí
import logoWhite from "../assets/logo2.png";

const Footer = () => {
  // --- STAV PRO MODAL OKNO ---
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("gdpr"); // 'gdpr' nebo 'cookies'

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openModal = (type) => {
    setModalContent(type);
    setModalOpen(true);
  };

  return (
    <footer className="bg-black pt-24 pb-8 border-t border-white/10 relative overflow-hidden">
      {/* --- OBŘÍ TEXT NA POZADÍ --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none opacity-[0.03]">
        <h1 className="text-[18vw] font-bold text-white leading-none tracking-tighter">
          STCH STUDIO
        </h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* --- GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* 1. Sloupec: Logo */}
          <div className="space-y-6">
            <a href="#" className="block w-fit">
              <img
                src={logoWhite}
                alt="STCH Studio Logo"
                className="h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </a>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Digitální studio zaměřené na tvorbu prémiových webů a aplikací,
              které pomáhají firmám růst.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/radek-stach/"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/stach.radek/"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* 2. Sloupec: Menu */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Menu</h4>
            <ul className="space-y-4 text-sm">
              {["Služby", "Projekty", "O Studiu", "Kontakt"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="text-muted hover:text-indigo-400 hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Sloupec: Kontakt */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Kontakt</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-muted">
                <Mail size={18} className="text-indigo-500 mt-0.5" />
                <a
                  href="mailto:info@stchstudio.cz"
                  className="hover:text-white transition-colors"
                >
                  info@stchstudio.cz
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted">
                <Phone size={18} className="text-indigo-500 mt-0.5" />
                <a
                  href="tel:+420702002964"
                  className="hover:text-white transition-colors"
                >
                  +420 702 002 964
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted">
                <MapPin size={18} className="text-indigo-500 mt-0.5" />
                <span>Třebíč, Česká republika</span>
              </li>
            </ul>
          </div>

          {/* 4. Sloupec: CTA */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Máte projekt?</h4>
            <p className="text-muted text-sm mb-6">
              Napište nám a probereme možnosti spolupráce.
            </p>
            <a
              href="#Kontakt"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-black text-sm font-bold rounded-full hover:bg-indigo-400 hover:text-white transition-all duration-300 w-full md:w-auto"
            >
              Chci nezávaznou konzultaci
            </a>
          </div>
        </div>

        {/* --- SPODNÍ LIŠTA --- */}
        <div className="pt-8 border-t border-white/10 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <p className="text-muted text-xs text-center md:text-left">
            © {new Date().getFullYear()} STCH Studio. Všechna práva vyhrazena.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex gap-6 text-xs text-muted">
              {/* Tlačítka otevírající Modal */}
              <button
                onClick={() => openModal("gdpr")}
                className="hover:text-white transition-colors"
              >
                Ochrana osobních údajů (GDPR)
              </button>
              <button
                onClick={() => openModal("cookies")}
                className="hover:text-white transition-colors"
              >
                Cookies
              </button>
            </div>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-indigo-500 hover:border-indigo-500 hover:-translate-y-1 transition-all duration-300"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* --- MODAL OKNO (Vyskakovací) --- */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-[#111] border border-white/10 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl relative flex flex-col">
            {/* Hlavička modalu */}
            <div className="flex justify-between items-center p-6 border-b border-white/10 sticky top-0 bg-[#111] z-10">
              <h3 className="text-xl font-bold text-white">
                {modalContent === "gdpr"
                  ? "Ochrana osobních údajů"
                  : "Používání Cookies"}
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="text-muted hover:text-white hover:bg-white/10 p-2 rounded-full transition-all"
              >
                <X size={24} />
              </button>
            </div>

            {/* Obsah modalu */}
            <div className="p-6 text-muted text-sm space-y-4 leading-relaxed">
              {modalContent === "gdpr" ? (
                <>
                  <p>
                    <strong>1. Kdo jsme?</strong>
                    <br /> Správcem vašich osobních údajů je STCH Studio
                    (fyzická osoba/firma), se sídlem Třebíč - Zámostí, L.
                    Pokorného 29/42, 67401, IČ: 21738068.
                  </p>
                  <p>
                    <strong>2. Co sbíráme?</strong>
                    <br /> Zpracováváme pouze údaje, které nám sami poskytnete v
                    kontaktním formuláři (jméno, e-mail, zpráva), abychom vám
                    mohli odpovědět na vaši poptávku.
                  </p>
                  <p>
                    <strong>3. Proč to děláme?</strong>
                    <br /> Účelem zpracování je jednání o smlouvě a zodpovězení
                    vašich dotazů. Vaše data nikomu neprodáváme ani je
                    nepředáváme třetím stranám pro marketingové účely.
                  </p>
                  <p>
                    <strong>4. Vaše práva</strong>
                    <br /> Máte právo požadovat výpis dat, která o vás
                    evidujeme, jejich opravu nebo výmaz. Stačí nám napsat na
                    info@stchstudio.cz.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>Co jsou cookies?</strong>
                    <br /> Cookies jsou malé textové soubory, které se ukládají
                    do vašeho zařízení při prohlížení webu.
                  </p>
                  <p>
                    <strong>Jaké cookies používáme?</strong>
                    <br /> Tento web používá pouze nezbytné technické cookies
                    pro zajištění správného fungování stránky (např. odeslání
                    formuláře). Nepoužíváme žádné marketingové ani sledovací
                    cookies třetích stran bez vašeho výslovného souhlasu.
                  </p>
                  <p>
                    Můžete je v nastavení svého prohlížeče kdykoliv zakázat, ale
                    některé části webu pak nemusí fungovat správně.
                  </p>
                </>
              )}
            </div>

            {/* Patička modalu */}
            <div className="p-6 border-t border-white/10 bg-[#111]">
              <button
                onClick={() => setModalOpen(false)}
                className="w-full py-3 bg-white text-black font-bold rounded-full hover:bg-indigo-400 hover:text-white transition-all"
              >
                Rozumím
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
