import animations from '@midudev/tailwind-animations';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'selector',
	theme: {
		extend: {
			colors: {
				secondary: '#5a5d61',
				primary: '#ecba00'
			}
		}
	},
	plugins: [animations]
};
