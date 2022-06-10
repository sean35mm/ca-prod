import Head from 'next/head';
import Image from 'next/image';
import logo from '../src/assets/CA-Logo.png';
import Meta from '../src/components/ui/Meta';

import Layout from '../src/components/ui/Layout';

import { SiInstagram, SiTiktok } from 'react-icons/si';

const instagram = 'https://www.instagram.com/child_appetite/';
const tiktok = 'https://www.tiktok.com/@child_appetite?lang=en';

export default function Home() {
	return (
		<Layout>
			<div>
				<h1>MAIN</h1>
			</div>
		</Layout>
	);
}
