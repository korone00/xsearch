import { Logger } from 'tslog';
import { redirect } from '@sveltejs/kit';
const logger = new Logger({ name: 'logout' });

/*
export const load = async ({ locals }: any) => {
	logger.debug(`load START`);
	await locals.session.destroy();
	logger.debug(`load FINISH`);
	throw redirect(307, '/login');
};
*/
export async function GET({ locals }: any) {
	logger.debug(`logout START`);
	await locals.session.destroy();
	logger.debug(`logout FINISH`);
	throw redirect(307, '/login');
}
