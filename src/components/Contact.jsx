import React, { useState } from "react";
import { Mail, Phone, Send, CheckCircle, ArrowRight } from "lucide-react";
import { useTranslation } from "../i18n";

const Contact = () => {
  const { t } = useTranslation();
  const budgetOptions = t("contact.form.budgetOptions");

  const [budget, setBudget] = useState(budgetOptions[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(e.target);

    try {
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
        setErrorMessage(data.error || t("contact.form.genericError"));
        setIsSubmitting(false);
      }
    } catch {
      setErrorMessage(t("contact.form.networkError"));
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="Kontakt"
      className="py-24 md:py-32 bg-background relative z-10 "
    >
      <div className="absolute top-0 left-[-10%] w-[340px] h-[340px] md:w-[500px] md:h-[500px] bg-indigo-600/20 blur-[20px] md:blur-[120px] rounded-full pointer-events-none -z-10 mix-blend-screen opacity-35 md:opacity-50" />
      <div className="absolute bottom-0 right-[-10%] w-[280px] h-[280px] md:w-[400px] md:h-[400px] bg-blue-500/50 blur-[18px] md:blur-[100px] rounded-full pointer-events-none -z-10 opacity-30 md:opacity-40" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32">
          <div>
            <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-6">
              {t("contact.eyebrow")}
            </h2>
            <h3 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
              {t("contact.titleLine1")} <br /> {t("contact.titleLine2")}
            </h3>
            <p className="text-xl text-muted mb-12 leading-relaxed">
              {t("contact.lead")}
            </p>

            <div className="space-y-8">
              <a
                href="mailto:info@stchstudio.cz"
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center group-hover:bg-indigo-500 group-hover:border-indigo-500 transition-colors duration-300">
                  <Mail className="text-foreground group-hover:text-white transition-colors" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted mb-1">{t("contact.writeUs")}</p>
                  <p className="text-xl text-foreground font-medium group-hover:text-indigo-400 transition-colors break-all">
                    info@stchstudio.cz
                  </p>
                </div>
              </a>

              <a
                href="tel:+420702002964"
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center group-hover:bg-indigo-500 group-hover:border-indigo-500 transition-colors duration-300">
                  <Phone className="text-foreground group-hover:text-white transition-colors" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted mb-1">{t("contact.callUs")}</p>
                  <p className="text-xl text-foreground font-medium group-hover:text-indigo-400 transition-colors">
                    +420 702 002 964
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-foreground/[0.04] p-6 md:p-12 rounded-3xl border border-foreground/10 backdrop-blur-0 md:backdrop-blur-sm relative min-h-[650px] flex flex-col justify-center">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto text-green-400 border border-green-500/20 shadow-[0_0_40px_rgba(74,222,128,0.2)]">
                  <CheckCircle size={48} />
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                    {t("contact.success.title")}
                  </h3>
                  <p className="text-muted text-lg max-w-xs mx-auto leading-relaxed">
                    {t("contact.success.description")}
                  </p>
                </div>

                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors uppercase tracking-wider font-medium"
                >
                  {t("contact.success.again")} <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-8 h-full flex flex-col justify-center"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm text-muted ml-2">{t("contact.form.name")}</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder={t("contact.form.namePlaceholder")}
                      className="w-full bg-transparent border-b border-foreground/20 px-4 py-3 text-base text-foreground focus:border-indigo-500 focus:outline-none transition-colors placeholder:text-foreground/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-muted ml-2">{t("contact.form.email")}</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder={t("contact.form.emailPlaceholder")}
                      className="w-full bg-transparent border-b border-foreground/20 px-4 py-3 text-base text-foreground focus:border-indigo-500 focus:outline-none transition-colors placeholder:text-foreground/30"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-sm text-muted ml-2">
                    {t("contact.form.budget")}
                  </label>
                  <input type="hidden" name="budget" value={budget} />
                  <div className="flex flex-wrap gap-3">
                    {budgetOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setBudget(option)}
                        className={`px-4 py-2 rounded-full text-sm border transition-[background-color,border-color] duration-300 ${
                          budget === option
                            ? "bg-indigo-500 border-indigo-500 text-white"
                            : "bg-transparent border-foreground/20 text-muted hover:border-foreground/50"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-muted ml-2">{t("contact.form.about")}</label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    placeholder={t("contact.form.aboutPlaceholder")}
                    className="w-full bg-transparent border-b border-foreground/20 px-4 py-3 text-base text-foreground focus:border-indigo-500 focus:outline-none transition-colors resize-none placeholder:text-foreground/30"
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
                  className="w-full bg-foreground text-background font-bold py-4 rounded-full flex items-center justify-center gap-2 hover:bg-indigo-500 hover:text-white transition-[background-color,color] duration-300 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t("contact.form.submitting") : t("contact.form.submit")}
                  {!isSubmitting && (
                    <Send
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  )}
                </button>

                <p className="text-xs text-muted/80 text-center leading-relaxed -mt-2">
                  {t("contact.form.consentBefore")}{" "}
                  <button
                    type="button"
                    onClick={() =>
                      window.dispatchEvent(new CustomEvent("stch:open-gdpr"))
                    }
                    className="underline underline-offset-2 hover:text-foreground transition-colors"
                  >
                    {t("contact.form.consentLink")}
                  </button>{" "}
                  {t("contact.form.consentAfter")}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
