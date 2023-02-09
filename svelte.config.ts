import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-cloudflare';
import { imagetools } from 'vite-imagetools';

interface Config {
	preprocess: typeof preprocess;
	kit: {
		adapter: typeof adapter;
	};
	vite: {
		plugins: [typeof imagetools];
	};
}

const config: Config = {
	preprocess: preprocess(),
	kit: { adapter: adapter() },
	vite: { plugins: [imagetools()] }
};

export default config;
