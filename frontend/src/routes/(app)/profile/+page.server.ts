import * as api from '../../../lib/api';
import { Logger } from 'tslog';
const logger = new Logger({ name: 'userProfile' });

export const load = async ({ locals, parent, url }: any) => {
	logger.debug(`load START`);
	const { role } = await parent();
	let loadData;
	logger.debug(locals.session.data.jwt);
	if (role == 'admin' && url.searchParams.get('userId')) {
		loadData = await api.post(
			'auth/profile2',
			{
				userId: url.searchParams.get('userId')
			},
			locals.session.data.jwt
		);
	} else {
		loadData = await api.get('auth/profile', locals.session.data.jwt);
	}
	const transData = {
		...loadData,
		accessRole: role,
		token: locals.session.data.jwt
	};
	logger.debug(`load FINISH`);
	return transData;
};
