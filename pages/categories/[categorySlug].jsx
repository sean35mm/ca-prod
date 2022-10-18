import React from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { Cloudinary } from '@cloudinary/url-gen';

const cld = new Cloudinary({
	cloud: {
		cloudName: 'ca-store',
	},
	url: {
		secure: true, // force https, set to false to force http
	},
});

const Category = ({ category, products }) => {
	const url = cld.image(products[0].image.public_id).toURL();

	return (
		<div>
			<h1>Category Name</h1>

			<h2>Products</h2>

			<ul>
				<li>
					<a href='#'>
						<div>Image</div>
						<h3>Product Name</h3>
						<p>Product Price</p>
					</a>
					<p>
						<button>Add to Cart</button>
					</p>
				</li>
			</ul>
		</div>
	);
};

export default Category;

export async function getStaticProps({ params }) {
	const client = new ApolloClient({
		uri: 'https://api-us-west-2.graphcms.com/v2/cl313m0uv14zv01xmdkwkcyn3/master',
		cache: new InMemoryCache(),
	});

	const data = await client.query({
		query: gql`
			query PageCategory($slug: String = "") {
				category(where: { slug: "$slug" }) {
					id
					name
					slug
					products {
						id
						image
						name
						price
						slug
					}
				}
			}
		`,
		variables: {
			slug: params.categorySlug,
		},
	});

	const category = data.data.category;

	return {
		props: {
			category,
			products: category.products,
		},
	};
	0;
}

export async function getStaticPaths() {
	const client = new ApolloClient({
		uri: 'https://api-us-west-2.graphcms.com/v2/cl313m0uv14zv01xmdkwkcyn3/master',
		cache: new InMemoryCache(),
	});

	const data = await client.query({
		query: gql`
			query PageCategories {
				categories {
					id
					slug
				}
			}
		`,
	});

	const paths = data.data.categories.map((category) => {
		return {
			params: {
				categorySlug: category.slug,
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
}
