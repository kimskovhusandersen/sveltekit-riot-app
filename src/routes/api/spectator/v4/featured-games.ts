import riot from 'config/riot';

const END_POINT = '/lol/spectator/v4/featured-games';
const URL = riot.baseUrl + END_POINT;
const OPTIONS = {
	method: 'GET',
	withCredentials: true,
	headers: {
		'X-Riot-Token': riot.API_KEY,
		'Content-Type': 'application/json'
	}
};

export async function get(): Promise<
	{ body: Record<string, unknown> } | { status: number; statusText: string }
> {
	const res = await fetch(URL, OPTIONS);
	if (res.ok) {
		const championRotations = await res.json();
		return {
			body: championRotations
		};
	}

	return {
		status: res.status,
		statusText: res.statusText
	};
}
