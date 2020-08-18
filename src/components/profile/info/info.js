import React, { useState } from 'react';
import Loading from '../../assets/loading';
import Avatar from '../../assets/avatar/avatar';
import InfoPoints from './info-points';
import Contacts from '../../assets/contacts/contacts';
import './info.scss';
import InfoForm from './info-form';
import EditButton from '../../assets/buttons/edit-button';
const Info = ({
	userProfile,
	ownProfile,
	updateUserPhotos,
	updateUserProfile,
}) => {
	const [editMode, setEditMode] = useState(false);
	if (!userProfile) {
		return <Loading label='Подгружаем информацию о пользователе...' />;
	}
	const onUserPhotoChange = (e) => {
		if (e.target.files.length) {
			updateUserPhotos(e.target.files[0]);
		}
	};
	const submitFormChanges = (formData) => {
		updateUserProfile(formData);
	};
	return (
		<section className='info'>
			<Avatar
				userProfilePhotos={userProfile.photos.large}
				ownProfile={ownProfile}
				onUserPhotoChange={onUserPhotoChange}
			/>
			<div className='info__descr'>
				{editMode ? (
					<InfoForm
						userProfile={userProfile}
						initialValues={userProfile}
						onSubmit={(formData) => submitFormChanges(formData)}
					/>
				) : (
					<>
						<h2>{userProfile.fullName}</h2>
						<InfoPoints infoLabel='Обо мне' infoPoint={userProfile.aboutMe} />
						<InfoPoints
							infoLabel='В поисках работы'
							infoPoint={
								userProfile.lookingForAJob ? 'ищу работу' : 'не ищу работу'
							}
						/>
						{userProfile.lookingForAJob && (
							<InfoPoints
								infoLabel='Описание'
								infoPoint={userProfile.lookingForAJobDescription}
							/>
						)}
						<Contacts userProfileContacts={userProfile.contacts} />
						{ownProfile && <EditButton setEditMode={setEditMode} />}
					</>
				)}
			</div>
		</section>
	);
};

export default Info;
