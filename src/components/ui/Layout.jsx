import React from 'react';

import Navbar from '../Navbar';
import Meta from './Meta';
import Footer from '../Footer';

const Layout = ({ children, backgroundColor }) => {
	return (
		<div className={`${backgroundColor} h-screen`}>
			<Meta />
			<div>
				<header>
					<Navbar backgroundColor={`${backgroundColor}`} />
				</header>
				<main className={`${backgroundColor}`}>{children}</main>
				<footer>
					<Footer backgroundColor={`${backgroundColor}`} />
				</footer>
			</div>
		</div>
	);
};

export default Layout;
