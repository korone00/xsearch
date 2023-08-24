import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import dotenv from 'dotenv';
import { resolve } from 'path';

const envConfig = dotenv.config({ path: resolve(__dirname, '../.env') }).parsed || {};

const viteEnv: { [key: string]: string } = {};
for (const k in envConfig) {
	if (k.startsWith('VITE_')) {
		viteEnv[k] = envConfig[k];
	}
}

export default defineConfig({
	define: {
		'process.env.VITE_NESTJS_ENDPOINT': JSON.stringify(process.env.VITE_NESTJS_ENDPOINT || 'localhost'),
		'process.env.VITE_NESTJS_PORT': JSON.stringify(process.env.VITE_NESTJS_PORT || '3000'),
	  },
	server: {
		host: envConfig.SERVER_ADDRESS || '0.0.0.0',
		port: 5137,
		cors: true
	},
	plugins: [sveltekit()]
});
