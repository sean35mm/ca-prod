/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#2098DB',
				secondary: '#79CEFD',
				dark: '#00517D',
				yellow: '#FFFF3B',
				green: '#399458',
				beige: '#FFF5D2',
			},
			fontFamily: {
				nord: ['Nord'],
				panther: ['Panther', 'Panther Italic', 'Panther Bold'],
				pantherBold: ['Panther Bold', 'Panther Bold Italic'],
				outline: [
					'Panther Outline',
					'Panther Outline Bold',
					'Panther Outline Italic',
				],
			},
		},
		screens: {
			mobile: '325px',

			tablet: '768px',
			// => @media (min-width: 640px) { ... }

			laptop: '1024px',
			// => @media (min-width: 1024px) { ... }

			desktop: '1440px',
			// => @media (min-width: 1280px) { ... }
		},
	},
	plugins: [],
};
