import React, { useEffect, useRef, useState } from "react";

/**
 * Vlastni ilustrace pro jednotlivé služby — schválně kreslené, ne ikony
 * z knihovny. Animace bězi na CSS keyframes (viz index.css, prefix `svc-`);
 * scéna se pri prepnuti služby odmountuje a znovu nasadi, cimz se animace
 * prehraje od zacatku. Zadny JS ticker tedy neni potreba.
 */

// Web na míru: stránka se skládá po kouscích.
const WebScene = () => (
  <>
    <rect
      x="18"
      y="14"
      width="164"
      height="112"
      rx="10"
      className="fill-foreground/[0.03] stroke-foreground/15"
      strokeWidth="1.5"
    />
    <path d="M18 36 H182" className="stroke-foreground/15" strokeWidth="1.5" />
    <circle cx="30" cy="25" r="2.5" className="fill-foreground/25" />
    <circle cx="39" cy="25" r="2.5" className="fill-foreground/25" />
    <circle cx="48" cy="25" r="2.5" className="fill-foreground/25" />

    <g className="svc-rise" style={{ animationDelay: "0.05s" }}>
      <rect x="32" y="48" width="72" height="9" rx="4.5" className="fill-foreground/45" />
      <rect x="32" y="63" width="52" height="6" rx="3" className="fill-foreground/20" />
    </g>
    <rect
      x="32"
      y="78"
      width="38"
      height="13"
      rx="6.5"
      className="svc-rise fill-indigo-500/70"
      style={{ animationDelay: "0.22s" }}
    />
    <rect
      x="118"
      y="48"
      width="50"
      height="43"
      rx="6"
      className="svc-rise fill-indigo-500/15 stroke-indigo-400/40"
      strokeWidth="1.5"
      style={{ animationDelay: "0.38s" }}
    />

    <g className="svc-rise" style={{ animationDelay: "0.54s" }}>
      <rect x="32" y="102" width="40" height="14" rx="4" className="fill-foreground/10" />
      <rect x="80" y="102" width="40" height="14" rx="4" className="fill-foreground/10" />
      <rect x="128" y="102" width="40" height="14" rx="4" className="fill-foreground/10" />
    </g>
  </>
);

// E-shop: zboží putuje do košíku.
const ShopScene = () => (
  <>
    {[24, 80, 136].map((x, i) => (
      <g key={x} className="svc-rise" style={{ animationDelay: `${0.05 + i * 0.12}s` }}>
        <rect
          x={x}
          y="18"
          width="40"
          height="40"
          rx="7"
          className="fill-foreground/[0.06] stroke-foreground/15"
          strokeWidth="1.5"
        />
        <rect x={x + 8} y={38} width="24" height="4" rx="2" className="fill-foreground/25" />
        <rect x={x + 8} y={46} width="14" height="4" rx="2" className="fill-foreground/15" />
      </g>
    ))}

    <circle
      cx="44"
      cy="38"
      r="5"
      className="svc-fly fill-indigo-400"
      style={{ "--svc-dx": "52px", "--svc-dy": "62px", animationDelay: "0.7s" }}
    />

    <g className="svc-rise" style={{ animationDelay: "0.45s" }}>
      <path
        d="M74 78 L82 78 L90 108 L124 108"
        className="stroke-foreground/35"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M85 86 L130 86 L126 102 L89 102 Z"
        className="fill-indigo-500/15 stroke-indigo-400/60"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="96" cy="118" r="4.5" className="fill-foreground/35" />
      <circle cx="120" cy="118" r="4.5" className="fill-foreground/35" />
    </g>

    <g className="svc-pop" style={{ animationDelay: "1.25s" }}>
      <circle cx="132" cy="78" r="10" className="fill-indigo-500" />
      <path d="M132 73 V83 M127 78 H137" className="stroke-white" strokeWidth="2.2" strokeLinecap="round" />
    </g>
  </>
);

