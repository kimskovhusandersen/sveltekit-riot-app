<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/api/ddragon/11.9.1/data/en_US/champion');

		if (res.ok) {
			const jsonRes = await res.json();
			const data = Object.values(jsonRes.data);
			return { props: { champions: data } };
		}

		return {
			status: res.status,
			error: new Error(res.statusText)
		};
	}
</script>

<script lang="ts">
	import type { Champion } from '$types';

	import { tw } from 'twind';
	import { forms, formInput } from '@twind/forms';
	import { SearchIcon } from 'svelte-feather-icons';

	import { capitalize } from '$utils';

	export let champions: Champion[];

	let q: string = '';
	let filteredChampions = champions;
	let timer: NodeJS.Timeout;

	$: filterChampions(q);

	function filterChampions(q: string) {
		clearTimeout(timer);
		timer = setTimeout(() => {
			filteredChampions = champions.filter((champion) => champion.name.startsWith(capitalize(q)));
		}, 250);
	}
</script>

<main class={tw`flex(& wrap) justify-center space-y-2`}>
	<form autocomplete="off" class={tw`container ${forms}`}>
		<div class={tw`flex items-center h-10`}>
			<div class={tw`bg-gray-200 h-full w-10 justify-center items-center flex`}>
				<SearchIcon size="24" class={tw`text-gray-600`} />
			</div>
			<label for="q" class={tw`sr-only`}>Search champion</label>
			<input
				id="q"
				bind:value={q}
				placeholder="Search about champions"
				class={tw`h-full w-full ${formInput}`}
			/>
		</div>
	</form>
	<div>
		<p class={tw`text(gray-600 sm)`}>{filteredChampions.length} results</p>
	</div>
	{#each filteredChampions as champion}
		<div class={tw`flex border p-2`}>
			<img
				class={tw`h-20 max-w-max object-contain mr-4`}
				src={`${import.meta.env.VITE_LOL_CDN_URL}11.9.1/img/champion/${champion.id}.png`}
				alt={champion.name}
			/>
			<div class={tw`flex(& col)`}>
				<h2 class={tw`text(lg blue-500)`}>{champion.name}</h2>
				<p class={tw`text(sm gray-600)`}>{champion.title}</p>
				<p class={tw`text(base gray-900)`}>{champion.blurb}</p>
			</div>
		</div>
	{/each}
</main>
