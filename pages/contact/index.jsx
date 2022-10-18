import React from 'react';
import Layout from '../../src/components/ui/Layout';

import { FiInstagram } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';

const Contact = () => {
	return (
		<Layout backgroundColor={'darkBack'}>
			<div className='flex flex-col h-screen'>
				<h2 className='font-nord text-yellow text-2xl place-self-center my-4'>
					CONTACT US
				</h2>
				<h1 className='place-self-center text-yellow font-pantherBold italic text-8xl my-4 tablet:text-9xl desktop:text-[200px]'>
					REACH
				</h1>
				<h1 className='place-self-center text-yellow font-pantherBold italic text-8xl my-4 tablet:text-9xl desktop:text-[200px]'>
					OUT!
				</h1>
				<div className='place-self-center bg-primary px-8 py-2 rounded-full my-4'>
					<h3 className='font-panther italic text-yellow text-2xl space tracking-wider'>
						info@childappetite.com
					</h3>
				</div>
				<h3 className='place-self-center text-xl text-yellow font-pantherBold tracking-wider my-10'>
					OR
				</h3>
				<div className='flex flex-col place-self-center'>
					<div className='flex mt-2'>
						<FiInstagram color='white' size={'38px'} />
						<div className='flex flex-col ml-10'>
							<h3 className='text-white font-panther tracking-widest'>
								CHILD_APPETITE
							</h3>
							<h3 className='text-white font-panther tracking-widest'>
								DM US THROUGH INSTAGRAM!
							</h3>
						</div>
					</div>
					<div className='flex mt-2'>
						<FaTiktok color='white' size={'38px'} />
						<div className='flex flex-col ml-10'>
							<h3 className='text-white font-panther tracking-widest'>
								CHILD_APPETITE
							</h3>
							<h3 className='text-white font-panther tracking-widest'>
								FOLLOW US ON TIKTOK!
							</h3>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Contact;
