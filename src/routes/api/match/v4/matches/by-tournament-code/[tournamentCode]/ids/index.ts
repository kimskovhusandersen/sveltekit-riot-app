const END_POINT = '/lol/match/v4/matches/by-tournament-code/';
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
