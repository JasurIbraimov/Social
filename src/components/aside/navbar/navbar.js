import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navbar.scss';
const Navbar = ({ label, to, icon }) => {
	let match = useRouteMatch({
		path: to,
	});
	return (
		<div className={match ? 'navbar active ' : 'navbar'}>
			<Link to={to}>
				{label}
				<span className='navbar__icon'>
					<FontAwesomeIcon icon={icon} />
				</span>
			</Link>
		</div>
	);
};

export default Navbar;
