import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-cloudflare';

/**
 * @typedef {import('@sveltejs/kit').Config} Config
 */

/** @type {Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter()
	}
};

export default config;
