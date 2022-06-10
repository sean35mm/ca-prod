import React from 'react';
import Image from 'next/image';

//Icons
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

//Assets
import logo from '../../assets/CA-Logo.png';

const Navbar = () => {
	return (
		<div className='bg-primary flex justify-end w-screen p-6 items-center'>
			<div className='mx-auto'>
				<a href={'/'}>
					<Image
						src={logo}
						alt='logo'
						width={'203.7px'}
						height={'102px'}
						layout='intrinsic'
					/>
				</a>
			</div>
			<div className='flex'>
				<div className='pr-4'>
					<AiOutlineShoppingCart size={'36px'} color='#FFFF3B' />
				</div>
				<div>
					<GiHamburgerMenu size={'36px'} color='#FFFF3B' />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
