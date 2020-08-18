import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import './edit-button.scss';
const EditButton = ({ setEditMode }) => {
	return (
		<button onClick={() => setEditMode(true)} className='edit-button'>
			<FontAwesomeIcon icon={faEdit} />
		</button>
	);
};

export default EditButton;
