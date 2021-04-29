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

<script>
	import { tw } from 'twind';
	export let champions;
</script>

<main>
	{#each champions as champion}
		<div class={tw`flex border p-2`}>
			<img
				class={tw`h-20 max-w-max object-contain mr-4`}
				src={`${import.meta.env.VITE_LOL_CDN_URL}11.9.1/img/champion/${champion.id}.png`}
				alt={champion.name}
			/>
			<div class={tw`flex(& col)`}>
				<h2 class={tw`text(lg blue-500)`}>{champion.name}</h2>
				<p class={tw`text(sm gray-600)`}>{champion.title}</p>
				<p class={tw`text(md gray-900)`}>{champion.blurb}</p>
			</div>
		</div>
	{/each}
</main>

<style>
	main {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.box {
		padding: 0.25rem;
		margin: 1.5rem;
		color: salmon;
		box-shadow: 4px 5px 11px 2px lightgray;
	}
	.box:hover {
		box-shadow: 4px 5px 11px 10px lightgray;
	}
	img {
		width: 15rem;
		object-fit: contain;
	}
</style>
