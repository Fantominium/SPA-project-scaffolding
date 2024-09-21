import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: {
          50: '#eae9fc',
          100: '#d4d2f9',
          200: '#a9a5f3',
          300: '#7e78ed',
          400: '#534be7',
          500: '#281fe0',
          600: '#2018b4',
          700: '#181287',
          800: '#100c5a',
          900: '#08062d',
          950: '#040316',
        },
        background: {
          50: '#f2f2f2',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333',
          900: '#1a1a1a',
          950: '#0d0d0d',
        },
        primary: {
          50: '#e7f8fd',
          100: '#d0f2fb',
          200: '#a0e5f8',
          300: '#71d8f4',
          400: '#41cbf1',
          500: '#12beed',
          600: '#0e98be',
          700: '#0b728e',
          800: '#074c5f',
          900: '#04262f',
          950: '#021318',
        },
        secondary: {
          50: '#eff6f1',
          100: '#dfece3',
          200: '#bfd9c6',
          300: '#9fc6aa',
          400: '#7eb48e',
          500: '#5ea171',
          600: '#4b815b',
          700: '#396044',
          800: '#26402d',
          900: '#132017',
          950: '#09100b',
        },
        accent: {
          50: '#fdffe6',
          100: '#fafecd',
          200: '#f6fe9a',
          300: '#f1fd68',
          400: '#ecfd35',
          500: '#e8fc03',
          600: '#b9ca02',
          700: '#8b9702',
          800: '#5d6501',
          900: '#2e3201',
          950: '#171900',
        },
      },
    },
  },
  plugins: [],
};
export default config;
