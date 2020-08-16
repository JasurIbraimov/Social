import React from 'react';
import './send-button.scss';
const SendButton = ({ label, type, disabled }) => {
	return (
		<button disabled={disabled} type={type} className='send-button'>
			<span>{label}</span>
		</button>
	);
};

export default SendButton;
