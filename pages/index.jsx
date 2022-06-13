import Head from 'next/head';
import Image from 'next/image';
import logo from '../src/assets/CA-Logo.png';
import Meta from '../src/components/ui/Meta';

//Components
import Layout from '../src/components/ui/Layout';
import Hero from '../src/components/Hero/Hero';
import Button from '../src/components/Button/Button';

//Icons
import { SiInstagram, SiTiktok } from 'react-icons/si';

const instagram = 'https://www.instagram.com/child_appetite/';
const tiktok = 'https://www.tiktok.com/@child_appetite?lang=en';

export default function Home() {
	return (
		<Layout>
			<div className='bg-primary'>
				<Hero />
				<h1 className='text-dark font-pantherBold italic text-3xl ml-14'>
					FEATURED
				</h1>
				<div>PRODUCT CARDS</div>
				<div>
					<Button buttonColor={'green'}>SHOP</Button>
				</div>
			</div>
		</Layout>
	);
}
