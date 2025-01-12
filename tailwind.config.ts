import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                header: ["var(--font-header)", "sans-serif"],
                body: ["var(--font-body)", "sans-serif"],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "#468189",
                neutral: "#F8F1E4",
                accent: "#A7C7A3",
                charcoal: "#333333",
            },
        },
    },
    plugins: [],
} satisfies Config;
