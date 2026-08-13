import Img1 from "../assets/jmlmont.webp";
import Img4 from "../assets/octagontrebic.webp";
import Img5 from "../assets/barpraha.webp";
import Img6 from "../assets/runclubznaim.webp";
import Runclub1 from "../assets/runclub-admin.webp";
import Runclub2 from "../assets/runclub-plakat.webp";
import Runclub3 from "../assets/runclub-mobil.webp";

// Each project carries per-language fields. New languages = add new keys.
// Slug stays stable across languages so detail pages can use one source of truth.
// `caseStudy` is optional — projects without it render a slimmer detail page.
//
// Poradi a vyber se ridi dvema nezavislymi vecmi:
//   1. Poradi v tomhle poli = poradi vsude na webu (archiv, homepage,
//      prev/next v case study). Chces neco presunout? Presun blok.
//   2. `featured: true` = projekt se navic ukaze na homepage.
//      Kolik jich je, je na tobe; jejich vzajemne poradi urcuje zase pole.
// Zadna cisla pozic — jeden zdroj pravdy, nic se nemuze rozejit.
// Identifikatorem projektu je `slug` (unikatni, stabilni napric jazyky).
export const projects = [
  {
    slug: "run-club-znaim",
    featured: true,
    image: Img6,
    year: "2026",
    link: "https://runclubznaim.cz",
    title: { cs: "Run Club Znaim", en: "Run Club Znaim" },
    category: { cs: "Web s administrací", en: "Website with CMS" },
    description: {
      cs: "Web běžecké komunity, kde si klub sám spravuje harmonogram, sbírá přihlášky na jednotlivé běhy a jedním klikem si vygeneruje plakát na Instagram.",
      en: "A website for a running community where the club manages its own schedule, collects sign-ups for individual runs and generates Instagram posters in one click.",
    },
    caseStudy: {
      client: "Run Club Znaim",
      timeline: { cs: "2 týdny", en: "2 weeks" },
      techStack: ["Astro", "TypeScript", "mySTCH", "Google Sheets", "Vercel"],
      tagline: {
        cs: "Web běžeckého klubu, který si celý — obsah, přihlášky i grafiku na sítě — obsluhuje klub sám.",
        en: "A running club's website that the club runs entirely on its own — content, sign-ups and social media graphics.",
      },
      challenge: {
        cs: "Klub žil jen na Instagramu. Harmonogram běhů se posílal jako obrázek do stories, takže o srazech se lidé dozvídali náhodně a nikdo dopředu nevěděl, kolik jich přijde. Každá změna termínu navíc znamenala čekat na externího grafika — i drobná úprava se táhla týdny. Klub potřeboval jedno stálé místo s aktuálním programem a hlavně možnost si všechno měnit sám.",
        en: "The club lived on Instagram alone. The schedule went out as an image in stories, so people learned about meet-ups by chance and nobody knew in advance how many would show up. On top of that, every date change meant waiting on an external designer — even a tiny edit dragged on for weeks. The club needed one permanent place with the current programme, and above all the ability to change everything itself.",
      },
      approach: {
        cs: "Postavili jsme web v duchu tištěné vývěsky — každý měsíc má vlastní barvu a program je čitelný na první pohled z mobilu. K němu patří vlastní administrace na heslo: klub zadá běh (den, čas, místo, typ, popis), změny si nejdřív odloží stranou a jedním tlačítkem je propíše na web. U každého běhu je přihlašovací formulář na jméno a e-mail, na webu se veřejně ukazuje počet přihlášených, přihlášenému přijde pozvánka do kalendáře a klub má v administraci jmenný seznam. Součástí je i odběr novinek e-mailem a generátor plakátů — z hotového harmonogramu vznikne jedním klikem obrázek na Instagram (post i story, včetně varianty s mapou místa srazu) ve stejné grafice jako web, takže klub už grafika nepotřebuje.",
        en: "We built the site to feel like a printed notice board — each month has its own colour and the programme is legible at a glance on a phone. Alongside it comes a password-protected admin: the club enters a run (day, time, place, type, description), keeps the changes aside as a draft and pushes them live with one button. Every run has a sign-up form asking only for a name and e-mail, the number of registrations is shown publicly, everyone who signs up gets a calendar invitation, and the club sees the name list in the admin. There's also an e-mail newsletter and a poster generator — one click turns the finished schedule into an Instagram image (post or story, including a version with a map of the meeting point) in the same visual language as the site, so the club no longer needs a designer.",
      },
      gallery: [
        {
          image: Runclub1,
          shape: "wide",
          title: {
            cs: "Vlastní administrace",
            en: "An admin of their own",
          },
          caption: {
            cs: "Harmonogram se zadává jako obyčejný formulář — den, čas, místo, typ běhu. Změny se nejdřív odloží stranou, klub si je v klidu projde a na web je pustí jedním tlačítkem.",
            en: "The schedule is entered like an ordinary form — day, time, place, type of run. Changes are set aside first, the club reviews them in peace and pushes them live with a single button.",
          },
        },
        {
          image: Runclub2,
          shape: "tall",
          title: {
            cs: "Plakát na jedno kliknutí",
            en: "A poster in one click",
          },
          caption: {
            cs: "Z hotového harmonogramu vznikne obrázek na Instagram ve stejné grafice jako web — post i story, včetně varianty s mapou místa srazu. Na příspěvek na sítě už klub nepotřebuje grafika ani čekat týdny.",
            en: "The finished schedule turns into an Instagram image in the same visual language as the site — post or story, including a version with a map of the meeting point. The club no longer needs a designer, or weeks of waiting, to post.",
          },
        },
        {
          image: Runclub3,
          shape: "tall",
          title: {
            cs: "Přihláška přímo u běhu",
            en: "Sign-ups right at the run",
          },
          caption: {
            cs: "Stačí jméno a e-mail. Návštěvník rovnou vidí, kolik lidí už jde, do e-mailu mu přijde pozvánka do kalendáře — a klub má v administraci jmenný seznam, takže dopředu ví, s kolika běžci počítat.",
            en: "Just a name and an e-mail. Visitors see straight away how many people are coming, they get a calendar invitation by e-mail — and the club has the name list in the admin, so it knows how many runners to expect.",
          },
        },
      ],
    },
  },
  {
    slug: "octagon-trebic",
    featured: true,
    image: Img4,
    year: "2026",
    link: "https://posilovnaoctagon.cz",
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
    slug: "bar-praha",
    featured: true,
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
    gallery: (cs.gallery ?? []).map((g) => ({
      image: g.image,
      shape: g.shape ?? "wide",
      title: g.title?.[lang] ?? g.title?.cs,
      caption: g.caption?.[lang] ?? g.caption?.cs,
    })),
  };
};

export const localizeProject = (project, lang) => ({
  slug: project.slug,
  featured: project.featured ?? false,
  image: project.image,
  year: project.year,
  link: project.link,
  title: project.title[lang] ?? project.title.cs,
  category: project.category[lang] ?? project.category.cs,
  description: project.description[lang] ?? project.description.cs,
  caseStudy: localizeCaseStudy(project.caseStudy, lang),
});

// Vsechny projekty v poradi pole — archiv.
export const getLocalizedProjects = (lang) =>
  projects.map((p) => localizeProject(p, lang));

// Jen oznacene `featured`, porad v poradi pole — homepage.
export const getFeaturedProjects = (lang) =>
  projects.filter((p) => p.featured).map((p) => localizeProject(p, lang));

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
