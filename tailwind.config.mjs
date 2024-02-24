import animations from '@midudev/tailwind-animations';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#fffee7',
					100: '#fffdc1',
					200: '#fff786',
					300: '#ffea41',
					400: '#ffd90d',
					500: '#ecba00',
					600: '#d19300',
					700: '#a66802',
					800: '#89510a',
					900: '#74420f',
					950: '#442204'
				}
			}
		}
	},
	plugins: [animations]
};
