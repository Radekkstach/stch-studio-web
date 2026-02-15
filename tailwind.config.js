/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Moderní, čistý font
      },
      colors: {
        // Tmavé pozadí inspirované tugedr (není čistě černá, ale "rich black")
        background: '#030712', // Velmi tmavá šedá/modrá
        surface: '#111827',    // Pro karty
        primary: '#6366f1',    // Indigo akcent
        secondary: '#a855f7',  // Purple akcent
        accent: '#ec4899',     // Pink akcent (pro gradienty)
        muted: '#94a3b8',      // Tlumený text
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at top, #1e1b4b 0%, #030712 50%)',
        'glass': 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.00) 100%)',
      },
    },
  },
  plugins: [],
}