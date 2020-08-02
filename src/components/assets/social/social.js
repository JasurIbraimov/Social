import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './social.scss';

const Social = ({label, icon, color}) => {
	return (
		<a href={`https://www.${label}`} target='_blank' rel="noopener noreferrer"  className='social'>
			<div className='social__icon'>
				<p style={{border: `1px solid ${color}`, color:`${color}`}}>
					<FontAwesomeIcon icon={icon}/>
				</p>
			</div>
			<span className='social__link'>{label}</span>
		</a>
	);
};

export default Social;