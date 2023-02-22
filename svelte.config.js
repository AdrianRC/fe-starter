import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { preprocessThrelte } from '@threlte/preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true
		}),
		preprocessThrelte()
	],

	kit: {
		adapter: adapter(),
		alias: {
			$houdini: './$houdini'
		}
	}
};

export default config;
