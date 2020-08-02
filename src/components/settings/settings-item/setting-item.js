import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './settings-item.scss';
const SettingsItem = ({icon, label, btnRightText, btnLeftText, rightStyle, leftStyle, handleActionLeft, handleActionRight}) => {
	return (
		<li className='settings-item'>
			<div className='settings-item__icon'>
				<FontAwesomeIcon icon={icon}/>
			</div>
			<div className='settings-item__descr'>{label}</div>
			<button 
				onClick={handleActionLeft}
				style={leftStyle}
				className='settings-item__btn settings-item__btn_left'>{btnLeftText}</button>
			<button 
				onClick={handleActionRight}
				style={rightStyle}
				className='settings-item__btn settings-item__btn_right'>{btnRightText}</button>
		</li>
	);
};

export default SettingsItem;