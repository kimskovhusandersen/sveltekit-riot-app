import riot from 'config/riot';

const END_POINT = '/lol/status/v3/shard-data';
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
		const status = await res.json();
		return {
			body: status
		};
	}

	return {
		status: res.status,
		statusText: res.statusText
	};
}
