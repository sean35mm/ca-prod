import React from 'react';

const Button = ({ children, href }) => {
	return (
		<a
			className='flex py-1 px-6 bg-yellow justify-center rounded-3xl border border-black font-panther text-xl italic text-dark'
			href={`${href}`}
		>
			{children}{' '}
		</a>
	);
};

export default Button;
