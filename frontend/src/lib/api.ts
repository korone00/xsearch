import { error } from '@sveltejs/kit';
import {} from '$env/static/private';
// import * as dotenv from 'dotenv';
// dotenv.config();
// const base = `${BASE_PATH}`;

const base = `http://${import.meta.env.VITE_NESTJS_ENDPOINT}:${import.meta.env.VITE_NESTJS_PORT}`;

async function send({
	method,
	path,
	data,
	token
}: {
	method: any;
	path: any;
	data: any;
	token: any;
}) {
	const requestHeaders: HeadersInit = new Headers();

	let bodyData;

	if (data) {
		if (!(data instanceof FormData)) {
			requestHeaders.set('Content-Type', 'application/json');
			bodyData = JSON.stringify(data);
		} else {
			bodyData = data;
		}
	}

	if (token) {
		requestHeaders.set('Authorization', 'Bearer ' + token);
	}

	const res = await fetch(`${base}/${path}`, {
		method: method,
		headers: requestHeaders,
		body: bodyData
	});

	if (res.ok || res.status === 422) {
		const text = await res.text();
		return text ? JSON.parse(text) : {};
	}
	throw error(res.status, res.statusText);
}

export function post(path: any, data: any, token: any) {
	return send({ method: 'POST', path, data, token });
}

export function get(path: any, token: any) {
	const data = null;
	return send({ method: 'GET', path, data, token });
}

export function put(path: any, data: any, token: any) {
	return send({ method: 'PUT', path, data, token });
}
// get, delete, update 추가
