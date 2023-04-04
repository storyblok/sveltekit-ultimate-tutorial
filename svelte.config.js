import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'@storyblok/svelte': './node_modules/@storyblok/svelte'
		}
	},

	preprocess: vitePreprocess()
};

export default config;
