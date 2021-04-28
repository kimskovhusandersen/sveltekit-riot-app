const END_POINT = '/lol/status/v3/shard-data';
const URL = 'https://euw1.api.riotgames.com' + END_POINT;
const OPTIONS = {
	method: 'GET',
	withCredentials: true,
	headers: {
		'X-Riot-Token': import.meta.env.VITE_API_KEY as string,
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
