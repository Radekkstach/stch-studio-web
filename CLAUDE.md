# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfolio/agency website for **STCH Studio** — a Czech web design and development agency. The site is a single-page application with heavy animation, showcasing services and a project portfolio.

## Commands

```bash
npm run dev        # Start dev server (Vite HMR)
npm run build      # Production build → /dist
npm run preview    # Preview the production build locally
npm run lint       # ESLint check
```

No test suite is configured.

## Tech Stack

- **React 18 + Vite** (JavaScript, not TypeScript)
- **Tailwind CSS 3** with a custom dark design system (configured in `tailwind.config.js`)
- **GSAP 3 + @gsap/react** for all scroll-driven and timeline animations
- **Lenis** for smooth scrolling (desktop/non-touch only, disabled on `< 1024px`)
- **React Router DOM 7** — two routes: `/` (home) and `/archiv` (project archive)
- **Formspree** for contact form submission (endpoint in `Contact.jsx`)
- **Vercel** for deployment — `vercel.json` rewrites all routes to `index.html` for SPA routing

## Architecture

### Data

All project data is hardcoded in `src/data/projectsData.js`. There is no CMS or backend — this is a fully static site.

### Routing

`App.jsx` sets up the router and the Lenis smooth scroll instance. Lenis is conditionally initialized only on non-touch devices and only when `window.innerWidth >= 1024`. GSAP's ScrollTrigger is synchronized with Lenis via a `ScrollTrigger.normalizeScroll` + RAF integration.

### Animation Pattern

- GSAP timelines and `useGSAP` hook are used for entry animations (Hero, Archive).
- `ScrollTrigger` drives scroll-based effects (Projects horizontal scroll, Services fade-in).
- Mouse-tracking parallax in `Services.jsx` is disabled on mobile.
- CSS keyframe animations (defined in `index.css`) handle continuous effects like the shimmer button and gradient float.

### Responsive Behavior

Key components behave differently across breakpoints:
- **Navbar**: full menu on desktop, hamburger overlay on mobile
- **Projects**: horizontal snap-scroll on desktop (`lg:`), vertical card list on mobile
- **Services**: mouse parallax active only on desktop

### Design Tokens (Tailwind)

Custom colors defined in `tailwind.config.js`:
- `background`: `#030712`, `surface`: `#111827`
- `primary`: `#6366f1` (indigo), `secondary`: `#a855f7` (purple), `accent`: `#ec4899` (pink)
- `muted`: `#94a3b8`

Custom utilities: `hero-gradient`, `glass` background gradients, `shimmer` animation.

### Performance Utility

`src/utils/perf.js` logs Core Web Vitals (CLS, LCP, long tasks) to the console — active only in dev mode, not used in production.

## Content & Positioning Notes

### Brand voice
- Present STCH Studio as a **studio ("my"/"we")**, not a solo person — the owner thinks big and plans to grow/employ people. Keep all on-site copy in the studio voice. The personal "O mně" page (`AboutMe.jsx`, founder voice "já") is the one allowed exception, but it must **not** say "pracuji sám" / "I work solo".
- Write for **non-technical clients**. No web jargon (React, Next.js, wireframe, pixel-perfect, conversion rate, UX, etc.). Talk in business benefits: more enquiries/orders, found on Google, fast, easy to use.

### Homepage section order (`App.jsx` `Home`)
Hero → Projects → Services → Studio → Process (`Jak to probíhá`) → Cms (`Vlastní administrace`) → Pricing (`Ceník`) → Contact. Nav links: Projekty, Služby, Studio, Ceník (Process/Cms reached by scroll). Section ids: `Proces`, `Administrace`, `Cenik`, `Kontakt`.

### Pricing (`pricing` key in i18n) — tunable, set with the owner
Indicative "from" prices, ladder of 3 tiers. Current values (CZ / EN):
- Web na míru / Custom website — **od 10 000 Kč** / from €400
- Vícestránkový web / Multi-page website — **od 20 000 Kč** / from €800
- Aplikace na míru / Custom app (app-primary, e-shop secondary) — **od 40 000 Kč** / from €1,600
- Provoz: doména + hosting od 500 Kč/rok, správa zdarma.
Rationale: AI has pushed the market floor down and sped up production, but custom code + own CMS justifies being above DIY builders. The owner historically **underprices** (one site was 2 500 Kč) — keep an eye on that. €≈25 Kč. Each pricing card links to a relevant case study via `exampleSlug` (Web→bar-praha, Vícestránkový→octagon-trebic, Aplikace→none yet / "Ukázka už brzy", a `fieldec` app case is coming).

### mySTCH CMS
The studio's own reusable CMS for **Astro** client sites (separate repo at `Desktop/mySTCH`, lives at `/cms` on each client site). One shared password, content as versioned YAML in git, draft→publish (1 commit = 1 rebuild), no database, no vendor lock-in. Per-client config in `src/cms/config.ts`; field types in `docs/FIELDS.md`. Already live for one client. The `Cms.jsx` section sells it ("web si spravujete sami"); its preview image is a **placeholder awaiting a real admin screenshot**.

### Portfolio (`projectsData.js`)
Three real client projects only (JML Mont, Bar Praha, Octagon Třebíč). The `caseStudy.results` field exists but is intentionally empty — real client testimonials/metrics still to be collected (biggest trust lever).
