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
          red: '#E31B23',       // Iconic Veeba Brand Red
          redHover: '#C8141B',
          redLight: '#FEE2E2',   // Soft Red Tint
          orange: '#FF5A00',
          dark: '#111827',      // Deep Charcoal Header & Text
          charcoal: '#1E293B',
          grayText: '#4B5563',
          border: '#E5E7EB',    // Clean subtle border
          bgLight: '#F9FAFB',   // Light gray background
        },
        brand: {
          50: '#fef2f2',
          100: '#FEE2E2',
          200: '#fca5a5',
          500: '#E31B23',
          600: '#C8141B',
          700: '#991b1b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'veeba': '32px',
      },
      boxShadow: {
        'veeba': '0 12px 35px -8px rgba(0, 0, 0, 0.06)',
        'veeba-hover': '0 20px 45px -10px rgba(227, 27, 35, 0.18)',
        'veeba-pill': '0 10px 25px -5px rgba(0, 0, 0, 0.08)',
        'glow-red': '0 10px 30px -5px rgba(227, 27, 35, 0.35)',
      }
    },
  },
  plugins: [],
};

export default config;
