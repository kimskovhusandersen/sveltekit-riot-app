<script context="module">
	export async function load({ fetch, page }) {
		const { summonerName } = page.params;
		const res = await fetch(`/api/lol/summoner/v4/summoners/by-name/${summonerName}`);

		if (res.ok) return { props: { summoner: await res.json() } };
		return {
			status: res.status,
			error: new Error()
		};
	}
</script>

<script>
	import { tw } from 'twind';
	export let summoner;
</script>

<main class={tw`m-2 p-2 text-gray-500 justify-center shadow-lg`}>
	<div class={tw`flex`}>
		<div class={tw`flex(& col) w-full`}>
			<div class={tw`my-2`}>
				<div>badge 1</div>
			</div>
			<div class={tw`flex`}>
				<div>
					<img
						class={tw`h-20 max-w-max object-contain mr-4`}
						src={`${import.meta.env.VITE_LOL_CDN_URL}11.9.1/img/profileicon/${
							summoner.profileIconId
						}.png`}
						alt={summoner.astName}
					/>
				</div>
				<div class={tw`flex(& col)`}>
					<div>
						<h1 class={tw`text-xl text-indigo-900`}>{summoner.name}</h1>
						<p>Ladder rank</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
