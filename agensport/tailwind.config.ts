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
        //#3eb44c otra propuesta para el verde-claro
      },
    },
  },
  plugins: [],
};
export default config;
