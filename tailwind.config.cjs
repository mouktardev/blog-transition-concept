import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				open: ['"Open Sans"', ..._fontFamily.sans]
			},
			fontWeight: {
				thin: 100,
				normal: 400,
				medium: 500,
				semibold: 600,
				bold: 700,
			},
		},
	},
	plugins: [require('@tailwindcss/typography')]
};
