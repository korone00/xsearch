import { redirect, type Actions, fail } from '@sveltejs/kit';
import { Logger } from 'tslog';
import type { PageServerLoad } from './$types';
const logger = new Logger({ name: 'register' });
import * as api from '../../../lib/api';

export const load = (async ({ parent, url, locals }) => {
	logger.debug(`load START`);
	// ...
	logger.debug(`load END`);
}) satisfies PageServerLoad;

export const actions: Actions = {
	register: async ({ locals, request, cookies }) => {
		const data = await request.formData();
		const confirmPassword = data.get('confirm_password');
		const password = data.get('password');

		if (confirmPassword != password) {
			return fail(400, { password, incorrecting: true });
		}
		logger.debug(`actions register START`);
		logger.debug(`actions register password:${password}`);

		const body = await api.post(
			'auth/register',
			{
				id: data.get('id'),
				password: data.get('password'),
				name: data.get('name'),
				email: data.get('email'),
				phone: data.get('phone'),
				role: 'user'
			},
			''
		);

		if (body.status == 400 || body.status == 500) {
			const message = body.message;
			logger.debug(message);
			return fail(body.status, { message, incorrect: true });
		}
		logger.debug(`actions register redirect to /login`);
		throw redirect(302, '/login'); // login으로 redirect
	}
} satisfies Actions;
