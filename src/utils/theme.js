import { useCallback, useEffect, useState } from "react";

// v2: puvodni klic "stch-theme" se zapisoval kazdemu navstevnikovi hned pri
// prvni navsteve (vychozi "dark"), takze by u nich zmena vychoziho motivu
// nezabrala. Novy klic se uklada jen kdyz si nekdo motiv sam prepne.
// Musi sedet s inline skriptem v index.html.
const STORAGE_KEY = "stch-theme-v2";
const DEFAULT_THEME = "light";

const getInitialTheme = () => {
  if (typeof window === "undefined") return DEFAULT_THEME;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    /* ignore storage errors */
  }
  return DEFAULT_THEME;
};

const applyTheme = (theme) => {
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
  root.style.colorScheme = theme;
};

export const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignore storage errors */
      }
      return next;
    });
  }, []);

  return { theme, toggleTheme, setTheme };
};
