import React from 'react';
import Friend from '../../assets/friend';
import IconButton from '../../assets/buttons/icon-button';
import { faUserEdit, faStar, faUserTimes, faUserLock} from '@fortawesome/free-solid-svg-icons';
import './friend-item.scss';
const FriendItem = ({userName, userSurname, img}) => {
	return (
		<div className='friend-item'>
			<Friend img={img}/>
			<div className='friend-item__name'>
				{userName} {userSurname}
			</div>
			<div className='friend-item__fit'>
				<IconButton cl='edit' color='#3498db'  icon={faUserEdit}/>
				<IconButton cl='star' color='#f1c40f' icon={faStar}/>
				<IconButton cl='lock' color='#34495e' icon={faUserLock}/>
				<IconButton cl='times' color='#e74c3c' icon={faUserTimes}/>	
			</div>
		</div>
	);
};

export default FriendItem;