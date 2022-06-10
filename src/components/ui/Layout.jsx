import React from 'react';

import Navbar from '../Navbar';
import Meta from './Meta';
import Footer from '../Footer';

const Layout = ({ children }) => {
	return (
		<>
			<Meta />
			<header>
				<Navbar />
			</header>
			<main>{children}</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
};

export default Layout;
