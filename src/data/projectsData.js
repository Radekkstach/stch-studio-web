// src/data/projectsData.js
import Img1 from "../assets/jmlmont.png";
import Img2 from "../assets/kryptoterminal.png";
import Img3 from "../assets/aurawellnes.png";


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
    title: "Advokátní kancelář",
    category: "Weby",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Seriózní firemní web pro právní firmu s rezervačním systémem.",
    year: "2023",
    link: "#"
  },
  {
    id: 5,
    title: "Restaurace Pod Věží",
    category: "Weby",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    description: "Jednoduchý a rychlý web s online jídelním lístkem a galerií.",
    year: "2023",
    link: "#"
  },
];