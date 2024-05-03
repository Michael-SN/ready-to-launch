import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'light-gray': '#C8C8C8',
      'graphitte': '#4D4C59',
      'violet': '#6C63FF',
      'ice': '#DDDBF2',
    },
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
      'serif': ['Poppins', 'serif'],
    },
  },
  plugins: [],
};
export default config;
