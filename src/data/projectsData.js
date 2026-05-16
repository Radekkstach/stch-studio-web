import Img1 from "../assets/jmlmont.webp";
import Img2 from "../assets/kryptoterminal.webp";
import Img3 from "../assets/aurawellnes.webp";
import Img4 from "../assets/octagontrebic.webp";
import Img5 from "../assets/barpraha.webp";

// Each project carries per-language fields. New languages = add new keys.
// Slug stays stable across languages so detail pages can use one source of truth.
// `caseStudy` is optional — projects without it render a slimmer detail page.
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
    caseStudy: {
      client: "JML Mont s.r.o",
      timeline: { cs: "týden", en: "1 week" },
      techStack: ["React", "Vite", "Tailwind", "i18n", "Vercel"],
      tagline: {
        cs: "Prezentační web s plnou podporou tří jazyků a kontaktním formulářem.",
        en: "A presentation site with full support for three languages and a contact form.",
      },
      challenge: {
        cs: "Klient potřeboval reprezentativní web, který by oslovil český i zahraniční trh (Německo, Rakousko). Předchozí stránka byla zastaralá, pomalá a neuměla cizí jazyky.",
        en: "The client needed a representative site that would address both the Czech and foreign markets (Germany, Austria). The previous site was outdated, slow, and didn't support other languages.",
      },
      approach: {
        cs: "Postavil jsem trojjazyčný React web (CZ/EN/DE) se zaměřením na rychlost a SEO. Veškerý obsah jde přepínat bez reloadu, URL prefix umožňuje sdílet konkrétní jazyk a vyhledávači indexují každou jazykovou mutaci zvlášť.",
        en: "I built a trilingual React site (CZ/EN/DE) focused on speed and SEO. All content switches without reload, the URL prefix allows sharing a specific language and search engines index each language variant separately.",
      },
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
    caseStudy: {
      client: "Bar Praha · Znojmo",
      timeline: { cs: "2 týdny", en: "2 weeks" },
      techStack: ["React", "Tailwind", "Vite", "GSAP", "Vercel"],
      tagline: {
        cs: "Web pro lokální bar, který každý víkend přivádí nové rezervace přes mobil.",
        en: "A website for a local bar that brings in fresh mobile reservations every weekend.",
      },
      challenge: {
        cs: "Bar fungoval jen přes Instagram a telefonáty. Při plné obsazenosti unikaly hovory, hosté nevěděli, kdy je otevřeno, a online přítomnost prakticky neexistovala. Klient potřeboval levný, ale moderní web s rezervacemi z mobilu.",
        en: "The bar operated only via Instagram and phone calls. When fully booked, calls were missed, guests didn't know the opening hours and online presence was essentially non-existent. The client needed an affordable yet modern site with mobile reservations.",
      },
      approach: {
        cs: "Zaměřil jsem se na mobilní zážitek (přes 80 % návštěvníků z mobilu) — velká tlačítka pro volání a rezervaci hned v hero, otevírací doba čitelná v jednom kliknutí, mapa s naváděním. Vše nasvícené barevnou paletou interiéru baru, aby web působil jako přirozené pokračování značky.",
        en: "I focused on the mobile experience (over 80 % of visitors from mobile) — large buttons for calling and reservation right in the hero, opening hours readable in a single tap, map with navigation. All lit with the bar's interior colour palette so the site felt like a natural extension of the brand.",
      },
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
    caseStudy: {
      client: "Octagon Třebíč",
      timeline: { cs: "3 týdny", en: "3 weeks" },
      techStack: ["React", "Tailwind", "GSAP", "Netlify"],
      tagline: {
        cs: "Vizuálně úderná stránka pro bojový klub, která buduje silnou osobní značku.",
        en: "A visually striking page for a fight club that builds a strong personal brand.",
      },
      challenge: {
        cs: "Klub potřeboval působit jako velký, profesionální tým — ne jako sportovní oddíl s pár stránkami na sociálních sítích. Cílem bylo přitáhnout nové členy a vzbudit důvěru, že kvalita tréninků odpovídá vizuálu.",
        en: "The club needed to look like a big, professional team — not a small group with a couple of social media pages. The goal was to attract new members and build trust that training quality matches the visual.",
      },
      approach: {
        cs: "Tmavý design s dynamickými GSAP animacemi, plné HD foto- a video-obsah, jasná hierarchie sekcí (trenéři, ceník, rozvrh, kontakt). Vše rychle načítá i na slabším mobilním připojení.",
        en: "Dark design with dynamic GSAP animations, full-HD photo and video content, clear hierarchy of sections (coaches, pricing, schedule, contact). Everything loads fast even on a weaker mobile connection.",
      },
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
const localizeCaseStudy = (cs, lang) => {
  if (!cs) return null;
  return {
    client: cs.client,
    timeline: cs.timeline?.[lang] ?? cs.timeline?.cs,
    techStack: cs.techStack ?? [],
    tagline: cs.tagline?.[lang] ?? cs.tagline?.cs,
    challenge: cs.challenge?.[lang] ?? cs.challenge?.cs,
    approach: cs.approach?.[lang] ?? cs.approach?.cs,
    results: (cs.results ?? []).map((r) => ({
      value: r.value,
      label: r.label?.[lang] ?? r.label?.cs,
    })),
  };
};

export const localizeProject = (project, lang) => ({
  id: project.id,
  slug: project.slug,
  image: project.image,
  year: project.year,
  link: project.link,
  title: project.title[lang] ?? project.title.cs,
  category: project.category[lang] ?? project.category.cs,
  description: project.description[lang] ?? project.description.cs,
  caseStudy: localizeCaseStudy(project.caseStudy, lang),
});

export const getLocalizedProjects = (lang) =>
  projects.map((p) => localizeProject(p, lang));

export const findProjectBySlug = (slug, lang) => {
  const project = projects.find((p) => p.slug === slug);
  return project ? localizeProject(project, lang) : null;
};

export const getAdjacentProject = (slug, lang) => {
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  const prev = idx > 0 ? localizeProject(projects[idx - 1], lang) : null;
  const next =
    idx < projects.length - 1 ? localizeProject(projects[idx + 1], lang) : null;
  return { prev, next };
};

