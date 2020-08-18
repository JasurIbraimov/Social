import React, { useState, useEffect } from 'react';
import './profile-status.scss';
import EditButton from '../../assets/buttons/edit-button';
const ProfileStatus = ({ updateStatus, userStatus, ownProfile }) => {
	const [editMode, setEditMode] = useState(false);
	const [status, setStatus] = useState(userStatus);
	useEffect(() => {
		setStatus(userStatus);
	}, [userStatus]);
	const onStatusChange = (e) => {
		setStatus(e.target.value);
	};
	const disactivateEditMode = (e) => {
		e.preventDefault();
		updateStatus(status);
		setEditMode(false);
	};
	return (
		<li className='profile-status'>
			<div className='profile-status__descr'>
				<strong>Статус </strong>
			</div>
			{editMode ? (
				<form onSubmit={(e) => disactivateEditMode(e)}>
					<input
						className='profile-status__input'
						autoFocus
						value={status}
						onChange={(e) => onStatusChange(e)}
						onBlur={(e) => disactivateEditMode(e)}
					/>
					<button className='profile-status__btn'>
						<span>&#9998;</span>
					</button>
				</form>
			) : (
				<div className='profile-status__main'>
					{status ? status : 'нет статуса'}
				</div>
			)}
			{ownProfile && <EditButton setEditMode={setEditMode} />}
		</li>
	);
};

export default ProfileStatus;
