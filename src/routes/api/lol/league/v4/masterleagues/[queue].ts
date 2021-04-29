const END_POINT = '/lol/league/v4/masterleagues/by-queue/';
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
	params: { queue: 'RANKED_SOLO_5x5' | 'RANKED_TFT' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' };
}): Promise<{ body: Record<string, unknown> } | { status: number; statusText: string }> {
	const { queue } = params;
	const res = await fetch(URL + queue, OPTIONS);
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
