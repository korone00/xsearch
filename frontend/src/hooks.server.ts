import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { handleSession } from 'svelte-kit-cookie-session';

export const sessionHandler = handleSession({
	init: (event) => ({
		views: 0
	}),
	secret: 'SOME_COMPLEX_SECRET_AT_LEAST_32_CHARS'
});

export const handle: Handle = sequence(sessionHandler, ({ resolve, event }: any) => {
	return resolve(event);
});
