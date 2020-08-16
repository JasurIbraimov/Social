import React from 'react';
import InfoContainer from './info';
import Wallpaper from './wallpaper';
import './profile.scss';
import Posts from './posts';

const Profile = () => {
	return (
		<main className='profile'>
			<Wallpaper />
			<InfoContainer />
			<Posts />
		</main>
	);
};

export default Profile;
