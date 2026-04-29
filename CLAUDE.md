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
