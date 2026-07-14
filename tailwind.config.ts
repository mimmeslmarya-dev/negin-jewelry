import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#15120F",
        "ink-soft": "#1E1A15",
        porcelain: "#EFE7D8",
        "porcelain-dim": "#E3D8C4",
        brass: "#B08A46",
        "brass-light": "#D9B876",
        garnet: "#6E1F2A",
        "garnet-light": "#8C3240",
        sage: "#4B5A4E",
        parchment: "#F6F1E7",
      },
      fontFamily: {
        display: ["var(--font-vazir)", "Tahoma", "sans-serif"],
        body: ["var(--font-vazir)", "Tahoma", "sans-serif"],
      },
      letterSpacing: {
        latin: "0.08em",
      },
      backgroundImage: {
        "brass-gradient":
          "linear-gradient(115deg, #7C5C28 0%, #D9B876 35%, #F3E3B8 50%, #B08A46 65%, #7C5C28 100%)",
        "ink-radial":
          "radial-gradient(circle at 50% 0%, #241E17 0%, #15120F 60%)",
      },
      boxShadow: {
        facet: "0 30px 80px -30px rgba(0,0,0,0.55)",
      },
      maxWidth: {
        content: "1240px",
      },
    },
  },
  plugins: [],
};

export default config;
