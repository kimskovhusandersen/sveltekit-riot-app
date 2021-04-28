import faker from 'faker';

export async function get({
	params
}: {
	params: { lastName: string };
}): Promise<{
	body: {
		lastName: string;
		firstName: string;
		avatar: string;
		title: string;
		phone: string;
		email: string;
	};
}> {
	const { lastName } = params;
	return {
		body: {
			lastName,
			firstName: faker.name.firstName(),
			avatar: `https://avatars.dicebear.com/api/human/${lastName}.svg`,
			title: faker.name.title(),
			phone: faker.phone.phoneNumber(),
			email: faker.internet.email()
		}
	};
}
