import Img1 from "../assets/jmlmont.webp";
import Img2 from "../assets/kryptoterminal.webp";
import Img3 from "../assets/aurawellnes.webp";
import Img4 from "../assets/octagontrebic.webp";
import Img5 from "../assets/barpraha.webp";

// Each project carries per-language fields. New languages = add new keys.
// Slug stays stable across languages so detail pages can use one source of truth.
export const projects = [
  {
    id: 1,
    slug: "jml-mont",
    image: Img1,
    year: "2025",
    link: "https://jmlmont.eu",
    title: { cs: "JML Mont s.r.o", en: "JML Mont s.r.o" },
    category: { cs: "Web", en: "Website" },
    description: {
      cs: "Moderní a přehledná prezentace s plnou podporou tří jazyků (CZ/EN/DE).",
      en: "Modern, clean presentation with full support for three languages (CZ/EN/DE).",
    },
  },
  {
    id: 2,
    slug: "bar-praha",
    image: Img5,
    year: "2026",
    link: "https://barpraha-znojmo.cz/",
    title: { cs: "Bar Praha", en: "Bar Praha" },
    category: { cs: "Web", en: "Website" },
    description: {
      cs: "Svižný a přehledný web vytvořený na míru pro bar ve Znojmě, optimalizovaný pro všechna mobilní zařízení.",
      en: "A fast, clean website tailor-made for a bar in Znojmo, optimised for every mobile device.",
    },
  },
  {
    id: 3,
    slug: "octagon-trebic",
    image: Img4,
    year: "2026",
    link: "https://stachradek-octagon.netlify.app/",
    title: { cs: "Octagon Třebíč", en: "Octagon Třebíč" },
    category: { cs: "Web", en: "Website" },
    description: {
      cs: "Dynamická a vizuálně úderná stránka, která buduje silnou osobní značku a láká návštěvníky.",
      en: "A dynamic, visually striking page that builds a strong personal brand and pulls visitors in.",
    },
  },
  {
    id: 4,
    slug: "aura-wellness",
    image: Img3,
    year: "2026",
    link: "https://stachradek-wellness.netlify.app/",
    title: { cs: "Aura - Wellness", en: "Aura - Wellness" },
    category: { cs: "Moderní SPA", en: "Modern SPA" },
    description: {
      cs: "Zaměření na mikro-interakce a plynulý uživatelský zážitek.",
      en: "A focus on micro-interactions and a smooth user experience.",
    },
  },
  {
    id: 5,
    slug: "krypto-terminal",
    image: Img2,
    year: "2026",
    link: "https://stachradek-krypto.netlify.app/",
    title: { cs: "Krypto Terminál", en: "Crypto Terminal" },
    category: { cs: "Development", en: "Development" },
    description: {
      cs: "Aplikace s grafy kryptoměn.",
      en: "App with cryptocurrency charts.",
    },
  },
];

// Localised view of a single project for a given language.
export const localizeProject = (project, lang) => ({
  id: project.id,
  slug: project.slug,
  image: project.image,
  year: project.year,
  link: project.link,
  title: project.title[lang] ?? project.title.cs,
  category: project.category[lang] ?? project.category.cs,
  description: project.description[lang] ?? project.description.cs,
});

export const getLocalizedProjects = (lang) =>
  projects.map((p) => localizeProject(p, lang));
