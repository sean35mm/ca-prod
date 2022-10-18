import React from 'react';
import Image from 'next/image';
import Button from '../Button/Button';
import ourStoryImage from '../../assets/ourstoryimage.png';

const OurStory = () => {
	return (
		<div className='tablet:flex border-2 border-black w-11/12 tablet:w-[97%] rounded-2xl overflow-hidden'>
			<div className='laptop:flex mobile:p-6 bg-yellow border-b-2 tablet:border-r-2 tablet:border-b-0 border-black tablet:w-1/2'>
				<h2 className='font-panther desktop:ml-16 italic text-3xl laptop:text-6xl text-green tablet:self-center tablet:mr-4 laptop:mr-12'>
					OUR STORY
				</h2>
				<div className='flex tablet:self-center flex-col mt-4'>
					<p className='font-nord text-sm text-green laptop:w-84 laptop:ml-6 w-3/4'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
						voluptatum molestiae laboriosam. Cum qui totam nobis perspiciatis ut
						odio, quia id dolore accusantium voluptatum consectetur maxime
						provident harum quos assumenda?
					</p>
					<a
						href='#'
						className='flex w-44 mt-10 mb-5 p-1 bg-yellow laptop:ml-6 justify-center rounded-3xl border-2 border-green font-panther text-xl italic text-green'
					>
						MORE INFO
					</a>
				</div>
			</div>
			<div className='bg-green tablet:w-1/2 place-self-center flex justify-center'>
				<Image src={ourStoryImage} alt='art' />
			</div>
		</div>
	);
};

export default OurStory;

{
	/* <div className='w-7/8 h-4/6 rounded-xl border-2 border-black mx-4 bg-dark'>
	<div className='flex justify-center'>
		<Image src={heroImage} alt='hero image' />
	</div>
</div>; */
}
