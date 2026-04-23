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
import logoWhite from "../assets/logo2.svg";

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("gdpr");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openModal = (type) => {
    setModalContent(type);
    setModalOpen(true);
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black pt-24 pb-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-56 w-[42rem] -translate-x-1/2 bg-indigo-500/10 blur-[120px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="rounded-[32px] border border-white/10 bg-white/[0.03] px-6 py-10 backdrop-blur-sm md:px-10 md:py-12">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl space-y-6">
                <a href="#hero" className="block w-fit">
                  <img
                    src={logoWhite}
                    alt="STCH Studio Logo"
                    className="h-10 w-auto object-contain opacity-95"
                  />
                </a>

                <div className="space-y-4">
                  <p className="text-[0.7rem] uppercase tracking-[0.32em] text-indigo-300/80">
                    STCH Studio
                  </p>
                  <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                    Tvoříme weby, které působí čistě, rychle a moderně.
                  </h2>
                  <p className="max-w-xl text-sm leading-relaxed text-muted md:text-base">
                    Design, vývoj a digitální prezentace pro značky, které
                    chtějí zanechat silný první dojem.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5 lg:items-end">
                <a
                  href="#Kontakt"
                  className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-indigo-400 hover:text-white"
                >
                  Nezavazna konzultace
                </a>

                <div className="flex gap-3">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/radek-stach/"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-white hover:text-black"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/stchstudio.cz/"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-white hover:text-black"
                  >
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <a
                href="mailto:info@stchstudio.cz"
                className="group rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 transition-colors hover:bg-white/[0.05]"
              >
                <div className="mb-2 flex items-center gap-3 text-white">
                  <Mail size={18} className="text-indigo-400" />
                  <span className="text-sm font-medium">E-mail</span>
                </div>
                <p className="text-sm text-muted transition-colors group-hover:text-white/80">
                  info@stchstudio.cz
                </p>
              </a>

              <a
                href="tel:+420702002964"
                className="group rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 transition-colors hover:bg-white/[0.05]"
              >
                <div className="mb-2 flex items-center gap-3 text-white">
                  <Phone size={18} className="text-indigo-400" />
                  <span className="text-sm font-medium">Telefon</span>
                </div>
                <p className="text-sm text-muted transition-colors group-hover:text-white/80">
                  +420 702 002 964
                </p>
              </a>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
                <div className="mb-2 flex items-center gap-3 text-white">
                  <MapPin size={18} className="text-indigo-400" />
                  <span className="text-sm font-medium">Lokace</span>
                </div>
                <p className="text-sm text-muted">Třebíč, Česká republika</p>
              </div>
            </div>

            <div className="flex flex-col gap-5 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
              <p className="text-center text-xs text-muted md:text-left">
                © {new Date().getFullYear()} STCH Studio. Vsechna prava
                vyhrazena.
              </p>

              <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
                <div className="flex gap-6 text-xs text-muted">
                  <button
                    onClick={() => openModal("gdpr")}
                    className="transition-colors hover:text-white"
                  >
                    Ochrana osobnich udaju
                  </button>
                  <button
                    onClick={() => openModal("cookies")}
                    className="transition-colors hover:text-white"
                  >
                    Cookies
                  </button>
                </div>

                <button
                  href="#hero"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:bg-indigo-500"
                >
                  <a href="#hero">
                    <ArrowUp size={16} />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative flex max-h-[80vh] w-full max-w-2xl flex-col overflow-y-auto rounded-2xl border border-white/10 bg-[#111] shadow-2xl">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#111] p-6">
              <h3 className="text-xl font-bold text-white">
                {modalContent === "gdpr"
                  ? "Ochrana osobnich udaju"
                  : "Pouzivani Cookies"}
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="rounded-full p-2 text-muted transition-all hover:bg-white/10 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4 p-6 text-sm leading-relaxed text-muted">
              {modalContent === "gdpr" ? (
                <>
                  <p>
                    <strong>1. Kdo jsme?</strong>
                    <br /> Spravcem vasich osobnich udaju je STCH Studio, se
                    sidlem Trebic - Zamosti, L. Pokorneho 29/42, 67401, IC:
                    21738068.
                  </p>
                  <p>
                    <strong>2. Co sbirame?</strong>
                    <br /> Zpracovavame pouze udaje, ktere nam sami poskytnete v
                    kontaktnim formulari, abychom vam mohli odpovedet na vasi
                    poptavku.
                  </p>
                  <p>
                    <strong>3. Proc to delame?</strong>
                    <br /> Ucelem zpracovani je jednani o smlouve a zodpovezeni
                    vasich dotazu. Vase data nikomu neprodavame.
                  </p>
                  <p>
                    <strong>4. Vase prava</strong>
                    <br /> Mate pravo pozadovat vypis dat, jejich opravu nebo
                    vymaz. Staci nam napsat na info@stchstudio.cz.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>Co jsou cookies?</strong>
                    <br /> Cookies jsou male textove soubory, ktere se ukladaji
                    do vaseho zarizeni pri prohlizeni webu.
                  </p>
                  <p>
                    <strong>Jake cookies pouzivame?</strong>
                    <br /> Tento web pouziva pouze nezbytne technicke cookies
                    pro zajisteni spravneho fungovani stranky. Nepouzivame
                    marketingove ani sledovaci cookies tretich stran bez vaseho
                    souhlasu.
                  </p>
                  <p>
                    Muzete je v nastaveni sveho prohlizece kdykoliv zakazat, ale
                    nektere casti webu pak nemusi fungovat spravne.
                  </p>
                </>
              )}
            </div>

            <div className="border-t border-white/10 bg-[#111] p-6">
              <button
                onClick={() => setModalOpen(false)}
                className="w-full rounded-full bg-white py-3 font-bold text-black transition-all hover:bg-indigo-400 hover:text-white"
              >
                Rozumim
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
