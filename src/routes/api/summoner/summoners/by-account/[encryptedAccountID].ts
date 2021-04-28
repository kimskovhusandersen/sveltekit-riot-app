import riot from 'config/riot';

const END_POINT = '/lol/summoner/v4/summoners/by-account/';
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
	params: { encryptedAccountID: string };
}): Promise<{ body: Record<string, unknown> } | { status: number; statusText: string }> {
	const { encryptedAccountID } = params;
	const res = await fetch(URL + encryptedAccountID, OPTIONS);
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
