import riot from 'config/riot';

const END_POINT = '/lol/match/v4/matches/by-tournament-code/';
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
	params: { tournamentCode: string };
}): Promise<{ body: Record<string, unknown> } | { status: number; statusText: string }> {
	const { tournamentCode } = params;
	const res = await fetch(URL + tournamentCode + '/ids', OPTIONS);
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
