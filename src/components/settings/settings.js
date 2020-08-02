import React from 'react';
import SettingsItem from './settings-item';
import { faLightbulb, faLanguage } from '@fortawesome/free-solid-svg-icons'
import './settings.scss'
const Settings = () => {
	const changeLightToDark = () => {
		console.log('dark');
	}
	const changeLightToBright = () => {
		console.log('bright');
	}
	const changeLangToRus = () => {
		console.log('rus');
	}
	const changeLangToEng = () => {
		console.log('eng');
	}
	return (
		<div className='settings'>
			<h2 className='settings__title'>Настройки</h2>
			<ul className='settings__content'>
				<SettingsItem 
					handleActionLeft={changeLightToDark}
					handleActionRight={changeLightToBright}
					icon={faLightbulb} 
					label='Освещение' 
					btnRightText='Светлый' 
					btnLeftText='Темный' 
					rightStyle={{backgroundColor: '#f1c40f'}}
					leftStyle={{backgroundColor: '#34495e'}}
					/>
				<SettingsItem 
					handleActionLeft={changeLangToEng}
					handleActionRight={changeLangToRus}
					icon={faLanguage} 
					label='Язык' 
					btnRightText='рус' 
					btnLeftText='eng'
					rightStyle={{backgroundColor: '#e84118'}}
					leftStyle={{backgroundColor: '#0652DD'}} 
					/>
			</ul>
		</div>
	);
};

export default Settings;