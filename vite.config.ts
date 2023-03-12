import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';

export default defineConfig({
	clearScreen: false,
	plugins: [solid({ ssr: false })],
	root: '.',
	resolve: {
		alias: [{ find: /^~\/(.*)/, replacement: '/src/$1' }]
	}
});
