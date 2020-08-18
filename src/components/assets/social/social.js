import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './social.scss';

const Social = ({ label, icon, color }) => {
	return (
		<a
			href={label}
			target='_blank'
			rel='noopener noreferrer'
			className='social'
		>
			<div
				style={{
					boxShadow: `1px 1px 5px ${color}`,
				}}
				className='social__icon'
			>
				<p style={{ color: `${color}` }}>
					<FontAwesomeIcon icon={icon} />
				</p>
			</div>
			<span className='social__link'>{label}</span>
		</a>
	);
};

export default Social;
