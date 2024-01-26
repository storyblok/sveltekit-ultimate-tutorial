import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import basicSsl from '@vitejs/plugin-basic-ssl'


export default defineConfig({
	plugins: [sveltekit(), basicSsl()],
	server: {
		port: 3000,
		https: true,
	},
});
