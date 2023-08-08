// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		//interface PageData {}
		// interface Platform {}
		interface Locals {
			session: import('svelte-kit-cookie-session').Session<SessionData>;
		}
	}
}

export {};
