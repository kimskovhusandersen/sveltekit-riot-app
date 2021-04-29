<script context="module" lang="ts">
	export const prerender = true;
	import { setup, tw } from 'twind';
	import { forms } from '@twind/forms';

	setup({
		mode: import.meta.env.DEV ? 'strict' : 'warn', // throw errors for invalid rules (default: warn)
		hash: false, // hash all generated class names (default: false)
		theme: {
			fontFamily: {
				sans: ['Lato', 'sans-serif'],
				serif: ['Merriweather', 'serif']
			}
		},
		plugins: {
			forms
		}
	});
</script>

<script lang="ts">
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class={tw`flex(& col 1) justify-center items-center`}>
	<p class={tw`text-red-600 text-lg`}>hihi</p>
</section>
