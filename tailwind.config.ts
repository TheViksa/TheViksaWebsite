import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        serif: "--font-serif",
        sansSerif: "--font-sans-serif",
      },
      fontSize: {
        nav: ["15px", { fontWeight: "400", lineHeight: "15px" }],
        navMobile: [
          "18px",
          { fontWeight: "400", lineHeight: "18px", letterSpacing: "2px" },
        ],
        bodyL: ["22px", { fontWeight: "400", lineHeight: "40px" }],
        bodyLMobile: ["18px", { fontWeight: "400", lineHeight: "26px" }],
        bodyM: [
          "15px",
          { fontWeight: "400", lineHeight: "26px", letterSpacing: ".8px" },
        ],
        bodyMMobile: ["14px", { fontWeight: "400", lineHeight: "23px" }],
        bodyS: ["13px", { fontWeight: "400", lineHeight: "18px" }],
        bodySMobile: ["11px", { fontWeight: "400", lineHeight: "14px" }],
        headingXL: ["72px", { fontWeight: "400", lineHeight: "70px" }],
        headingXLMobile: ["32px", { fontWeight: "400", lineHeight: "38px" }],
        headingL: ["38px", { lineHeight: "53px", fontWeight: "700" }],
        headingLMobile: ["30px", { lineHeight: "100%", fontWeight: "700" }],
        headingM: ["28px", { lineHeight: "39px", fontWeight: "400" }],
        headingMMobile: ["24px", { lineHeight: "30px", fontWeight: "400" }],
        headingS: ["24px", { lineHeight: "34px" }],
        headingSMobile: ["18px", { lineHeight: "25px" }],
        headingXS: ["21px", { lineHeight: "29px", fontWeight: "400" }],
        headingXSMobile: ["19px", { lineHeight: "25px", fontWeight: "400" }],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
