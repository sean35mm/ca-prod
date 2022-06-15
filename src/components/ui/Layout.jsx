import React from 'react';

import Navbar from '../Navbar';
import Meta from './Meta';
import Footer from '../Footer';

const Layout = ({ children }) => {
	return (
		<div className='bg-primary'>
			<Meta />
			<div>
				<header>
					<Navbar />
				</header>
				<main>{children}</main>
				<footer>
					<Footer />
				</footer>
			</div>
		</div>
	);
};

export default Layout;
