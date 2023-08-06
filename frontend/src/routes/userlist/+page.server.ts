import type { Actions } from '@sveltejs/kit';
import * as api from '../../lib/api';
import { Logger } from 'tslog';
const logger = new Logger({ name: 'userList' });

export const load = async ({ cookies }) => {
	logger.debug(`load START`);
	const loadData = await api.get('auth/users', cookies.get('jwt'));
	return loadData;
};

// export const actions: Actions = {
// 	userlist: async ({}) => {}
// };
