import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        Orbitron: ["Orbitron", "sans-serif"],
        NotoSans: ["Noto Sans JP", "sans-serif"],
        ZenakuGothicNew: ["Zen Kaku Gothic New", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
