import { fail, type Actions, type redirect } from '@sveltejs/kit';
import { Logger } from 'tslog';
import * as api from '$lib/api'; 
import fs from 'fs';
import path from 'path';
import { post } from '$lib/api';

// const __dirname = decodeURI(
// 	path.dirname(new URL(import.meta.url).pathname).replace(/^\/([a-zA-Z]):\//, '$1:/')
//   );  

const logger = new Logger({ name: 'search' });
// const envPath = path.join(__dirname, '..', '..', '..', '..', '..', '.env'); // get a .env file where xsearch folder
// const envRaw = fs.readFileSync(envPath, 'utf-8');

// const env: { [key: string]: string } = envRaw.split('\n').reduce<{ [key: string]: string }>((acc, line) => {
//     const [key, value] = line.split('=');
//     acc[key] = value;
//     return acc;
// }, {});

export const actions: Actions = {
	search: async ({ request, locals }) => {
	  console.log('actions post called');
	  
	  const formData = await request.formData();
	  const file = formData.get('file') as Blob;
	  console.log('get formdata');

      const imageUrls = await post('image/covers', formData, locals.session).catch(
		(error: any) => {
		  logger.error("search catch error:", error);
		  return fail(error.statusCode, { error: error.toString() });
		}
	  );
	  console.log("imageUrls:", imageUrls);
	  if (imageUrls.error) {
		logger.error(`search error:`, imageUrls.message);
		return fail(400, { error: imageUrls.message });
	  }
	return { urls : imageUrls }
  }
}
