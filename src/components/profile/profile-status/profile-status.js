import React, { useState, useEffect } from 'react';
import './profile-status.scss';
const ProfileStatus = ({ updateStatus, userStatus }) => {
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
		<span className='profile-status'>
			<span>
				<strong>Статус:</strong>
			</span>
			{editMode ? (
				<form onSubmit={(e) => disactivateEditMode(e)}>
					<input
						className='profile-status__input'
						autoFocus
						value={status}
						onChange={(e) => onStatusChange(e)}
						onBlur={() => setEditMode(false)}
					/>
					<button className='profile-status__btn'>^</button>
				</form>
			) : (
				<span onDoubleClick={() => setEditMode(true)}>
					{status ? status : 'нет статуса'}
				</span>
			)}
		</span>
	);
};

export default ProfileStatus;
