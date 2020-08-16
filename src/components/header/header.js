import React from 'react';
import { Link } from 'react-router-dom';
import {
	faSync,
	faDoorOpen,
	faDoorClosed,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.scss';
const Header = ({ email, login, isLoading, isAuth, logout }) => {
	const auth = isAuth ? (
		<div className='header__links'>
			<Link to='/profile'>
				<div className='header__user-info'>
					<div className='header__user-name'>{login}</div>
					<div className='header__user-email'>{email}</div>
				</div>
			</Link>
			<Link to='/login'>
				<div onClick={logout} className='header__exit'>
					<span>Выйти </span>
					<span className='header__exit-icon'>
						<FontAwesomeIcon icon={faDoorOpen} />
					</span>
				</div>
			</Link>
		</div>
	) : (
		<Link to='/login'>
			<div className='header__login'>
				<span>Войти</span>
				<span className='header__login-icon'>
					<FontAwesomeIcon icon={faDoorClosed} />
				</span>
			</div>
		</Link>
	);
	return (
		<header className='header'>
			<Link to='/'>
				<img
					className='header__logo'
					alt='logo'
					src='https://image.flaticon.com/icons/svg/3214/3214850.svg'
				/>
				<span className='header__logo-descr'>Ча-ча-чат </span>
			</Link>
			<div className='header__user'>
				{isLoading ? (
					<span className='header__spin'>
						<FontAwesomeIcon spin icon={faSync} />
					</span>
				) : (
					auth
				)}
			</div>
		</header>
	);
};

export default Header;
