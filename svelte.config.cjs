const preprocess = require('svelte-preprocess');
const adapter = require('@sveltejs/adapter-vercel');
const { resolve } = require("path");

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					config: resolve(__dirname, "./config")
				}
			}
		}
	}
};
