/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Image from 'next/image';
import logo from '../src/assets/CA-Logo.png';
import Meta from '../src/components/ui/Meta';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

//Components and Assets
import Layout from '../src/components/ui/Layout';
import Hero from '../src/components/Hero/Hero';
import Button from '../src/components/Button/Button';
import ProductCard from '../src/components/ProductCard/ProductCard';
import OurStory from '../src/components/OurStory/OurStory';

//Icons
import { FiArrowUpRight } from 'react-icons/fi';

const instagram = 'https://www.instagram.com/child_appetite/';
const tiktok = 'https://www.tiktok.com/@child_appetite?lang=en';

export default function Home({ products }) {
	return (
		<Layout backgroundColor={'primaryBack'}>
			<Hero />
			<h1 className='text-dark font-pantherBold italic text-5xl ml-14'>
				FEATURED
			</h1>
			<section className='flex justify-center'>
				<ProductCard products={products} />
			</section>
			<div className='flex justify-center m-8'>
				<Button href={'/products'}>
					SHOP{' '}
					<span className='ml-2 self-center'>
						<FiArrowUpRight size={'26px'} color={'#00517D'} />
					</span>
				</Button>
			</div>
			<div className='flex justify-center'>
				<OurStory />
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	const client = new ApolloClient({
		uri: 'https://api-us-west-2.graphcms.com/v2/cl313m0uv14zv01xmdkwkcyn3/master',
		cache: new InMemoryCache(),
	});

	const data = await client.query({
		query: gql`
			query PageHome {
				page(where: { slug: "home" }) {
					heroLink
					heroText
					heroTitle
					slug
					id
					name
					heroBackground
				}
				products(where: { categories_some: { slug: "featured" } }) {
					id
					name
					price
					slug
					image
				}
			}
		`,
	});

	const home = data.data.page;
	const products = data.data.products;

	return {
		props: {
			home,
			products,
		},
	};
}
