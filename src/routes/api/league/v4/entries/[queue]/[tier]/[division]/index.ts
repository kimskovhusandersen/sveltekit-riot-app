import riot from 'config/riot';

const END_POINT = '/lol/league/v4/entries/';
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
	params,
	query
}: {
	params: { queue: string; tier: string; division: string };
	query: URLSearchParams;
}): Promise<{ body: Record<string, unknown> } | { status: number; statusText: string }> {
	const { queue, tier, division } = params;

	const res = await fetch(
		URL + queue + '/' + tier + '/' + division + '?' + query.toString(),
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
