// src/data/projectsData.js
import Img1 from "../assets/jmlmont.png";
import Img2 from "../assets/kryptoterminal.png";
import Img3 from "../assets/aurawellnes.png";
import Img4 from "../assets/octagontrebic.png";


export const projects = [
  {
        id:1,
      title: "JML Mont s.r.o",
      category: "Web",
      description: "Docílená zvýšená poptávka o 40 %.",
      image: Img1,
      year: "2025",
      link: "https://jmlmont.eu", // Zde si pak doplníš reálnou URL
    },
    {
        id: 2,
      title: "Krypto Terminál",
      category: "Development",
      description: "Aplikace s grafy kryptoměn.",
      image: Img2,
      year: "2026",
      link: "https://stachradek-krypto.netlify.app/", // Zde si pak doplníš reálnou URL
    },
    {
        id: 3,
      title: "Aura - Wellness",
      category: "Moderní SPA",
      description: "Zaměření na mikro-interakce a plynulý uživatelský zážitek.",
      image: Img3,
      year: "2026",
      link: "https://stachradek-wellness.netlify.app/", // Zde si pak doplníš reálnou URL
    },
  {
    id: 4,
    title: "Octagon Třebíč",
    category: "Web",
    image: Img4,
    description: "Ukázka webu pro místní posilovnu.",
    year: "2026",
    link: "https://stachradek-octagon.netlify.app/"
  },
  
];