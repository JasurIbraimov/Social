import React from 'react';
import InfoContainer from './info';
import Wallpaper from './wallpaper';
import './profile.scss';
import PostsContainer from './posts/posts-container';

const Profile = () => {
	return (
		<main className='profile'>
			<Wallpaper/>
			<InfoContainer/>
			<PostsContainer/>
		</main>
	)
}

export default Profile;