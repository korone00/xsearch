import { error } from '@sveltejs/kit';

const base = 'http://localhost:3000';
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
		requestHeaders.set('Content-Type', 'application/json');
		bodyData = JSON.stringify(data);
	}

	if (token) {
		requestHeaders.set('Authorization', `Token ${token}`);
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

// get, delete, update 추가
