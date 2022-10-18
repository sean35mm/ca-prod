/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const ProductCard = ({ products }) => {
	return (
		<div className='overflow-hidden flex flex-row flex-wrap justify-center'>
			{products.map((product) => {
				return (
					<div
						className='bg-beige border-2 border-black max-w-xs rounded-2xl overflow-hidden m-2
				shadow-[5px_5px_rgba(0,0,0,0.5)] desktop:m-4
			'
						key={product.slug}
					>
						<Link href={`/products/${product.slug}`}>
							<a>
								<div>
									<img src={product.image.url} alt='product' />
								</div>
								<div className='border-b-2 border-black'>
									<h3 className='font-panther italic text-dark text-xl flex mx-5 my-2'>
										{product.name}
									</h3>
								</div>
							</a>
						</Link>
						<div className='flex justify-between mx-5 my-2'>
							<button
								data-item-id={product.id}
								data-item-price={product.price}
								data-item-url={`/products/${product.slug}`}
								data-item-image={product.image.url}
								data-item-name={product.name}
								className='snipcart-add-item font-panther italic text-dark text-xl flex justify-center underline underline-offset-2'
							>
								ADD TO CART
							</button>
							<h3 className='font-panther italic text-dark text-xl flex justify-center'>
								${product.price}
							</h3>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ProductCard;
