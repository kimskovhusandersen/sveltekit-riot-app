const END_POINT = '/lol/platform/v3/champion-rotations';
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
