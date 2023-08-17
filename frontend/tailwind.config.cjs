const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	plugins: [
		//require('flowbite/plugin'),
		require('flowbite/plugin')({
			charts: true
		})
	],

	darkMode: 'class',

	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				primary: {
					50: '#FFF5F2',
					100: '#FFF1EE',
					200: '#FFE4DE',
					300: '#FFD5CC',
					400: '#FFBCAD',
					500: '#FE795D',
					600: '#EF562F',
					700: '#EB4F27',
					800: '#CC4522',
					900: '#A5371B'
				}
			},
			keyframes: {
				gradientShift: {
					'0%': { 'background-position': '100% 50%' },
					'100%': { 'background-position': '0% 50%' }
				}
			},
			animation: {
				'gradient-shift': 'gradientShift 5s infinite'
			}
		}
	}
};

module.exports = config;
