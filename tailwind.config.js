/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#0F7EBC',
				secondary: '#51C1FF',
				dark: '#0D679A',
				accent: '#FFFF3B',
				logo: '#FFF5D2',
			},
			fontFamily: {
				nord: ['Nord'],
				panther: ['Panther', 'Panther Italic', 'Panther Bold'],
				outline: [
					'Panther Outline',
					'Panther Outline Bold',
					'Panther Outline Italic',
				],
			},
		},
		screens: {
			mobile: '320px',

			tablet: '768px',
			// => @media (min-width: 640px) { ... }

			laptop: '1024px',
			// => @media (min-width: 1024px) { ... }

			desktop: '1280px',
			// => @media (min-width: 1280px) { ... }
		},
	},
	plugins: [],
};
