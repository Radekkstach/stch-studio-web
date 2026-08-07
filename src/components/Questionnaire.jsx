import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, CheckCircle, Send } from "lucide-react";
import { useTranslation } from "../i18n";

const STORAGE_KEY = "stch-dotaznik";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpqjdbjl";

/**
 * Poradi a chovani otazek. Texty zijou v i18n pod `questionnaire.questions.<id>`,
 * tady je jen struktura — diky tomu se preklady nemusi starat o logiku a
 * podminky se nemusi duplikovat do obou jazyku.
 *
 * `showIf` dostava dosavadni odpovedi, `max` omezuje pocet voleb u `multi`.
 * Odpovedi se u choice/multi ukladaji jako indexy, ne jako texty — jinak by
 * prepnuti jazyka uprostred vyplnovani odpovedi znehodnotilo.
 */
const HAS_WEBSITE = (a) => a.hasWeb === 1 || a.hasWeb === 2;

const FLOW = [
  { id: "business", type: "text" },
  { id: "hasWeb", type: "choice" },
  { id: "webUrl", type: "text", optional: true, showIf: HAS_WEBSITE },
  { id: "webPain", type: "multi", optional: true, showIf: HAS_WEBSITE },
  { id: "goal", type: "choice" },
  { id: "action", type: "choice" },
  { id: "success", type: "longtext", optional: true },
  { id: "audience", type: "text", optional: true },
  { id: "features", type: "multi" },
  { id: "feel", type: "multi", max: 3 },
  { id: "inspiration", type: "longtext", optional: true },
  { id: "assets", type: "choice" },
  { id: "copy", type: "choice" },
  { id: "deadline", type: "choice" },
  { id: "budget", type: "choice" },
  { id: "contact", type: "contact" },
];

const EMPTY_CONTACT = { name: "", email: "", phone: "", note: "" };

const loadSaved = () => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;
    return parsed;
  } catch {
    return null;
  }
};

