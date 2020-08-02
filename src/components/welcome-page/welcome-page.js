import React from 'react';
import './welcome-page.scss';
const WelcomePage = () => {
	return (
		<div className='welcome'>
			<h2 className='welcome__title' ><span>we</span> <span>are</span></h2>
			<img className='welcome__img' src='https://cdn.pixabay.com/photo/2016/11/23/17/22/illuminated-1853924_960_720.jpg' alt='welcome'/>
		</div>
	)
};

export default WelcomePage;