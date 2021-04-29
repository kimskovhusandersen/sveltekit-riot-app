<script lang="ts">
	import { tw } from 'twind';
	import Header from '$lib/Header/index.svelte';
	import '../app.css';
</script>

<Header />

<main class={tw`flex(& 1 col) p-4 container mx-auto my-0 box-border`}>
	<slot />
</main>

<footer class={tw`flex(& col) justify-center items-center p-[40px]`}>
	<p>Kim Skovhus Andersen &copy; 2021</p>
</footer>

<style>
	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
