import React, { useRef } from 'react';

const Card = ({ children, className = "", title, description, icon: Icon }) => {
  const divRef = useRef(null);
  const isFocused = useRef(false);
  const position = useRef({ x: 0, y: 0 });
  const opacity = useRef(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    position.current.x = e.clientX - rect.left;
    position.current.y = e.clientY - rect.top;

    div.style.setProperty("--mouse-x", `${position.current.x}px`);
    div.style.setProperty("--mouse-y", `${position.current.y}px`);
    div.style.setProperty("--opacity", "1");
  };

  const handleMouseEnter = () => {
    opacity.current = 1;
    if (divRef.current) divRef.current.style.setProperty("--opacity", "1");
  };

  const handleMouseLeave = () => {
    opacity.current = 0;
    if (divRef.current) divRef.current.style.setProperty("--opacity", "0");
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl border border-white/10 bg-surface/50 overflow-hidden group ${className}`}
    >
      {/* SPOTLIGHT EFEKT - Toto je ta magie */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity: "var(--opacity, 0)",
          background: `radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(255,255,255,0.1), transparent 40%)`,
        }}
      />
      
      {/* Obsah karty */}
      <div className="relative z-10 flex flex-col h-full p-8">
        {Icon && (
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform duration-500">
            <Icon size={24} />
          </div>
        )}
        
        {title && <h3 className="text-xl font-semibold mb-2 text-white/90">{title}</h3>}
        {description && <p className="text-muted leading-relaxed mb-4">{description}</p>}
        
        <div className="mt-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;