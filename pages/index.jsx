import Head from 'next/head';
import Image from 'next/image';
import logo from '../src/assets/CA-Logo.png';

import { SiInstagram, SiTiktok } from 'react-icons/si';

const instagram = 'https://www.instagram.com/child_appetite/';
const tiktok = 'https://www.tiktok.com/@child_appetite?lang=en';

export default function Home() {
	return (
		<div className='flex bg-primary px-4 w-full h-screen items-center justify-center'>
			<div>
				<Image
					src={logo}
					alt='logo'
					width='400px'
					height='200px'
					layout='responsive'
				/>
				<h1 className='mt-10 text-accent font-panther text-3xl text-center tracking-widest'>
					Website
				</h1>
				<h1 className='text-accent font-panther text-3xl text-center tracking-widest'>
					Coming Soon!
				</h1>
				<ul className='flex text-center mt-4 mb-24 justify-center'>
					<a href={instagram} target='_blank' rel='noopener noreferrer'>
						<li className='icon'>
							<SiInstagram color='#FFF5D2' size={'40px'} />
						</li>
					</a>
					<a href={tiktok} target='_blank' rel='noopener noreferrer'>
						<li className='icon'>
							<SiTiktok color='#FFF5D2' size={'40px'} />
						</li>
					</a>
				</ul>
			</div>
		</div>
	);
}
