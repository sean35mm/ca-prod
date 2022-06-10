import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

//Icons
import { FiArrowUpRight } from 'react-icons/fi';

//Assets
import logo from '../../assets/CA-Logo.png';

const Navbar = () => {
	return (
		<div className='flex-col bg-primary justify-center p-8'>
			<div>
				<Link href='/'>
					<Image src={logo} alt='logo' width='241px' height='121px' />
				</Link>
			</div>
			<div>
				<ul className='flex justify-center'>
					<Link href='#'>
						<li className='nav-btn'>
							SHOP{' '}
							<span className='ml-3'>
								<FiArrowUpRight />
							</span>
						</li>
					</Link>
					<Link href='#'>
						<li className='nav-btn'>
							NFT{' '}
							<span className='ml-3'>
								<FiArrowUpRight />
							</span>
						</li>
					</Link>
					<Link href='#'>
						<li className='nav-btn'>
							INFO{' '}
							<span className='ml-3'>
								<FiArrowUpRight />
							</span>
						</li>
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
