import React from 'react';
import Image from 'next/image';

import productImage from '../../assets/post_card_sausage 1.png';

const ProductCard = () => {
	return (
		<div
			className='bg-beige border-2 border-black max-w-xs rounded-2xl overflow-hidden m-2
			shadow-[5px_5px_rgba(0,0,0,0.5)] desktop:m-4
		'
		>
			<div className='aspect-w-3 aspect-h-3 group-hover:opacity-75 sm:aspect-none sm:h-96'>
				<Image src={productImage} alt='product' />
			</div>
			<div className='border-b-2 border-black'>
				<h3 className='font-panther italic text-dark text-xl flex justify-center m-2'>
					NAME OF PRODUCT
				</h3>
			</div>
			<div className='flex justify-between mx-5 my-2'>
				<h3 className='font-panther italic text-dark text-xl flex justify-center underline underline-offset-2'>
					ADD TO CART
				</h3>
				<h3 className='font-panther italic text-dark text-xl flex justify-center'>
					$1337
				</h3>
			</div>
		</div>
	);
};

export default ProductCard;
