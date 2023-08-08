import * as api from '../../../lib/api';
import { Logger } from 'tslog';
const logger = new Logger({ name: 'userProfile' });

export const load = async ({ cookies }) => {
	const loadData = await api.get('auth/profile', cookies.get('jwt')); // 임시, 나중에 layout.server.ts에서 처리할듯
	console.log(loadData);
	return loadData;
};
