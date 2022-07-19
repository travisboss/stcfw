import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-cloudflare';
import { imagetools } from 'vite-imagetools';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter()
	},

	vite: {
		plugins: [imagetools()]
	}
};

export default config;
