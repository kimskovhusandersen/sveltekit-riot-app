const URL = 'http://ddragon.leagueoflegends.com/cdn/';
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
	params: {
		version: string;
		locale: string;
	};
}): Promise<{ body: Record<string, unknown> } | { status: number; statusText: string }> {
	const { version, locale } = params;
	const res = await fetch(`${URL}${version}/data/${locale}/champion.json`, OPTIONS);
	if (res.ok) {
		const champions = await res.json();
		return {
			body: champions
		};
	}

	return {
		status: res.status,
		statusText: res.statusText
	};
}
