import type { Actions, redirect } from '@sveltejs/kit';
import { Logger } from 'tslog';
import * as api from '$lib/api'; 
import fs from 'fs';
import path from 'path';

const __dirname = decodeURI(
	path.dirname(new URL(import.meta.url).pathname).replace(/^\/([a-zA-Z]):\//, '$1:/')
  );  

const logger = new Logger({ name: 'search' });
const envPath = path.join(__dirname, '..', '..', '..', '..', '..', '.env');
const envRaw = fs.readFileSync(envPath, 'utf-8');

const env: { [key: string]: string } = envRaw.split('\n').reduce<{ [key: string]: string }>((acc, line) => {
    const [key, value] = line.split('=');
    acc[key] = value;
    return acc;
}, {});

const NESTJS_ENDPOINT = env['NESTJS_ENDPOINT'];

// export const load = async ({}) => {
// 	logger.debug(`load START`);
// 	// ...  
// 	logger.debug(`load END`);
// };

export const actions: Actions = {
	search: async ({ request }) => {
	  console.log('actions post called');
	  
	  const formData = await request.formData();
	  const file = formData.get('file') as Blob;
  
	  if (!file) {
		console.log('No file found in formData.');
		return { status: 400, body: 'No file provided' };
	  }
  
	  // check file is png or jpg
	  if (file.type !== 'image/png' && file.type !== 'image/jpeg') {
		console.log('Invalid file type:', file.type);
		return { status: 400, body: 'Invalid file type. Only PNG and JPG are allowed.' };
	  }
  
	  const uploadFormData = new FormData();
	  uploadFormData.append('file', file);

	  console.log("Sending request to ", NESTJS_ENDPOINT);
	  const response = await fetch(NESTJS_ENDPOINT, {
		 method: 'POST',
		 body: uploadFormData
	  });
	  console.log("Request sent.");

	//   try {
	// 	const response = await fetch(NESTJS_ENDPOINT, {
	// 	  method: 'POST',
	// 	  body: uploadFormData
	// 	});
  
	// 	if (!response.ok) {
	// 	  throw new Error(`Failed to upload file. Status: ${response.status}`);
	// 	}
  
	// 	const result = await response.json();
	// 	logger.debug('File uploaded:', result);
  
	// 	return {
	// 	  status: 200,
	// 	  body: result
	// 	};
	//   } catch (error: any) {
	// 	logger.error('Error uploading file:', error.message);
	// 	return { status: 500, body: 'Failed to upload file' };
	//   } finally {
	// 	logger.debug(`upload END`);
	//   }
	}
  };
  
  
