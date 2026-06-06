import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0f0f13",
        graphite: "#18181f",
        signal: "#818cf8",
        ember: "#f59e0b",
        bloom: "#a78bfa"
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.5), 0 4px 12px rgba(0,0,0,0.3)"
      }
    }
  },
  plugins: []
};

export default config;
