import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      ice: ["iceJaram-Rg"],
      Pretendard: ["Pretendard-Regular"],
      mono: ["ui-monospace", "SFMono-Regular"],
      Nanum: ["NanumSquare"],
      Gowun: ["GowunBatang-Regular"],
    },
    keyframes: {
      fadein: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
      fadeout: {
        "0%": { opacity: "1" },
        "100%": { opacity: "0" },
      },
      slideDown: {
        "0%": { opacity: "0", height: "0px" },
        "100%": { opacity: "1", height: "60px" },
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        fadein: "fadein 2s ease-out",
        fadeout: "fadeout 2s ease-out forwards",
        "slide-down": "slideDown 0.5s ease-out forwards",
      },
      animationDelay: {
        "delay-100": "100ms",
        "delay-200": "200ms",
        "delay-300": "300ms",
      },
    },
    colors: {
      "my-yellow": "#F5EEE0",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
export default config;
