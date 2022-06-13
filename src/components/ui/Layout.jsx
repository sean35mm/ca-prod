import React from 'react';

import Navbar from '../Navbar';
import Meta from './Meta';
import Footer from '../Footer';

const Layout = ({ children }) => {
	return (
		<>
			<Meta />
			<div>
				<header>
					<Navbar />
				</header>
				<main className='h-screen bg-primary'>{children}</main>
				<footer>
					<Footer />
				</footer>
			</div>
		</>
	);
};

export default Layout;
