import React from 'react';
import './send-button.scss';
const SendButton = ({label}) => {
	return (
		<button className='send-button'><span>{label}</span></button>
	);
};

export default SendButton;