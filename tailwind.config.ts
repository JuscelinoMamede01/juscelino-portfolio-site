import type { Config } from "tailwindcss";

const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
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
  darkMode: "class",
  plugins: [nextui(), require("flowbite/plugin")],
};
export default config;
