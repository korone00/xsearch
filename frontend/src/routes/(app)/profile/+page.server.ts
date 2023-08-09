import * as api from '../../../lib/api';
import { Logger } from 'tslog';
const logger = new Logger({ name: 'userProfile' });

export const load = async ({ locals }: any) => {
	logger.debug(`load START`);
	const loadData = await api.get('auth/profile', locals.session.data.jwt); // 임시, 나중에 layout.server.ts에서 처리할듯
	logger.debug(`load FINISH`);
	return loadData;
};

// export async function GET({ locals }: any) {
// 	logger.debug(`load START`);
// 	const loadData = await api.get('auth/profile', locals.session.data.jwt);
// 	logger.debug(`load FINISH`);
// 	return loadData;
// }
