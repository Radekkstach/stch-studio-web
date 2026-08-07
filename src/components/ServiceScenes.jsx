import React, { useEffect, useRef, useState } from "react";

/**
 * Vlastni ilustrace pro jednotlivé služby — schválně kreslené, ne ikony
 * z knihovny. Animace bězi na CSS keyframes (viz index.css, prefix `svc-`);
 * scéna se pri prepnuti služby odmountuje a znovu nasadi, cimz se animace
 * prehraje od zacatku. Zadny JS ticker tedy neni potreba.
 */

// Web na míru: stránka se skládá po kouscích — texty nalétnou zleva, přibude
// obrázková karta a nakonec kurzor doklikne na tlačítko (= web, který lidi
// dovede k akci). Ramecek prohlizece drzi kompozici, proto se neanimuje.
const WebScene = () => (
  <>
    <rect
      x="18"
      y="14"
      width="164"
      height="112"
      rx="10"
      className="fill-foreground/[0.04] stroke-foreground/25"
      strokeWidth="1.5"
    />
    <path d="M18 36 H182" className="stroke-foreground/25" strokeWidth="1.5" />
    <circle cx="30" cy="25" r="2.5" className="fill-foreground/35" />
    <circle cx="39" cy="25" r="2.5" className="fill-foreground/35" />
    <circle cx="48" cy="25" r="2.5" className="fill-foreground/35" />
    <rect
      x="60"
      y="20"
      width="110"
      height="10"
      rx="5"
      className="svc-rise fill-foreground/10"
      style={{ animationDelay: "0.05s" }}
    />

    <g className="svc-in" style={{ "--svc-fx": "-16px", animationDelay: "0.1s" }}>
      <rect x="32" y="48" width="72" height="9" rx="4.5" className="fill-foreground/55" />
    </g>
    <g className="svc-in" style={{ "--svc-fx": "-16px", animationDelay: "0.2s" }}>
      <rect x="32" y="63" width="52" height="6" rx="3" className="fill-foreground/30" />
    </g>
    <rect
      x="32"
      y="78"
      width="38"
      height="13"
      rx="6.5"
      className="svc-in fill-indigo-500/80"
      style={{ "--svc-fx": "-16px", animationDelay: "0.32s" }}
    />

    {/* Obrazkova karta — slunce nad kopci, at je poznat, ze jde o obsah,
        ne o dalsi prazdny blok. */}
    <rect
      x="118"
      y="48"
      width="50"
      height="43"
      rx="6"
      className="svc-rise fill-indigo-500/20 stroke-indigo-400/60"
      strokeWidth="1.5"
      style={{ animationDelay: "0.42s" }}
    />
    <g className="svc-rise" style={{ animationDelay: "0.58s" }}>
      <circle cx="132" cy="62" r="5" className="fill-indigo-300/80" />
      <path
        d="M120 86 L134 70 L143 79 L149 73 L166 86 Z"
        className="fill-indigo-400/45"
      />
    </g>

    {[32, 80, 128].map((x, i) => (
      <rect
        key={x}
        x={x}
        y="102"
        width="40"
        height="14"
        rx="4"
        className="svc-rise fill-foreground/15"
        style={{ animationDelay: `${0.66 + i * 0.09}s` }}
      />
    ))}

    {/* Kurzor prijede zprava dolu a klikne na tlacitko. */}
    <rect
      x="32"
      y="78"
      width="38"
      height="13"
      rx="6.5"
      className="svc-ring stroke-indigo-300/80"
      strokeWidth="1.5"
      fill="none"
      style={{
        animationDelay: "1.5s",
        animationDuration: "0.9s",
        animationIterationCount: 2,
      }}
    />
    <path
      d="M55 84 L55 96 L58.2 93 L60.6 98 L62.6 97 L60.2 92.2 L64.6 92 Z"
      className="svc-cursor fill-foreground stroke-background"
      strokeWidth="1.5"
      strokeLinejoin="round"
      style={{ animationDelay: "0.9s" }}
    />
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
          className="fill-foreground/[0.07] stroke-foreground/25"
          strokeWidth="1.5"
        />
        <rect x={x + 8} y={38} width="24" height="4" rx="2" className="fill-foreground/40" />
        <rect x={x + 8} y={46} width="14" height="4" rx="2" className="fill-foreground/25" />
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
        className="stroke-foreground/50"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M85 86 L130 86 L126 102 L89 102 Z"
        className="fill-indigo-500/20 stroke-indigo-400/75"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="96" cy="118" r="4.5" className="fill-foreground/50" />
      <circle cx="120" cy="118" r="4.5" className="fill-foreground/50" />
    </g>

    {/* Dve faze: nejdriv "+" (pridano do kosiku), pak se odznak na stejnem
        miste prerazitkuje na zelenou fajfku (objednavka dokoncena). Plus se
        pod rostouci zelenou plackou zaroven odkryva, at to nepreblikava. */}
    <g className="svc-fade-out" style={{ animationDelay: "1.65s" }}>
      <g className="svc-pop" style={{ animationDelay: "1.1s" }}>
        <circle cx="132" cy="78" r="10" className="fill-indigo-500" />
        <path d="M132 73 V83 M127 78 H137" className="stroke-white" strokeWidth="2.2" strokeLinecap="round" />
      </g>
    </g>
    <g className="svc-pop" style={{ animationDelay: "1.65s" }}>
      <circle cx="132" cy="78" r="10" className="fill-green-500" />
      <path
        d="M127 78 L130.5 81.5 L137.5 74.5"
        className="stroke-white"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </g>
  </>
);

