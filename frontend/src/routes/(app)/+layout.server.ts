import { Logger } from 'tslog';
import { redirect } from '@sveltejs/kit';
const logger = new Logger({ name: 'layout' });
import jwt_decode from 'jwt-decode';
interface TokenClaims {
	id: string;
	iat: number;
	exp: number;
}

export const load = async ({ locals }: any) => {
	const valid = locals.session.data.jwt;
	if (valid) {
		logger.debug(`login 완료`);
		const decoded = jwt_decode(valid) as TokenClaims;
		locals.userId = decoded.id;
		return decoded;
	} else {
		logger.debug(`login 필요`);
		throw redirect(307, '/login');
	}
};
