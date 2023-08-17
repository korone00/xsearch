import type { Actions, redirect } from '@sveltejs/kit';
import { Logger } from 'tslog';
import * as api from '$lib/api'; 
import fs from 'fs';
import path from 'path';

const __dirname = decodeURI(
	path.dirname(new URL(import.meta.url).pathname).replace(/^\/([a-zA-Z]):\//, '$1:/')
  );  

const logger = new Logger({ name: 'search' });
const envPath = path.join(__dirname, '..', '..', '..', '..', '..', '.env'); // get a .env file where xsearch folder
const envRaw = fs.readFileSync(envPath, 'utf-8');

const env: { [key: string]: string } = envRaw.split('\n').reduce<{ [key: string]: string }>((acc, line) => {
    const [key, value] = line.split('=');
    acc[key] = value;
    return acc;
}, {});

const NESTJS_ENDPOINT = env['NESTJS_ENDPOINT'];
const NESTJS_PORT = env['NESTJS_PORT'];

const NESTJS_ADDRESS = `http://${NESTJS_ENDPOINT}:${NESTJS_PORT}/image/covers`;
let imageUrls = [];

export const actions: Actions = {
	search: async ({ request, fetch }) => {
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

	  console.log("Sending request to ", NESTJS_ADDRESS);
	  const response = await fetch(NESTJS_ADDRESS, {
		method: 'POST',
		body: uploadFormData
	  });

	  console.log("Request sent.");
	  console.log(response);
	  
	  const data = await response.json();

	  if(data && Array.isArray(data)) {
		  imageUrls = data; // 이미지 URL 배열을 저장
		  return { status: 200, body: data }; // 클라이언트에게 반환
	  } else {
		  return { status: 500, body: 'Error processing response from NESTJS server.' };
	  }
	}
  };
  
