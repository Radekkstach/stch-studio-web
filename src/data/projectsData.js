// src/data/projectsData.js
import Img1 from "../assets/jmlmont.webp";
import Img2 from "../assets/kryptoterminal.webp";
import Img3 from "../assets/aurawellnes.webp";
import Img4 from "../assets/octagontrebic.webp";
import Img5 from "../assets/barpraha.webp";


export const projects = [
  {
        id:1,
      title: "JML Mont s.r.o",
      category: "Web",
      description: "Moderní a přehledná prezentace s plnou podporou tří jazyků (CZ/EN/DE).",
      image: Img1,
      year: "2025",
      link: "https://jmlmont.eu", // Zde si pak doplníš reálnou URL
    },
    {
    id: 2,
    title: "Bar Praha",
    category: "Web",
    image: Img5,
    description: "Svižný a přehledný web vytvořený na míru pro bar ve Znojmě, optimalizovaný pro všechna mobilní zařízení.",
    year: "2026",
    link: "https://barpraha-znojmo.cz/"
  },
  {
    id: 3,
    title: "Octagon Třebíč",
    category: "Web",
    image: Img4,
    description: "Dynamickoá a vizuálně úderná stránka, která buduje silnou osobní značku a láká návštěvníky.",
    year: "2026",
    link: "https://stachradek-octagon.netlify.app/"
  },
    {
        id: 4,
      title: "Aura - Wellness",
      category: "Moderní SPA",
      description: "Zaměření na mikro-interakce a plynulý uživatelský zážitek.",
      image: Img3,
      year: "2026",
      link: "https://stachradek-wellness.netlify.app/", // Zde si pak doplníš reálnou URL
    },
  {
        id: 5,
      title: "Krypto Terminál",
      category: "Development",
      description: "Aplikace s grafy kryptoměn.",
      image: Img2,
      year: "2026",
      link: "https://stachradek-krypto.netlify.app/", // Zde si pak doplníš reálnou URL
    },

  
];