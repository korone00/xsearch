import { redirect, type Actions, fail } from '@sveltejs/kit';
import { Logger } from 'tslog';
import type { PageServerLoad } from './$types';
const logger = new Logger({ name: 'register' });

export const load = (async ({ parent, url, locals }) => {
	logger.debug(`load START`);
	// ...
	logger.debug(`load END`);
}) satisfies PageServerLoad;

export const actions: Actions = {
	register: async ({ locals, request, cookies }) => {
		const data = await request.formData();
		console.log(data);
		const confirmPassword = data.get('confirm_password');
		const password = data.get('password');

		if (confirmPassword != password) {
			return fail(400, { password, incorrecting: true });
		}
		console.log('ok');
		logger.debug(`actions register START`);
		logger.debug(`actions register password:${password}`);

		logger.debug(`actions register redirect to /login`);

		throw redirect(302, '/login'); // register 성공하면 login으로 redirect
	}
} satisfies Actions;