// Aplikace na míru: agenda ze ctyr mist se sbiha do jedne aplikace a kazda
// dorazivsi davka v ni "postavi" sloupec — proto maji tecky a sloupce stejne
// zpozdeni posunute o delku letu.
const APP_NODES = [
  { x: 18, y: 14, cx: 44, cy: 26, line: "M44 26 L67 49", dx: "56px", dy: "44px" },
  { x: 130, y: 14, cx: 156, cy: 26, line: "M156 26 L133 49", dx: "-56px", dy: "44px" },
  { x: 18, y: 102, cx: 44, cy: 114, line: "M44 114 L67 91", dx: "56px", dy: "-44px" },
  { x: 130, y: 102, cx: 156, cy: 114, line: "M156 114 L133 91", dx: "-56px", dy: "-44px" },
];

// Sloupce v panelu: [x, vyska]. Baseline je y = 86.
const APP_BARS = [
  [74, 11],
  [88, 18],
  [102, 13],
  [116, 22],
];

const APP_FLY_DURATION = 0.7;

const AppScene = () => (
  <>
    {APP_NODES.map((node, i) => (
      <path
        key={`line-${node.cx}-${node.cy}`}
        d={node.line}
        className="svc-draw stroke-foreground/25"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        style={{
          "--svc-len": "33",
          animationDuration: "0.5s",
          animationDelay: `${0.3 + i * 0.07}s`,
        }}
      />
    ))}

    {APP_NODES.map((node, i) => (
      <g key={`${node.x}-${node.y}`}>
        <rect
          x={node.x}
          y={node.y}
          width="52"
          height="24"
          rx="7"
          className="svc-rise fill-foreground/[0.07] stroke-foreground/30"
          strokeWidth="1.5"
          style={{ animationDelay: `${0.04 + i * 0.09}s` }}
        />
        <rect
          x={node.x + 10}
          y={node.y + 8}
          width="32"
          height="4"
          rx="2"
          className="svc-rise fill-foreground/40"
          style={{ animationDelay: `${0.04 + i * 0.09}s` }}
        />
        <rect
          x={node.x + 10}
          y={node.y + 15}
          width="18"
          height="4"
          rx="2"
          className="svc-rise fill-foreground/20"
          style={{ animationDelay: `${0.04 + i * 0.09}s` }}
        />
      </g>
    ))}

    {/* Aplikace uprostred — panel s hlavickou a daty, ktera se do nej sesypou. */}
    <rect
      x="66"
      y="48"
      width="68"
      height="44"
      rx="9"
      className="svc-rise fill-indigo-500/[0.12] stroke-indigo-400/60"
      strokeWidth="1.5"
      style={{ animationDelay: "0.45s" }}
    />
    <g className="svc-rise" style={{ animationDelay: "0.6s" }}>
      <path d="M66 62 H134" className="stroke-indigo-400/35" strokeWidth="1.5" />
      <rect x="73" y="53" width="20" height="5" rx="2.5" className="fill-foreground/45" />
      <circle cx="127" cy="55.5" r="2.5" className="fill-indigo-400/70" />
    </g>

    {APP_BARS.map(([x, h], i) => (
      <rect
        key={x}
        x={x}
        y={86 - h}
        width="8"
        height={h}
        rx="2.5"
        className="svc-grow fill-indigo-400/85"
        style={{ animationDelay: `${0.75 + APP_FLY_DURATION * 0.85 + i * 0.13}s` }}
      />
    ))}

    {APP_NODES.map((node, i) => (
      <circle
        key={`dot-${node.cx}-${node.cy}`}
        cx={node.cx}
        cy={node.cy}
        r="4"
        className="svc-fly fill-indigo-400"
        style={{
          "--svc-dx": node.dx,
          "--svc-dy": node.dy,
          animationDuration: `${APP_FLY_DURATION}s`,
          animationDelay: `${0.75 + i * 0.13}s`,
        }}
      />
    ))}

    <rect
      x="66"
      y="48"
      width="68"
      height="44"
      rx="9"
      className="svc-ring stroke-indigo-400/50"
      strokeWidth="1.5"
      fill="none"
      style={{ animationDelay: "1.85s" }}
    />
  </>
);

