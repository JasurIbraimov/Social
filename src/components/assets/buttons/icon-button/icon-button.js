import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './icon-button.scss';
const IconButton = ({icon, color, cl}) => {

	return (
		<button 
			style={{backgroundColor: `${color}`}}
			className={`icon-button icon-button_${cl}`}>
			<FontAwesomeIcon icon={icon}/>
		</button>
	);
};

export default IconButton;