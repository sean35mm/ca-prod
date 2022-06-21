import React from 'react';
import Image from 'next/image';

//Assets
import heroImage from '../../assets/Hero.png';

const Hero = () => {
	return (
		<div className='bg-primary pb-5'>
			<div className='bg-primary'>
				<h1 className='text-yellow font-pantherBold italic text-6xl text-center laptop:text-[200px] desktop:text-[250px]  tablet:text-9xl -ml-4'>
					WELCOME
				</h1>
				<div>
					<div className='w-7/8 h-4/6 rounded-xl border-2 border-black mx-4 bg-dark'>
						<div className='flex justify-center'>
							<Image src={heroImage} alt='hero image' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
