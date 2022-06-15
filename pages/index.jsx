/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Image from 'next/image';
import logo from '../src/assets/CA-Logo.png';
import Meta from '../src/components/ui/Meta';

//Components and Assets
import Layout from '../src/components/ui/Layout';
import Hero from '../src/components/Hero/Hero';
import Button from '../src/components/Button/Button';
import ProductCard from '../src/components/ProductCard/ProductCard';

//Icons
import { SiInstagram, SiTiktok } from 'react-icons/si';
import { FiArrowUpRight } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';

const instagram = 'https://www.instagram.com/child_appetite/';
const tiktok = 'https://www.tiktok.com/@child_appetite?lang=en';

export default function Home() {
	return (
		<Layout>
			<Hero />
			<h1 className='text-dark font-pantherBold italic text-5xl ml-14'>
				FEATURED
			</h1>
			<section className='overflow-hidden flex flex-row flex-wrap justify-center'>
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</section>
			<div className='flex justify-center m-8'>
				<Button>
					SHOP{' '}
					<span className='ml-2 self-center'>
						<FiArrowUpRight size={'26px'} color={'#00517D'} />
					</span>
				</Button>
			</div>
		</Layout>
	);
}
