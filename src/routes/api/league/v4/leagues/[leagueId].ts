import riot from 'config/riot';

const END_POINT = '/lol/league/v4/leagues/';
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
	params: { leagueId: string };
}): Promise<{ body: Record<string, unknown> } | { status: number; statusText: string }> {
	const { leagueId } = params;
	const res = await fetch(URL + leagueId, OPTIONS);
	if (res.ok) {
		const league = await res.json();
		return {
			body: league
		};
	}

	return {
		status: res.status,
		statusText: res.statusText
	};
}
