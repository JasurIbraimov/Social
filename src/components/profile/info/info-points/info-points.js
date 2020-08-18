import React from 'react';
import './info-points.scss';
const InfoPoints = ({ infoLabel, infoPoint }) => {
	return (
		<li className='info-points'>
			<span>
				<strong>{infoLabel}:</strong>
			</span>
			<span> {infoPoint}</span>
		</li>
	);
};

export default InfoPoints;
