import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        veeba: {
          orange: '#FF5A00', // Signature Veeba Coral Orange
          orangeHover: '#E04F00',
          tint: '#FFF0E6',   // Soft Orange Tint
          cream: '#FAF5ED',  // Signature Veeba Cream Background
          creamDark: '#F5EFE6',
          border: '#F0E6D8', // Gentle Warm Border
          dark: '#1C1917',   // Terracotta Dark Slate
        },
        brand: {
          50: '#fff7ed',
          100: '#FFF0E6',
          200: '#fed7aa',
          500: '#FF5A00',
          600: '#E04F00',
          700: '#c2410c',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'veeba': '32px', // Signature 32px curve for Veeba cards
      },
      boxShadow: {
        'veeba': '0 12px 35px -8px rgba(0, 0, 0, 0.06)',
        'veeba-hover': '0 20px 45px -10px rgba(255, 90, 0, 0.18)',
        'veeba-pill': '0 10px 25px -5px rgba(0, 0, 0, 0.08)',
        'glow-orange': '0 10px 30px -5px rgba(255, 90, 0, 0.35)',
      }
    },
  },
  plugins: [],
};

export default config;
