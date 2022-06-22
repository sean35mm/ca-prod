import React from 'react';
import Image from 'next/image';
import Layout from '../../src/components/ui/Layout';
import Button from '../../src/components/Button/Button';

import aboutImage from '../../src/assets/aboutImage.png';

import { FiArrowUpRight } from 'react-icons/fi';

const About = () => {
	return (
		<Layout backgroundColor={'darkBack'}>
			<div className='bg-dark flex flex-col justify-center'>
				<h3 className='font-nord text-yellow text-2xl place-self-center my-4'>
					STORY
				</h3>
				<h1 className='place-self-center text-yellow font-pantherBold italic text-8xl my-4 tablet:text-9xl desktop:text-[200px]'>
					ART FOR
				</h1>
				<h1 className='place-self-center text-yellow font-pantherBold italic text-8xl mb-4 tablet:text-9xl desktop:text-[200px]'>
					FUN.
				</h1>
				<h3 className='place-self-center text-center text-white text-2xl font-panther w-1/2 my-4'>
					Calling all lovers of sugar and spice and everything nice! Welcome to
					the Child Appetite playground: a safe space for our bittersweet
					thoughts. Please feel free to indulge in consuming, sharing, and
					creating with us.
				</h3>
				<h3 className='place-self-center text-center text-white text-2xl font-panther w-1/2 my-4'>
					Let&apos;s be friends! (@child_appetite)
				</h3>
				<h3 className='place-self-center text-center text-white text-2xl font-panther w-1/2 my-4'>
					For design inquiries email: iris@childappetite.com
				</h3>
			</div>
			<div className='my-10 bg-dark'>
				<div className='w-7/8 h-4/6 rounded-xl border-2 border-black mx-4 bg-yellow'>
					<div className='flex justify-center'>
						<Image src={aboutImage} alt='hero image' />
					</div>
				</div>
			</div>
			<div className='flex justify-center'>
				<Button href={'/products'}>
					SHOP{' '}
					<span className='ml-2 self-center'>
						<FiArrowUpRight size={'26px'} color={'#00517D'} />
					</span>
				</Button>
			</div>
		</Layout>
	);
};

export default About;
