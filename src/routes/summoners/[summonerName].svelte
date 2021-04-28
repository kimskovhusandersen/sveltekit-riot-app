<script context="module">
	export async function load({ fetch, page }) {
		const { summonerName } = page.params;
		const res = await fetch(`/api/summoner/summoners/by-name/${summonerName}`);

		if (res.ok) return { props: { summoner: await res.json() } };
		return {
			status: res.status,
			error: new Error()
		};
	}
</script>

<script>
	export let summoner;
	console.log({summoner})
</script>


<main>
	<h1>{summoner.name} </h1>
	<div class="box">
		<img src={``} alt={summoner.astName} />
		<ul>
			<li>Profil Icon ID: {summoner.profileIconId}</li>
			<li>Level: {summoner.summonerLevel}</li>
			<li>Revision Date: {new Date(summoner.revisionDate).toLocaleDateString()}</li>
		</ul>
	</div>
</main>

<style>
	main {
		margin: 4rem;
		padding: 2rem;
		color: gray;
		justify-content: center;
		box-shadow: 4px 5px 11px 10px lightgray;
	}
	h1 {
		color: salmon;
	}
	.box {
		display: flex;
		font-size: 1.5rem;
	}
	img {
		width: 15rem;
		object-fit: contain;
		margin-right: 2rem;
	}
	li {
		margin-bottom: 1rem;
	}
</style>
