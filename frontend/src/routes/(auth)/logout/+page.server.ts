import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
	console.log(cookies.get('jwt'));
	await cookies.delete('jwt');
	throw redirect(302, '/login');
};
