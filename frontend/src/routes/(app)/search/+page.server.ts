import { fail, type Actions, type redirect } from '@sveltejs/kit';
import { Logger } from 'tslog';
import { post } from '$lib/api';

const logger = new Logger({ name: 'search' });

export const actions: Actions = {
	search: async ({ request, locals }) => {
		console.log('actions post called');

		const formData = await request.formData();
		const file = formData.get('file') as Blob;
		console.log('get formdata');

		const imageUrls = await post('image/covers', formData, locals.session).catch((error: any) => {
			logger.error('search catch error:', error);
			return fail(error.statusCode, { error: error.toString() });
		});
		console.log('imageUrls:', imageUrls);
		if (imageUrls.error) {
			logger.error(`search error:`, imageUrls.message);
			return fail(400, { error: imageUrls.message });
		}
		return { urls: imageUrls };
	}
};
