import { createContext, useContext } from "react";
import { DEFAULT_LANG } from "./lang";

export const LanguageContext = createContext({
  lang: DEFAULT_LANG,
  t: (key) => key,
  setLang: () => {},
  buildPath: (path) => path,
});

export const useTranslation = () => useContext(LanguageContext);
