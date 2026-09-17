import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#134A78",
          dark: "#0F2E48",
          darker: "#0A2338",
        },
        gold: {
          DEFAULT: "#D9A431",
          // Darkened from #B8842A (3.3:1 on white — fails WCAG AA for the
          // small bold "eyebrow" labels it's used for) to a shade that
          // clears 4.5:1 while staying a recognisable warm gold, not brown.
          dark: "#8A6015",
          light: "#E9C978",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          cream: "#F6F1E6",
          border: "#E9E2D0",
        },
        ink: {
          DEFAULT: "#1E2A33",
          muted: "#5B6B76",
          soft: "#4B5A64",
          faint: "#8A98A3",
        },
      },
      fontFamily: {
        serif: ["var(--font-lora)", "Georgia", "serif"],
        sans: ["var(--font-work-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "8px",
        md: "14px",
        lg: "20px",
        pill: "999px",
      },
      maxWidth: {
        container: "1280px",
        narrow: "800px",
      },
      boxShadow: {
        soft: "0 4px 16px rgba(20,40,60,0.08)",
        card: "0 12px 28px rgba(20,40,60,0.10)",
        header: "0 1px 16px rgba(20,40,60,0.05)",
      },
      transitionDuration: {
        base: "250ms",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(24px,-30px) scale(1.06)" },
        },
      },
      animation: {
        floatSlow: "floatSlow 13s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
