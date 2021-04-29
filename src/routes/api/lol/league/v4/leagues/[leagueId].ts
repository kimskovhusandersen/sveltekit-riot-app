const END_POINT = '/lol/league/v4/leagues/';
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
