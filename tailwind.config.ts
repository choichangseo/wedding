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
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
