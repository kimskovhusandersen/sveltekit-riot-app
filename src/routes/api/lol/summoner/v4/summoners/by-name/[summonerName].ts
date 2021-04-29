const END_POINT = '/lol/summoner/v4/summoners/by-name/';
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
	params: { summonerName: string };
}): Promise<{ body: Record<string, unknown> } | { status: number; statusText: string }> {
	const { summonerName } = params;
	const res = await fetch(URL + summonerName, OPTIONS);
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
