import Head from 'next/head';
import Image from 'next/image';
import logo from '../src/assets/CA-Logo.png';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='flex bg-primary px-4 w-full h-screen items-center justify-center'>
			<div>
				<h1 className='mt-10 text-accent font-panther text-2xl'>
					Website Coming Soon!
				</h1>
				<ul>
					<Link href='#'>
						<li>Instagram</li>
					</Link>
					<Link href='#'>
						<li>TikTok</li>
					</Link>
				</ul>
				<Image src={logo} alt='logo' layout='intrinsic' />
			</div>
		</div>
	);
}
