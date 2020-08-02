import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug} from '@fortawesome/free-solid-svg-icons'
import './error.scss';
const Error = () => {
	return (
		<div className='error'>
			<div className='error__icon'><FontAwesomeIcon icon={faBug}/></div>
			<h2  className='error__descr'>Что-то пошло не так...</h2>
		</div>
	);
};

export default Error;