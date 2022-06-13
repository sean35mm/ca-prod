import React from 'react';
import Image from 'next/image';

//Assets
import heroImage from '../../assets/Hero.png';

const Hero = () => {
	return (
		<div className='bg-primary pb-10'>
			<div className='bg-primary'>
				<h1 className='text-yellow font-pantherBold italic text-7xl text-center laptop:text-[200px] desktop:text-[250px]  tablet:text-9xl -ml-4'>
					WELCOME
				</h1>
				<div>
					<div className='w-7/8 h-4/6 rounded-xl border border-black mx-4 bg-dark'>
						<div className='laptop:ml-20'>
							<Image src={heroImage} alt='hero image' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
