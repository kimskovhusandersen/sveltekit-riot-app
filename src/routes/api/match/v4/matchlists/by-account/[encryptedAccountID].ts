const END_POINT = '/lol/match/v4/matchlists/by-account/';
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
	params,
	query
}: {
	params: { encryptedAccountId: string };
	query: URLSearchParams;
}): Promise<{ body: Record<string, unknown> } | { status: number; statusText: string }> {
	const { encryptedAccountId } = params;
	const res = await fetch(URL + encryptedAccountId + '?' + query, OPTIONS);
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
