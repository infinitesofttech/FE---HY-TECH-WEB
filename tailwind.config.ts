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
        edunex: {
          violet: '#5751E1',       // Edunex Signature Indigo Violet
          violetHover: '#4338CA',
          violetLight: '#EEEEFF',  // Pastel Violet Tint
          gold: '#FFC224',         // Edunex Signature Golden Amber Accent
          goldHover: '#EAB308',
          goldLight: '#FFFBEB',    // Soft Amber Tint
          dark: '#0F1322',         // Edunex Deep Night Background
          darkCard: '#1A1F36',     // Edunex Dark Card Surface
          bg: '#F5F7FA',           // Soft Canvas
          border: '#E2E8F0',
        },
        brand: {
          50: '#EEEEFF',
          100: '#E0E0FF',
          200: '#C5C5FF',
          500: '#5751E1',
          600: '#4338CA',
          700: '#3730A3',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'edunex': '24px',
        'edunex-lg': '32px',
      },
      boxShadow: {
        'edunex': '0 12px 35px -8px rgba(87, 81, 225, 0.08)',
        'edunex-hover': '0 20px 45px -10px rgba(87, 81, 225, 0.22)',
        'glow-violet': '0 10px 30px -5px rgba(87, 81, 225, 0.4)',
        'glow-gold': '0 10px 30px -5px rgba(255, 194, 36, 0.4)',
      }
    },
  },
  plugins: [],
};

export default config;

