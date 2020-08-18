import React from 'react';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './avatar.scss';
import user from '../friend/user.png';
const Avatar = ({ ownProfile, onUserPhotoChange, userProfilePhotos }) => {
	return (
		<div className='avatar'>
			{ownProfile && (
				<div className='avatar__settings'>
					<label htmlFor='photo' className='avatar__label'>
						<FontAwesomeIcon icon={faDownload} />{' '}
					</label>
					<input
						id='photo'
						className='avatar__input'
						type='file'
						onChange={(e) => onUserPhotoChange(e)}
					/>
				</div>
			)}
			<img alt='avatar' src={userProfilePhotos || user} />
		</div>
	);
};

export default Avatar;
