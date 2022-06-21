import React from 'react';
import Image from 'next/image';

//Icons
import { FiInstagram } from 'react-icons/fi';

//Assets
import logo from '../../assets/CA-Logo.png';

const Footer = ({ backgroundColor }) => {
	return (
		<div className={`${backgroundColor} py-6 w-full mt-10`}>
			<div className='flex justify-center items-center'>
				<div className='tablet:mx-16 mx-4'>
					<Image
						src={logo}
						alt='logo'
						width={'100px'}
						height={'50px'}
						layout='intrinsic'
					/>
				</div>
				<div className='tablet:mx-16 mx-4'>
					<FiInstagram color='white' size={'38px'} />
				</div>
				<div className='tablet:mx-16 mx-4'>
					<p className='text-white font-nord text-xs'>Designed By |</p>
					<p className='text-white font-nord text-xs'>CHILD APPETITE LLC</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
