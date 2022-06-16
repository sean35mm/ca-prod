import React from 'react';
import Image from 'next/image';
import ourStoryImage from '../../assets/ourstoryimage.png';

const OurStory = () => {
	return (
		<div className='tablet:flex border-2 border-black w-11/12 tablet:w-5/6 rounded-2xl overflow-hidden'>
			<div className='laptop:flex mobile:p-6 bg-yellow border-b-2 tablet:border-r-2 tablet:border-b-0 border-black tablet:w-1/2'>
				<h2 className='font-panther italic text-3xl text-green tablet:self-center tablet:mr-4 laptop:mr-8'>
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
						className='flex mt-10 mb-5 w-44 p-1 bg-yellow laptop:ml-6 justify-center rounded-3xl border-2 border-green font-panther text-xl italic text-green'
					>
						MORE INFO
					</a>
				</div>
			</div>
			<div className='bg-green tablet:w-1/2 p-6 tablet:p-0 flex'>
				<div className='bg-green inline-block self-center justify-center'>
					<Image src={ourStoryImage} alt='art' />
				</div>
			</div>
		</div>
	);
};

export default OurStory;
