import React, { useState, useEffect } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projectsData"; // Importujeme data

const Archive = () => {
  const [filter, setFilter] = useState("Vše");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Kategorie pro filtrování (vycucneme je unikátně z dat nebo natvrdo)
  const categories = ["Vše", "Weby", "E-shopy", "Design"];

  // Logika filtrování
  useEffect(() => {
    if (filter === "Vše") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((p) => p.category === filter));
    }
  }, [filter]);

  // Scroll nahoru při načtení stránky
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-white selection:bg-indigo-500/30">
      {/* --- HLAVIČKA --- */}
      <header className="container mx-auto px-6 py-12 flex justify-between items-center">
        <Link
          to="/"
          className="group flex items-center gap-2 text-muted hover:text-white transition-colors"
        >
          <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
            <ArrowLeft size={20} />
          </div>
          <span className="text-sm font-medium tracking-wide">Zpět domů</span>
        </Link>
        <div className="text-right">
          <h1 className="text-2xl font-bold">Archiv projektů</h1>
          <p className="text-xs text-muted">Celkem {projects.length} prací</p>
        </div>
      </header>

      <main className="container mx-auto px-6 pb-24">
        {/* --- FILTRY --- */}
        {/* <div className="flex flex-wrap gap-4 mb-16 justify-center md:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                filter === cat
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-muted border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        */}

        {/* --- GRID PROJEKTŮ --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Obrázek */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="text-white" size={32} />
                </div>
              </div>

              {/* Texty */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs text-indigo-400 font-mono uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mt-1 group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-xs text-muted border border-white/10 px-2 py-1 rounded">
                    {project.year}
                  </span>
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Archive;
