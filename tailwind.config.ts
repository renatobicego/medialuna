import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "3xl": "1750px",
        "xs": "350px"
      },
      colors: {
        "verde": "#1A9070",
        "rojo": "#FF4D4B",
        "fondo": "#F2EAE7",
        "azul": "#5085EF",
        "amarillo": "#FFC803",
        "negro": "#232323"
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
};
export default config;