// Aplikace na míru: agenda se sbíhá do jednoho místa.
const AppScene = () => {
  const nodes = [
    { x: 20, y: 16, w: 52, h: 24, dx: "50px", dy: "40px" },
    { x: 128, y: 16, w: 52, h: 24, dx: "-52px", dy: "40px" },
    { x: 20, y: 100, w: 52, h: 24, dx: "50px", dy: "-40px" },
    { x: 128, y: 100, w: 52, h: 24, dx: "-52px", dy: "-40px" },
  ];

  return (
    <>
      <g className="stroke-foreground/15" strokeWidth="1.5">
        <path d="M46 28 L100 68" />
        <path d="M154 28 L100 68" />
        <path d="M46 112 L100 68" />
        <path d="M154 112 L100 68" />
      </g>

      {nodes.map((node, i) => (
        <g key={`${node.x}-${node.y}`}>
          <rect
            x={node.x}
            y={node.y}
            width={node.w}
            height={node.h}
            rx="7"
            className="svc-rise fill-foreground/[0.06] stroke-foreground/20"
            strokeWidth="1.5"
            style={{ animationDelay: `${0.05 + i * 0.1}s` }}
          />
          <rect
            x={node.x + 10}
            y={node.y + 10}
            width={node.w - 20}
            height="4"
            rx="2"
            className="svc-rise fill-foreground/25"
            style={{ animationDelay: `${0.05 + i * 0.1}s` }}
          />
          <circle
            cx={node.x + node.w / 2}
            cy={node.y + node.h / 2}
            r="3.5"
            className="svc-fly fill-indigo-400"
            style={{ "--svc-dx": node.dx, "--svc-dy": node.dy, animationDelay: `${0.75 + i * 0.16}s` }}
          />
        </g>
      ))}

      <circle
        cx="100"
        cy="68"
        r="21"
        className="svc-rise fill-indigo-500/15 stroke-indigo-400/50"
        strokeWidth="1.5"
        style={{ animationDelay: "0.5s" }}
      />
      <circle cx="100" cy="68" r="21" className="svc-ring stroke-indigo-400/40" strokeWidth="1.5" fill="none" />
      <path
        d="M92 68 L98 74 L109 62"
        className="svc-rise stroke-indigo-400"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        style={{ animationDelay: "1.3s" }}
      />
    </>
  );
};

// Rychlost a viditelnost: ručička vyletí nahoru.
// Rysky po obvodu drzi uhly ve stupnich od svislice — stejna konvence jako
// rotace rucicky v CSS, takze se to nerozjede, kdyz se s uhlem hne.
const SPEED_TICKS = [-76, -57, -38, -19, 0, 19, 38, 57, 76];

const SpeedScene = () => (
  <>
    {SPEED_TICKS.map((deg, i) => {
      const rad = (deg * Math.PI) / 180;
      const x1 = 100 + Math.sin(rad) * 42;
      const y1 = 98 - Math.cos(rad) * 42;
      const x2 = 100 + Math.sin(rad) * 49;
      const y2 = 98 - Math.cos(rad) * 49;

      return (
        <path
          key={deg}
          d={`M${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)}`}
          className="svc-rise stroke-foreground/25"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{ animationDelay: `${0.35 + i * 0.05}s` }}
        />
      );
    })}

    {/* Stred (100, 98), polomer 60 — delka pulkruhu = pi * 60 = 189. */}
    <path
      d="M40 98 A 60 60 0 0 1 160 98"
      className="stroke-foreground/12"
      strokeWidth="11"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M40 98 A 60 60 0 0 1 160 98"
      className="svc-draw stroke-indigo-400"
      strokeWidth="11"
      strokeLinecap="round"
      fill="none"
      style={{ "--svc-len": "189" }}
    />

    <g className="svc-needle">
      <path
        d="M100 98 L100 56"
        className="stroke-foreground/70"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </g>
    <circle cx="100" cy="98" r="7" className="fill-foreground/70" />
  </>
);

const SCENES = [WebScene, ShopScene, AppScene, SpeedScene];

const ServiceScene = ({ index = 0, className = "" }) => {
  const Scene = SCENES[index] || SCENES[0];

  return (
    <svg
      viewBox="0 0 200 140"
      className={`h-full w-full ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <Scene />
    </svg>
  );
};

/**
 * Ramecek se scenou, ktery se vykresli az ve chvili, kdy na nej uzivatel
 * doscrolluje. Sekce se mountuje uz pri nacteni stranky, takze bez tohohle
 * by animace probehly mimo obrazovku a zbylo by jen doanimovane finale.
 * Zmena `index` scenu odmountuje a prehraje ji znovu.
 */
export const ServiceSceneInView = ({ index = 0, className = "" }) => {
  const ref = useRef(null);
  // Bez IntersectionObserveru (stare prohlizece) scenu rovnou vykreslime,
  // at nezustane prazdne misto.
  const [seen, setSeen] = useState(
    () => typeof IntersectionObserver === "undefined",
  );

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setSeen(true);
        observer.disconnect();
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`relative aspect-[200/140] ${className}`}>
      {seen && <ServiceScene key={index} index={index} />}
    </div>
  );
};

export default ServiceScene;
