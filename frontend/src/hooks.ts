import { handleSession } from 'svelte-kit-cookie-session';

export const handle = handleSession({
	init: (event) => ({
		views: 0
	}),
	secret: 'SOME_COMPLEX_SECRET_AT_LEAST_32_CHARS'
});
