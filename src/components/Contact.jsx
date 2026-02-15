import React, { useState } from "react";
import { Mail, Phone, Send, CheckCircle, ArrowRight } from "lucide-react";

const Contact = () => {
  const [budget, setBudget] = useState("Do 50k Kč");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const budgetOptions = [
    "Do 50k Kč",
    "50k - 100k Kč",
    "100k - 200k Kč",
    "200k+ Kč",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(e.target);

    try {
      // ZDE SI NECH SVŮJ ODKAZ (xpqjdbjl)
      const response = await fetch("https://formspree.io/f/xpqjdbjl", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSuccess(true);
        setIsSubmitting(false);
        e.target.reset();
      } else {
        const data = await response.json();
        setErrorMessage(
          data.error || "Něco se pokazilo. Zkuste to prosím znovu.",
        );
        setIsSubmitting(false);
      }
    } catch (error) {
      setErrorMessage("Chyba připojení. Zkontrolujte internet.");
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="Kontakt"
      className="py-24 md:py-32 bg-background relative z-10 "
    >
      {/* --- GLOW EFEKTY --- */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none -z-10 mix-blend-screen opacity-50" />
      <div className="absolute bottom-0 right-[-10%] w-[400px] h-[400px] bg-blue-500/50 blur-[100px] rounded-full pointer-events-none -z-10 opacity-40" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32">
          {/* --- LEVÁ STRANA: Info --- */}
          <div>
            <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-6">
              Kontakt
            </h2>
            <h3 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Začněme váš <br /> projekt.
            </h3>
            <p className="text-xl text-muted mb-12 leading-relaxed">
              Máte vizi? My máme nástroje. Napište nám a pojďme společně
              vytvořit něco výjimečného.
            </p>

            <div className="space-y-8">
              <a
                href="mailto:info@stchstudio.cz"
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-indigo-500 transition-colors duration-300">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted mb-1">Napište nám</p>
                  <p className="text-xl text-white font-medium group-hover:text-indigo-400 transition-colors break-all">
                    info@stchstudio.cz
                  </p>
                </div>
              </a>

              <a
                href="tel:+420702002964"
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-indigo-500 transition-colors duration-300">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted mb-1">Zavolejte</p>
                  <p className="text-xl text-white font-medium group-hover:text-indigo-400 transition-colors">
                    +420 702 002 964
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* --- PRAVÁ STRANA: Formulář --- */}
          {/* ZVĚTŠENO NA min-h-[650px] - To je zhruba výška celého formuláře, takže to neskočí. */}
          <div className="bg-white/5 p-6 md:p-12 rounded-3xl border border-white/10 backdrop-blur-sm relative min-h-[650px] flex flex-col justify-center">
            {isSuccess ? (
              /* --- NOVÁ DĚKOVACÍ OBRAZOVKA --- */
              /* h-full zajistí, že využije celou výšku 650px a vycentruje se */
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in duration-500">
                {/* Ikona s Glow efektem */}
                <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto text-green-400 border border-green-500/20 shadow-[0_0_40px_rgba(74,222,128,0.2)]">
                  <CheckCircle size={48} />
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    Zpráva odeslána.
                  </h3>
                  <p className="text-muted text-lg max-w-xs mx-auto leading-relaxed">
                    Děkujeme za poptávku. Ozveme se vám zpět do 24 hodin.
                  </p>
                </div>

                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors uppercase tracking-wider font-medium"
                >
                  Poslat další zprávu <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              /* --- FORMULÁŘ --- */
              <form
                onSubmit={handleSubmit}
                className="space-y-8 h-full flex flex-col justify-center"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm text-muted ml-2">Jméno</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Jan Novák"
                      className="w-full bg-transparent border-b border-white/20 px-4 py-3 text-base text-white focus:border-indigo-500 focus:outline-none transition-colors placeholder:text-white/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-muted ml-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jan@firma.cz"
                      className="w-full bg-transparent border-b border-white/20 px-4 py-3 text-base text-white focus:border-indigo-500 focus:outline-none transition-colors placeholder:text-white/20"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-sm text-muted ml-2">
                    Orientační rozpočet
                  </label>
                  <input type="hidden" name="budget" value={budget} />
                  <div className="flex flex-wrap gap-3">
                    {budgetOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setBudget(option)}
                        className={`px-4 py-2 rounded-full text-sm border transition-all duration-300 ${
                          budget === option
                            ? "bg-indigo-500 border-indigo-500 text-white"
                            : "bg-transparent border-white/20 text-muted hover:border-white/50"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-muted ml-2">O projektu</label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    placeholder="Potřebuji redesign webu pro realitní kancelář..."
                    className="w-full bg-transparent border-b border-white/20 px-4 py-3 text-base text-white focus:border-indigo-500 focus:outline-none transition-colors resize-none placeholder:text-white/20"
                  />
                </div>

                {errorMessage && (
                  <p className="text-red-400 text-sm text-center">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black font-bold py-4 rounded-full flex items-center justify-center gap-2 hover:bg-indigo-400 hover:text-white transition-all duration-300 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Odesílám..." : "Odeslat poptávku"}
                  {!isSubmitting && (
                    <Send
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
