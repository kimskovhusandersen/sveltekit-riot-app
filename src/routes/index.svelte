<script context="module" lang="ts">
	export const prerender = true;
	import { setup, tw } from 'twind';
	import * as colors from 'twind/colors';
	setup({
		mode: import.meta.env.DEV ? 'strict' : 'warn', // throw errors for invalid rules (default: warn)
		hash: false, // hash all generated class names (default: false)
		theme: {
			colors: {
				gray: colors.coolGray,
				blue: colors.lightBlue,
				red: colors.rose,
				pink: colors.fuchsia
			},
			fontFamily: {
				sans: ['Lato', 'sans-serif'],
				serif: ['Merriweather', 'serif']
			}
		}
	});
</script>

<script lang="ts">
	import Counter from '$lib/Counter/index.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class={tw`flex(& 1 col) justify-center items-center`}>
	<p class={tw`text-red-600 text-lg`}>hihi</p>
</section>
