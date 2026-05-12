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

export const buildLangPath = (path, lang) => {
  const clean = stripLangPrefix(path || "/");
  if (lang === DEFAULT_LANG) {
    return clean === "" ? "/" : clean;
  }
  if (clean === "/" || clean === "") return `/${lang}`;
  return `/${lang}${clean}`;
};

export const resolveByPath = (key, dict) => {
  if (!dict) return undefined;
  return key.split(".").reduce((acc, part) => {
    if (acc == null) return undefined;
    return acc[part];
  }, dict);
};