// Rychlost a viditelnost: rucicka vyleti nahoru a pod budikem narostou
// sloupce (= navstevnost z Googlu). Barevny oblouk se plni presne s rucickou,
// synchronizaci resi keyframy `svc-gauge` v index.css.
// Rysky po obvodu drzi uhly ve stupnich od svislice — stejna konvence jako
// rotace rucicky v CSS, takze se to nerozjede, kdyz se s uhlem hne.
const SPEED_TICKS = [-76, -57, -38, -19, 0, 19, 38, 57, 76];

// Sloupce pod budikem: [x, vyska]. Baseline je y = 133.
const SPEED_BARS = [
  [73, 10],
  [93, 16],
  [113, 23],
];

const SpeedScene = () => (
  <>
    {SPEED_TICKS.map((deg, i) => {
      const rad = (deg * Math.PI) / 180;
      const x1 = 100 + Math.sin(rad) * 40;
      const y1 = 92 - Math.cos(rad) * 40;
      const x2 = 100 + Math.sin(rad) * 47;
      const y2 = 92 - Math.cos(rad) * 47;

      return (
        <path
          key={deg}
          d={`M${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)}`}
          className="svc-rise stroke-foreground/35"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{ animationDelay: `${0.3 + i * 0.04}s` }}
        />
      );
    })}

    {/* Stred (100, 92), polomer 58 — delka pulkruhu = pi * 58 = 182. */}
    <path
      d="M42 92 A 58 58 0 0 1 158 92"
      className="stroke-foreground/15"
      strokeWidth="11"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M42 92 A 58 58 0 0 1 158 92"
      className="svc-gauge stroke-indigo-400"
      strokeWidth="11"
      strokeLinecap="round"
      fill="none"
    />

    <g className="svc-needle">
      <path
        d="M100 100 L100 45"
        className="stroke-foreground/85"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </g>
    <circle cx="100" cy="92" r="7.5" className="fill-foreground/85" />
    <circle cx="100" cy="92" r="3" className="fill-background" />

    {SPEED_BARS.map(([x, h], i) => (
      <rect
        key={x}
        x={x}
        y={133 - h}
        width="14"
        height={h}
        rx="3"
        className={`svc-grow ${i === SPEED_BARS.length - 1 ? "fill-indigo-400" : "fill-foreground/30"}`}
        style={{ animationDelay: `${1.15 + i * 0.13}s` }}
      />
    ))}
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
