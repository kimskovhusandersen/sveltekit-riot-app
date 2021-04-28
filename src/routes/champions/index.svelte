<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/api/champions');
		console.log({res})
		if (res.ok) {
			return { props: { champions: await res.json() } };
		}

		return {
			status: res.status,
			error: new Error(res.statusText)
		};
	}
</script>

<script>
	export let champions;
</script>

<main>
	{#each champions as champion}

			<h2>{champion}</h2>

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
