import React from 'react';
import './sidebar.scss';
import Friend from '../../assets/friend';
const Sidebar = ({friends}) => {
	return (
		<div className='sidebar'>
			{
				friends.map(friend => <Friend key={friend.id} label={friend.label} img={friend.img}/>)
			}
		</div>
	)
};

export default Sidebar;