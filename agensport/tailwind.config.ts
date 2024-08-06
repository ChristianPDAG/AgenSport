import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'verde-oscuro': '#00452e',
        'verde-claro': '#4ccf5e',
        'verde-gris': '#9b9a77',
        //#3eb44c otra propuesta para el verde-claro
      },
      backgroundImage: {
        'header-gradient': 'linear-gradient(180deg, #f0f8fc 0%, #cce7f8 100%)',
        'content-gradient': 'radial-gradient(circle, #e6f2f7 0%, #cce7f8 100%)',
        'footer-gradient': 'linear-gradient(180deg, #cce7f8 0%, #b3d9f7 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
