import React from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Layout from '../../src/components/ui/Layout';
import ProductCard from '../../src/components/ProductCard/ProductCard';

const Products = ({ products }) => {
	return (
		<Layout backgroundColor={'greenBack'}>
			<div className='my-4'>
				<h1 className='text-yellow font-pantherBold italic text-5xl ml-14'>
					PRODUCTS
				</h1>
			</div>
			<div>
				<ProductCard products={products} />
			</div>
		</Layout>
	);
};

export default Products;

export async function getStaticProps() {
	const client = new ApolloClient({
		uri: 'https://api-us-west-2.graphcms.com/v2/cl313m0uv14zv01xmdkwkcyn3/master',
		cache: new InMemoryCache(),
	});

	const data = await client.query({
		query: gql`
			query ProductsPage {
				products {
					id
					image
					name
					price
					slug
				}
			}
		`,
	});

	const products = data.data.products;

	return {
		props: {
			products,
		},
	};
}
