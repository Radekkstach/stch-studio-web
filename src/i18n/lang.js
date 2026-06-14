export const SUPPORTED_LANGS = ["cs", "en"];
export const DEFAULT_LANG = "cs";
export const STORAGE_KEY = "stch-lang";

export const isSupported = (value) => SUPPORTED_LANGS.includes(value);

export const detectBrowserLang = () => {
  if (typeof navigator === "undefined") return DEFAULT_LANG;
  const candidates = [
    ...(navigator.languages || []),
    navigator.language,
  ].filter(Boolean);
  for (const tag of candidates) {
    const base = tag.toLowerCase().split("-")[0];
    if (isSupported(base)) return base;
  }
  return DEFAULT_LANG;
};

export const langFromPathname = (pathname) => {
  const seg = pathname.replace(/^\/+/, "").split("/")[0];
  return isSupported(seg) ? seg : DEFAULT_LANG;
};

const stripLangPrefix = (pathname) => {
  const cleaned = pathname.replace(/^\/+/, "");
  const [first, ...rest] = cleaned.split("/");
  if (isSupported(first)) {
    return "/" + rest.join("/");
  }
  return pathname;
};

const SEGMENT_MAP = {
  cs: { archiv: "archive", projekt: "project", "o-mne": "about" },
  en: { archive: "archiv", project: "projekt", about: "o-mne" },
};

const translateSegments = (cleanPath, fromLang, toLang) => {
  if (fromLang === toLang) return cleanPath;
  const map = SEGMENT_MAP[fromLang] ?? {};
  return cleanPath
    .split("/")
    .map((seg) => map[seg] ?? seg)
    .join("/");
};

export const buildLangPath = (path, lang) => {
  const fromLang = langFromPathname(path || "/");
  const clean = stripLangPrefix(path || "/");
  const translated = translateSegments(clean, fromLang, lang);

  if (lang === DEFAULT_LANG) {
    return translated === "" ? "/" : translated;
  }
  if (translated === "/" || translated === "") return `/${lang}`;
  return `/${lang}${translated}`;
};

export const resolveByPath = (key, dict) => {
  if (!dict) return undefined;
  return key.split(".").reduce((acc, part) => {
    if (acc == null) return undefined;
    return acc[part];
  }, dict);
};
