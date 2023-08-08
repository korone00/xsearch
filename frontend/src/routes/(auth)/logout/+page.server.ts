import { Logger } from 'tslog';
import { redirect } from '@sveltejs/kit';
const logger = new Logger({ name: 'logout' });

export const load = async ({ locals }) => {
	logger.debug(`load START`);
	await locals.session.destroy();
	logger.debug(`load FINISH`);
	throw redirect(307, '/login');
};
