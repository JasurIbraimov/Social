import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './welcome-page.scss';
const WelcomePage = () => {
	const [state, toggle] = useState(true);
	const { x } = useSpring({
		from: { x: 0 },
		x: state ? 1 : 0,
		config: { duration: 1000 },
	});
	return (
		<div onClick={() => toggle(!state)} className='welcome'>
			<animated.div
				style={{
					opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
					transform: x
						.interpolate({
							range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
							output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
						})
						.interpolate((x) => `scale(${x})`),
				}}
			>
				Welcome
			</animated.div>
			<img
				className='welcome__img'
				src='https://cdn.pixabay.com/photo/2016/11/23/17/22/illuminated-1853924_960_720.jpg'
				alt='welcome'
			/>
		</div>
	);
};

export default WelcomePage;
