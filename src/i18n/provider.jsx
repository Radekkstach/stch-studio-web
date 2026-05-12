import React, { useCallback, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import cs from "./cs";
import en from "./en";
import {
  DEFAULT_LANG,
  STORAGE_KEY,
  buildLangPath,
  isSupported,
  langFromPathname,
  resolveByPath,
} from "./lang";
import { LanguageContext } from "./context";

const dictionaries = { cs, en };

export const LanguageProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const lang = langFromPathname(location.pathname);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const setLang = useCallback(
    (next) => {
      if (!isSupported(next) || next === lang) return;
      const target =
        buildLangPath(location.pathname, next) +
        location.search +
        location.hash;
      navigate(target);
    },
    [lang, location.pathname, location.search, location.hash, navigate],
  );

  const t = useCallback(
    (key, fallback) => {
      const value =
        resolveByPath(key, dictionaries[lang]) ??
        resolveByPath(key, dictionaries[DEFAULT_LANG]);
      if (value == null) return fallback ?? key;
      return value;
    },
    [lang],
  );

  const buildPath = useCallback((path) => buildLangPath(path, lang), [lang]);

  const value = useMemo(
    () => ({ lang, t, setLang, buildPath }),
    [lang, t, setLang, buildPath],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
