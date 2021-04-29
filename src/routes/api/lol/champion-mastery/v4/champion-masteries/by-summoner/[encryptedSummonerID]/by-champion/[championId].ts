const OPTIONS = {
	method: 'GET',
	withCredentials: true,
	headers: {
		'X-Riot-Token': import.meta.env.VITE_API_KEY as string,
		'Content-Type': 'application/json'
	}
};

export async function get({
	params
}: {
	params: { encryptedSummonerID: string; championId: string };
}): Promise<{ body: Record<string, unknown> } | { status: number; statusText: string }> {
	const { encryptedSummonerID, championId } = params;
	const res = await fetch(
		'https://euw1.api.riotgames.com' +
			'/lol/champion-mastery/v4/champion-masteries/by-summoner/' +
			encryptedSummonerID +
			'/by-champion/' +
			championId,
		OPTIONS
	);
	if (res.ok) {
		const leagues = await res.json();
		return {
			body: leagues
		};
	}

	return {
		status: res.status,
		statusText: res.statusText
	};
}
