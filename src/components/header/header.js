import React from 'react';
import {Link} from 'react-router-dom';
import {faSync} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.scss';
const Header = ({email, id, login, isLoading, isAuth}) => {
	const auth = isAuth 
		? 	<Link to='/profile'>
			<div className='header__user-info'>
				<div className='header__user-name'>{login}</div>
				<div className='header__user-email'>{email}</div>
			</div>
		</Link>
		: <Link to='login'>
		<span className='header__login'>login </span>
		</Link>;
	return (
		<header className='header'>
			<Link to='/'>
				<img className='header__logo' alt='logo' src='https://image.flaticon.com/icons/svg/3214/3214850.svg'/>
				<span className='header__logo-descr'>Ча-ча-чат </span>
			</Link>
			<div className='header__user'>
				{isLoading ? <FontAwesomeIcon spin icon={faSync}/> : auth}
			</div>
		</header>
	)
}

export default Header;
