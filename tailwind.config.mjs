/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			body: ['"Asap Condensed"','sans-serif'],
			button: ['Nunito', 'serif']
		}
	},
	plugins: [require('daisyui')],
	darkMode: 'class'
}
