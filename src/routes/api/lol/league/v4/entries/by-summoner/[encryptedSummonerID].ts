const END_POINT = '/lol/league/v4/entries/by-summoner/';
const URL = 'https://euw1.api.riotgames.com' + END_POINT;
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
	params: { encryptedSummonerID: string };
}): Promise<{ body: Record<string, unknown> } | { status: number; statusText: string }> {
	const { encryptedSummonerID } = params;
	const res = await fetch(URL + encryptedSummonerID, OPTIONS);
	if (res.ok) {
		const entryBySummoner = await res.json();
		return {
			body: entryBySummoner
		};
	}

	return {
		status: res.status,
		statusText: res.statusText
	};
}
