import React, { useState } from 'react';
import Image from 'next/image';

import { useSnipcart } from 'use-snipcart';

//Icons
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

//Assets
import logo from '../../assets/CA-Logo.png';
import HamburgerMenu from '../ui/HamburgerMenu';

const Navbar = () => {
	const [isOpen, setisOpen] = useState(false);

	const { cart = {} } = useSnipcart();

	function handleMenu(e) {
		e.preventDefault();
		console.log('Clicked!!!');
	}

	return (
		<div className='bg-primary flex justify-end w-screen p-6 items-center'>
			<div className='mx-auto'>
				<a href={'/'}>
					<Image
						src={logo}
						alt='logo'
						width={'203.7px'}
						height={'102px'}
						objectFit='contain'
					/>
				</a>
			</div>
			<div className='flex'>
				<div className='pr-4'>
					<AiOutlineShoppingCart size={'36px'} color='#FFFF3B' />
				</div>
				<div>
					<button className='snipcart-checkout'>
						<span>${cart.subtotal?.toFixed(2)}</span>
					</button>
				</div>
				<div>
					<GiHamburgerMenu size={'36px'} color='#FFFF3B' onClick={handleMenu} />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
