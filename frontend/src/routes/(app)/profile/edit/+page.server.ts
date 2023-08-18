import { redirect, fail } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';
import { Logger } from 'tslog';
import * as api from '../../../../lib/api';
const logger = new Logger({ name: 'Edit' });

export const load = async ({ parent, url, locals }: any) => {
	logger.debug('profile/edit load');
	const { id } = await parent();
	let initialValue = null;
	const userId = url.searchParams.get('userId'); // 없으면 null
	if (userId && id != userId) {
		initialValue = await api.post(
			'auth/profile2',
			{
				userId: userId
			},
			locals.session.data.jwt
		);
	} else {
		initialValue = await api.get('auth/profile', locals.session.data.jwt);
	}
	return initialValue;
};

export const actions: Actions = {
	modify: async ({ request, locals }) => {
		const data = await request.formData();
		const confirmPassword = data.get('confirm_password');
		const password = data.get('password');
		if (confirmPassword != password) {
			return fail(400, { password, incorrecting: true });
		}
		logger.debug(`action edit START`);
		const modified = await api.put(
			'auth/modify',
			{
				id: data.get('id'),
				password: data.get('password'),
				name: data.get('name'),
				email: data.get('email'),
				phone: data.get('phone')
			},
			locals.session.data.jwt
		);
		logger.debug(`actions edit redirect to /profile`);
		if (locals.role === 'user') {
			throw redirect(302, '/profile');
		} else {
			throw redirect(307, `/profile?userId=${modified.id}`);
		}
	}
};
