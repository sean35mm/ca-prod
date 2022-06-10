import React from 'react';
import Head from 'next/head';

const Meta = () => {
	return (
		<Head>
			<title>Child Appetite</title>
			<meta charSet='UTF-8' />
			<meta
				name='keywords'
				content='art prints, child appetite, iris kwon, artist, bts, trippy art, stickers'
			/>
			<meta
				name='description'
				content='Trippy Art and Stationary designed by Iris Kwon'
			/>
			<meta name='author' content='Iris Kwon' />
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			<link rel='icon' href='/favicon.ico' />
			<link
				rel='apple-touch-icon'
				sizes='180x180'
				href='/apple-touch-icon.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='32x32'
				href='/favicon-32x32.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='16x16'
				href='/favicon-16x16.png'
			/>
		</Head>
	);
};

export default Meta;