const Questionnaire = () => {
  const { t, lang } = useTranslation();
  const homePath = lang === "en" ? "/en" : "/";

  const [saved] = useState(loadSaved);
  const [started, setStarted] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState(() => saved?.answers ?? {});
  const [contact, setContact] = useState(() => ({
    ...EMPTY_CONTACT,
    ...(saved?.contact ?? {}),
  }));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const cardRef = useRef(null);
  const wasResumed = Boolean(saved && Object.keys(saved.answers ?? {}).length);

  const visible = useMemo(
    () => FLOW.filter((q) => !q.showIf || q.showIf(answers)),
    [answers],
  );

  // Odpoved "web nemame" schova dve nasledujici otazky. Kdyz se uzivatel vrati
  // a odpoved zmeni, muze ulozeny index ukazovat za konec — orizneme ho pri
  // vykreslovani, at se kvuli tomu nemusi pretacet dalsi render.
  const total = visible.length;
  const current = Math.min(stepIndex, total - 1);
  const step = visible[current];
  const qt = useCallback(
    (suffix) => t(`questionnaire.questions.${step.id}.${suffix}`, ""),
    [t, step.id],
  );
  const options = useMemo(() => {
    const value = t(`questionnaire.questions.${step.id}.options`, null);
    return Array.isArray(value) ? value : [];
  }, [t, step.id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Stranka je zatim rozpracovana: nevede na ni zadny odkaz, neni v sitemape
  // a tohle ji drzi mimo vyhledavace. Znacka se pridava jen po dobu, co je
  // stranka otevrena — index.html je pro cely web spolecny, takze natvrdo by
  // noindex shodil i vsechno ostatni. Az bude hotovo, cely blok smazat.
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => meta.remove();
  }, []);

  useEffect(() => {
    if (isSuccess) return;
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ answers, contact }),
      );
    } catch {
      /* soukromy rezim prohlizece — rozepsany dotaznik proste neulozime */
    }
  }, [answers, contact, isSuccess]);

  const answerOf = (id) => answers[id];

  const isAnswered = (() => {
    const value = answerOf(step.id);
    if (step.type === "choice") return typeof value === "number";
    if (step.type === "multi") return Array.isArray(value) && value.length > 0;
    if (step.type === "contact") return true;
    return typeof value === "string" && value.trim().length > 0;
  })();

  const canContinue = isAnswered || step.optional;

  const goNext = useCallback(() => {
    setStepIndex(Math.min(current + 1, total - 1));
    cardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [current, total]);

  const goPrev = useCallback(() => {
    setStepIndex(Math.max(current - 1, 0));
    cardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [current]);

  const selectChoice = (index) => {
    setAnswers((prev) => ({ ...prev, [step.id]: index }));
    // Male zdrzeni, at je videt, co se vybralo, nez obrazovka odskoci dal.
    window.setTimeout(goNext, 180);
  };

  const toggleMulti = (index) => {
    setAnswers((prev) => {
      const selected = Array.isArray(prev[step.id]) ? prev[step.id] : [];
      if (selected.includes(index)) {
        return { ...prev, [step.id]: selected.filter((i) => i !== index) };
      }
      if (step.max && selected.length >= step.max) return prev;
      return { ...prev, [step.id]: [...selected, index] };
    });
  };

  const setText = (value) => {
    setAnswers((prev) => ({ ...prev, [step.id]: value }));
  };

  // Klavesnice: cisla vybiraji moznosti, Enter posouva dal. Ve formularovych
  // polich cisla nechavame byt, at jde napsat treba "10 let na trhu".
  useEffect(() => {
    if (!started || isSuccess) return;

    const onKeyDown = (e) => {
      const tag = e.target?.tagName;
      const typing = tag === "INPUT" || tag === "TEXTAREA";

      if (!typing && /^[1-9]$/.test(e.key)) {
        const index = Number(e.key) - 1;
        if (index >= options.length) return;
        if (step.type === "choice") {
          e.preventDefault();
          selectChoice(index);
        } else if (step.type === "multi") {
          e.preventDefault();
          toggleMulti(index);
        }
        return;
      }

      if (e.key === "Enter" && step.type !== "contact") {
        if (tag === "TEXTAREA" && !e.ctrlKey && !e.metaKey) return;
        if (!canContinue) return;
        e.preventDefault();
        goNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  const buildSummary = () => {
    const lines = [];
    for (const q of visible) {
      if (q.type === "contact") continue;
      const label = t(`questionnaire.questions.${q.id}.title`);
      const raw = answers[q.id];
      const opts = t(`questionnaire.questions.${q.id}.options`, null);
      let value;

      if (q.type === "choice") {
        value = typeof raw === "number" ? opts?.[raw] : "";
      } else if (q.type === "multi") {
        value = (Array.isArray(raw) ? raw : [])
          .map((i) => opts?.[i])
          .filter(Boolean)
          .join(", ");
      } else {
        value = typeof raw === "string" ? raw.trim() : "";
      }

      lines.push(`${label}\n${value || t("questionnaire.unanswered")}`);
    }
    return lines.join("\n\n");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!contact.name.trim() || !contact.email.trim()) {
      setErrorMessage(t("questionnaire.requiredError"));
      return;
    }

    setIsSubmitting(true);

    const payload = new FormData();
    payload.append("name", contact.name.trim());
    payload.append("email", contact.email.trim());
    if (contact.phone.trim()) payload.append("phone", contact.phone.trim());
    if (contact.note.trim()) payload.append("note", contact.note.trim());
    payload.append(
      "_subject",
      `${t("questionnaire.eyebrow")}: ${answers.business || contact.name.trim()}`,
    );
    payload.append(t("questionnaire.summaryLabel"), buildSummary());

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setIsSuccess(true);
        setIsSubmitting(false);
        try {
          window.localStorage.removeItem(STORAGE_KEY);
        } catch {
          /* ignore */
        }
      } else {
        const data = await response.json().catch(() => ({}));
        setErrorMessage(data.error || t("questionnaire.genericError"));
        setIsSubmitting(false);
      }
    } catch {
      setErrorMessage(t("questionnaire.networkError"));
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-2xl border border-foreground/15 bg-foreground/[0.04] px-5 py-4 text-lg text-foreground placeholder:text-muted/60 outline-none transition-colors duration-200 focus:border-indigo-400/70 focus:bg-foreground/[0.06]";

  const optionClass = (active) =>
    `group flex w-full items-center gap-4 rounded-2xl border p-4 md:p-5 text-left transition-[background-color,border-color,transform] duration-200 ${
      active
        ? "border-indigo-400/70 bg-indigo-500/10"
        : "border-foreground/10 bg-foreground/[0.03] hover:border-foreground/25 hover:bg-foreground/[0.06]"
    }`;

  const renderBadge = (index, active, rounded) => (
    <span
      className={`flex h-8 w-8 shrink-0 items-center justify-center ${
        rounded ? "rounded-lg" : "rounded-full"
      } border text-sm font-mono transition-colors duration-200 ${
        active
          ? "border-indigo-400/70 bg-indigo-500 text-white"
          : "border-foreground/15 text-muted group-hover:border-foreground/30"
      }`}
      aria-hidden="true"
    >
      {active && !rounded ? <Check size={16} /> : index + 1}
    </span>
  );

  if (isSuccess) {
    return (
      <main className="relative min-h-screen bg-background pt-32 pb-24">
        <div className="container mx-auto flex max-w-2xl flex-col items-center px-6 text-center">
          <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-green-500/20 bg-green-500/10 text-green-400 shadow-[0_0_40px_rgba(74,222,128,0.2)]">
            <CheckCircle size={44} />
          </div>
          <h1 className="mb-5 text-3xl font-bold text-foreground md:text-4xl">
            {t("questionnaire.success.title")}
          </h1>
          <p className="mb-10 text-lg leading-relaxed text-muted">
            {t("questionnaire.success.description")}
          </p>
          <Link
            to={homePath}
            className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-3.5 text-sm font-semibold text-background transition-colors duration-300 hover:bg-indigo-500 hover:text-white"
          >
            {t("questionnaire.success.home")}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-background pt-28 pb-24 md:pt-32">
      <div className="section-glow-indigo pointer-events-none absolute -top-24 -left-[15vw] h-[92vw] w-[92vw] md:-top-28 md:-left-24 md:h-[820px] md:w-[820px]" />

      <div className="container relative z-10 mx-auto max-w-3xl px-6">
        <Link
          to={homePath}
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted transition-colors duration-300 hover:text-foreground"
        >
          <ArrowLeft size={16} />
          {t("questionnaire.back")}
        </Link>

        {!started ? (
          <div className="q-step">
            <p className="mb-4 font-mono text-sm uppercase tracking-widest text-indigo-400">
              {t("questionnaire.eyebrow")}
            </p>
            <h1 className="mb-6 text-3xl font-bold leading-tight text-foreground md:text-5xl">
              {t("questionnaire.title")[0]}{" "}
              <br className="hidden md:block" />
              {t("questionnaire.title")[1]}
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted">
              {t("questionnaire.lead")}
            </p>
            <button
              type="button"
              onClick={() => setStarted(true)}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-semibold text-background transition-[background-color,color,transform] duration-300 hover:scale-[1.03] hover:bg-indigo-500 hover:text-white"
            >
              {t("questionnaire.start")}
              <ArrowRight size={16} />
            </button>
            <p className="mt-5 text-sm text-muted/70">
              {t("questionnaire.duration")}
            </p>
            {wasResumed && (
              <p className="mt-6 text-sm text-indigo-400">
                {t("questionnaire.resumed")}
              </p>
            )}
          </div>
        ) : (
          <div ref={cardRef} className="scroll-mt-28">
            <div className="mb-10">
              <div className="mb-3 flex items-center justify-between font-mono text-xs uppercase tracking-widest text-muted">
                <span>
                  {t("questionnaire.progress")} {current + 1}{" "}
                  {t("questionnaire.of")} {total}
                </span>
                {step.optional && <span>{t("questionnaire.optional")}</span>}
              </div>
              <div
                className="h-1 w-full overflow-hidden rounded-full bg-foreground/10"
                role="progressbar"
                aria-valuenow={current + 1}
                aria-valuemin={1}
                aria-valuemax={total}
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 transition-[width] duration-500 ease-out"
                  style={{ width: `${((current + 1) / total) * 100}%` }}
                />
              </div>
            </div>

            <div key={step.id} className="q-step">
              <h1 className="mb-3 text-2xl font-bold leading-tight text-foreground md:text-4xl">
                {qt("title")}
              </h1>
              {qt("hint") && (
                <p className="mb-8 text-base leading-relaxed text-muted md:text-lg">
                  {qt("hint")}
                </p>
              )}
              {!qt("hint") && <div className="mb-8" />}

              {step.type === "choice" && (
                <div className="flex flex-col gap-3">
                  {options.map((option, index) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => selectChoice(index)}
                      aria-pressed={answerOf(step.id) === index}
                      className={optionClass(answerOf(step.id) === index)}
                    >
                      {renderBadge(index, answerOf(step.id) === index, true)}
                      <span className="text-base text-foreground md:text-lg">
                        {option}
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {step.type === "multi" && (
                <>
                  <p className="mb-4 text-sm text-muted/70">
                    {t("questionnaire.multiHint")}
                  </p>
                  <div className="flex flex-col gap-3">
                    {options.map((option, index) => {
                      const current = Array.isArray(answerOf(step.id))
                        ? answerOf(step.id)
                        : [];
                      const active = current.includes(index);
                      const blocked =
                        !active && step.max && current.length >= step.max;

                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => toggleMulti(index)}
                          aria-pressed={active}
                          disabled={Boolean(blocked)}
                          className={`${optionClass(active)} ${
                            blocked ? "cursor-not-allowed opacity-40" : ""
                          }`}
                        >
                          {renderBadge(index, active, false)}
                          <span className="text-base text-foreground md:text-lg">
                            {option}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </>
              )}

              {step.type === "text" && (
                <input
                  type="text"
                  autoFocus
                  value={answerOf(step.id) ?? ""}
                  onChange={(e) => setText(e.target.value)}
                  placeholder={qt("placeholder")}
                  className={inputClass}
                />
              )}

              {step.type === "longtext" && (
                <textarea
                  rows={4}
                  autoFocus
                  value={answerOf(step.id) ?? ""}
                  onChange={(e) => setText(e.target.value)}
                  placeholder={qt("placeholder")}
                  className={`${inputClass} resize-none`}
                />
              )}

              {step.type === "contact" && (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <label className="flex flex-col gap-2">
                      <span className="text-sm text-muted">{qt("name")}</span>
                      <input
                        type="text"
                        required
                        value={contact.name}
                        onChange={(e) =>
                          setContact((c) => ({ ...c, name: e.target.value }))
                        }
                        placeholder={qt("namePlaceholder")}
                        className={inputClass}
                      />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-sm text-muted">{qt("email")}</span>
                      <input
                        type="email"
                        required
                        value={contact.email}
                        onChange={(e) =>
                          setContact((c) => ({ ...c, email: e.target.value }))
                        }
                        placeholder={qt("emailPlaceholder")}
                        className={inputClass}
                      />
                    </label>
                  </div>
                  <label className="flex flex-col gap-2">
                    <span className="text-sm text-muted">{qt("phone")}</span>
                    <input
                      type="tel"
                      value={contact.phone}
                      onChange={(e) =>
                        setContact((c) => ({ ...c, phone: e.target.value }))
                      }
                      placeholder={qt("phonePlaceholder")}
                      className={inputClass}
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-sm text-muted">{qt("note")}</span>
                    <textarea
                      rows={3}
                      value={contact.note}
                      onChange={(e) =>
                        setContact((c) => ({ ...c, note: e.target.value }))
                      }
                      placeholder={qt("notePlaceholder")}
                      className={`${inputClass} resize-none`}
                    />
                  </label>

                  {errorMessage && (
                    <p className="text-sm text-red-400">{errorMessage}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-semibold text-background transition-[background-color,color,opacity] duration-300 hover:bg-indigo-500 hover:text-white disabled:opacity-60"
                  >
                    {isSubmitting
                      ? t("questionnaire.submitting")
                      : t("questionnaire.submit")}
                    {!isSubmitting && <Send size={16} />}
                  </button>

                  <p className="text-xs leading-relaxed text-muted/70">
                    {t("contact.form.consentBefore")}{" "}
                    <button
                      type="button"
                      onClick={() =>
                        window.dispatchEvent(new CustomEvent("stch:open-gdpr"))
                      }
                      className="underline underline-offset-2 transition-colors hover:text-foreground"
                    >
                      {t("contact.form.consentLink")}
                    </button>{" "}
                    {t("contact.form.consentAfter")}
                  </p>
                </form>
              )}
            </div>

            <div className="mt-10 flex items-center gap-4">
              {current > 0 && (
                <button
                  type="button"
                  onClick={goPrev}
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-3 text-sm text-muted transition-colors duration-300 hover:border-foreground/30 hover:text-foreground"
                >
                  <ArrowLeft size={16} />
                  {t("questionnaire.prev")}
                </button>
              )}

              {step.type !== "choice" && step.type !== "contact" && (
                <button
                  type="button"
                  onClick={goNext}
                  disabled={!canContinue}
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-background transition-[background-color,color,opacity] duration-300 hover:bg-indigo-500 hover:text-white disabled:opacity-40"
                >
                  {isAnswered
                    ? t("questionnaire.next")
                    : t("questionnaire.skip")}
                  <ArrowRight size={16} />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Questionnaire;
