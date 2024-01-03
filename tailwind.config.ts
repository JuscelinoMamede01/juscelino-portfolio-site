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
        "bg-primary-color": "#6b5135",
        "pallet-bright-color1": "#f2c6c6",
        "pallet-bright-color2": "#d2aaa4",
        "pallet-medium-color3": "#b28e82",
        "pallet-medium-color4": "#927260",
      },
    },
  },
  plugins: [],
};
export default config;
