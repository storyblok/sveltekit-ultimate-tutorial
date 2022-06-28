import adapter from '@sveltejs/adapter-auto';

const config = {
	kit: {
		adapter: adapter(),
		vite: {
			server: {
				https: true
			},
			optimizeDeps: {
				include: ['axios']
			}
		}
	}
};
export default config;
