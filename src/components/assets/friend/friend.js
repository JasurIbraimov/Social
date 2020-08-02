import React from 'react';
import './friend.scss';
const Friend = ({img, label}) => {
	return (
		<div className='friend'>
			<div className='friend__img'>
				<img src={img} alt='friend'/>
			</div>
			{label && <span className='friend__name'>{label}</span>}
		</div>
	)
}
export default Friend;