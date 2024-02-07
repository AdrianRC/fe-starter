import { fail } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

const COOKIE_NAME = 'starterkit-name';

export const load = (({ cookies }) => {
	const name = cookies.get(COOKIE_NAME);
	return { name };
}) satisfies PageServerLoad;

export const actions = {
	create: async ({ request, cookies }) => {
		const data = await request.formData();
		const name = String(data.get('name'));
		cookies.set(COOKIE_NAME, name, { path: '/' });
	},

	delete: async ({ cookies }) => {
		cookies.delete(COOKIE_NAME, { path: '/' });
	},

	error: async () => {
		return fail(422, { error: 'Big scary error' });
	}
} satisfies Actions;
