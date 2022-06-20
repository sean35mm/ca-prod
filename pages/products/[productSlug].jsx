/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const Product = ({ product }) => {
	return (
		<div>
			<div>
				<div>
					<img src={product.image.url} alt='' />
				</div>
				<div>
					<h1>{product.name}</h1>
					<div
						dangerouslySetInnerHTML={{
							__html: product.description?.html,
						}}
					/>
					<p>${product.price}</p>
					<p>
						<button
							className='snipcart-add-item'
							data-item-id={product.id}
							data-item-price={product.price}
							data-item-url={`/products/${product.slug}`}
							data-item-image={product.image.url}
							data-item-name={product.name}
						>
							Add to Cart
						</button>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Product;

export async function getStaticProps({ params }) {
	const client = new ApolloClient({
		uri: 'https://api-us-west-2.graphcms.com/v2/cl313m0uv14zv01xmdkwkcyn3/master',
		cache: new InMemoryCache(),
	});

	const data = await client.query({
		query: gql`
			query PageProduct($slug: String) {
				product(where: { slug: $slug }) {
					id
					image
					name
					price
					description {
						html
					}
					slug
				}
			}
		`,
		variables: {
			slug: params.productSlug,
		},
	});

	const product = data.data.product;

	return {
		props: {
			product,
		},
	};
}

export async function getStaticPaths() {
	const client = new ApolloClient({
		uri: 'https://api-us-west-2.graphcms.com/v2/cl313m0uv14zv01xmdkwkcyn3/master',
		cache: new InMemoryCache(),
	});

	const data = await client.query({
		query: gql`
			query PageProducts {
				products {
					name
					price
					slug
					image
				}
			}
		`,
	});

	const paths = data.data.products.map((product) => {
		return {
			params: {
				productSlug: product.slug,
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
}
