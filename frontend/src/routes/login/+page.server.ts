import { type Actions, fail, redirect } from '@sveltejs/kit';
import { Logger } from 'tslog';
import * as api from '../../lib/api';
const logger = new Logger({ name: 'login' });

export const load = async ({}) => {
	logger.debug(`load START`);
	// ...
	logger.debug(`load END`);
};

export const actions: Actions = {
	login: async ({ request }) => {
		const data = await request.formData();
		logger.debug(`actions login START`);
		console.log('log1');
		const body = await api.post(
			'auth/login',
			{
				id: data.get('id'),
				password: data.get('password')
			},
			''
		);
		console.log(body);
		if (body.errors) {
			return fail(body.error, body);
		}
		throw redirect(307, '/'); // main으로 redirect
	}
} satisfies Actions;
