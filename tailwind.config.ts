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
        indigoBrand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5', // Primary Rich Violet Indigo
          700: '#4338ca', // Hover Indigo
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b', // Deep Dark Navy Indigo
        },
        amberBrand: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          500: '#f59e0b',
          600: '#d97706',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'veeba': '32px',
      },
      boxShadow: {
        'indigo-pill': '0 10px 25px -5px rgba(79, 70, 229, 0.25)',
        'glow-indigo': '0 10px 30px -5px rgba(79, 70, 229, 0.35)',
      }
    },
  },
  plugins: [],
};

export default config;

