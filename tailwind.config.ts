import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#f0eee6",
        surface: "#faf9f5",
        surface2: "#f5efe4",
        border: "#e3ded1",
        ink: "#1a1a1a",
        muted: "#6b6558",
        faint: "#9c9686",
        accent: "oklch(0.70 0.14 45)",
        accent2: "#b96a4f",
        "accent-dark": "#1a1a1a",
        clay: "#b96a4f",
        fig: "#6b4a5c",
        cactus: "#7a8b6f",
        sky: "#6f92a8",
        heather: "#8a7ba8",
        olive: "#7d7a4f",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        drift: {
          "0%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(6px, -8px)" },
          "100%": { transform: "translate(0, 0)" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        drift: "drift 7s ease-in-out infinite",
        rise: "rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
