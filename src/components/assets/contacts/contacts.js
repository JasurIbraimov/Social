import React from 'react';
import {
	faFacebook,
	faGithub,
	faVk,
	faTwitter,
	faInstagram,
	faYoutube,
	faChrome,
} from '@fortawesome/free-brands-svg-icons';
import Social from '../social';
import './contacts.scss';

const Contacts = ({ userProfileContacts }) => {
	return (
		<li className='contacts'>
			<span>
				<strong>Контакты:</strong>
			</span>
			<div className='contacts__list'>
				{userProfileContacts.facebook && (
					<Social
						color='#2980b9'
						label={userProfileContacts.facebook}
						icon={faFacebook}
					/>
				)}
				{userProfileContacts.github && (
					<Social
						color='#34495e'
						label={userProfileContacts.github}
						icon={faGithub}
					/>
				)}
				{userProfileContacts.vk && (
					<Social color='#3498db' label={userProfileContacts.vk} icon={faVk} />
				)}
				{userProfileContacts.twitter && (
					<Social
						color='#3498db'
						label={userProfileContacts.twitter}
						icon={faTwitter}
					/>
				)}
				{userProfileContacts.youtube && (
					<Social
						color='#e74c3c'
						label={userProfileContacts.youtube}
						icon={faYoutube}
					/>
				)}
				{userProfileContacts.instagram && (
					<Social
						color='#9c88ff'
						label={userProfileContacts.instagram}
						icon={faInstagram}
					/>
				)}
				{userProfileContacts.website && (
					<Social
						color='#2ecc71'
						label={userProfileContacts.website}
						icon={faChrome}
					/>
				)}
			</div>
		</li>
	);
};

export default Contacts;
