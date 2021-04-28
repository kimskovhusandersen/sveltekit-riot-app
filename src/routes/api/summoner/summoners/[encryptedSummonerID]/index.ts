import riot from 'config/riot';

const END_POINT = '/lol/summoner/v4/summoners/';
const URL = riot.baseUrl + END_POINT;
const OPTIONS = {
	method: 'GET',
	withCredentials: true,
	headers: {
		'X-Riot-Token': riot.API_KEY,
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
