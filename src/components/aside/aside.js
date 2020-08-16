import React from 'react';
import Navbar from './navbar';
import SidebarContainer from './sidebar/sidebar-container';
import {
	faUserCircle,
	faEnvelope,
	faNewspaper,
	faUserFriends,
	faMusic,
	faUsers,
	faCogs,
} from '@fortawesome/free-solid-svg-icons';
import './aside.scss';

const Aside = ({ isAuth }) => {
	return (
		<aside className='aside'>
			<nav>
				{isAuth && (
					<>
						<Navbar icon={faUserCircle} to='/profile' label='Профиль' />
						<Navbar icon={faEnvelope} to='/dialogs' label='Сообщения' />
						<Navbar icon={faNewspaper} to='/news' label='Новости' />
						<Navbar icon={faUserFriends} to='/friends' label='Друзья' />
						<Navbar icon={faMusic} to='/music' label='Музыка' />
						<Navbar icon={faUsers} to='/users' label='Пользователи' />
						<Navbar icon={faCogs} to='/settings' label='Настройки' />
						<SidebarContainer />
					</>
				)}
				{!isAuth && (
					<>
						<Navbar icon={faUserCircle} to='/login' label='Войти' />
						<Navbar icon={faNewspaper} to='/news' label='Новости' />
						<Navbar icon={faUsers} to='/users' label='Пользователи' />
						<Navbar icon={faMusic} to='/music' label='Музыка' />
						<Navbar icon={faCogs} to='/settings' label='Настройки' />
					</>
				)}
			</nav>
		</aside>
	);
};

export default Aside;
