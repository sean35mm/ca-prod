import React from 'react';
import { RiArrowRightUpLine } from 'react-icons/ri';

const Button = ({ children, buttonColor }) => {
	return (
		<button type='button' className='button'>
			{children}{' '}
			<span>
				<RiArrowRightUpLine className='ml-3' color={buttonColor} />
			</span>
		</button>
	);
};

export default Button;
