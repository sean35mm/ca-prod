import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useSnipcart } from 'use-snipcart';

//Icons
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

//Assets
import logo from '../../assets/CA-Logo.png';
import HamburgerMenu from '../ui/HamburgerMenu';

const Navbar = ({ backgroundColor }) => {
	const [isOpen, setIsOpen] = useState(false);

	const { cart = {} } = useSnipcart();

	let menuOptions;

	{
		isOpen
			? (menuOptions = (
					<div className='absolute top-28 w-full h-full bg-red-400 z-50'>
						<div>
							<ul>
								<li>ABOUT</li>
								<li>ABOUT</li>
								<li>ABOUT</li>
								<li>ABOUT</li>
							</ul>
						</div>
					</div>
			  ))
			: null;
	}

	return (
		<div className={`w-full mb-10 ${backgroundColor}`}>
			{menuOptions}
			<div className='absolute left-4 top-4 tablet:left-0 tablet:top-4 tablet:right-0 text-center'>
				<a href={'/'}>
					<Image
						src={logo}
						alt='logo'
						width={'180px'}
						height={'90px'}
						objectFit='contain'
					/>
				</a>
			</div>
			<div className='flex justify-end py-8 mr-4'>
				<div className='pr-2'>
					<AiOutlineShoppingCart size={'36px'} color='#FFFF3B' />
				</div>
				<div className='pr-2 self-center flex z-10'>
					<button className='snipcart-checkout font-panther text-yellow text-2xl'>
						<span>${cart.subtotal?.toFixed(2)}</span>
					</button>
				</div>
				<div className='flex ml-4 z-10 cursor-pointer'>
					<GiHamburgerMenu
						size={'36px'}
						color='#FFFF3B'
						onClick={() => setIsOpen(!isOpen)}
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

{
	/* <div className='flex'>
				<div className='pr-2'>
					<AiOutlineShoppingCart size={'36px'} color='#FFFF3B' />
				</div>
				<div className='pr-2 self-center'>
					<button className='snipcart-checkout font-panther text-yellow text-2xl'>
						<span>${cart.subtotal?.toFixed(2)}</span>
					</button>
				</div>
				<div>
					<GiHamburgerMenu
						size={'36px'}
						color='#FFFF3B'
						onClick={() => setIsOpen(!isOpen)}
					/>
				</div>
			</div> */
}
