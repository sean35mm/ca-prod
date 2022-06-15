import React from 'react';

const Button = ({ children }) => {
	return (
		<button
			type='button'
			className='flex py-1 px-6 bg-yellow justify-center rounded-3xl border border-black font-panther text-xl italic text-dark'
		>
			{children}{' '}
		</button>
	);
};

export default Button;
