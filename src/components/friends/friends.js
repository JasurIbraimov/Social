import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import FriendItem from './friend-item';
import './friends.scss';
const Friends = ({ friends }) => {
	return (
		<div className='friends'>
			<h2 className='friends__title'>Друзья</h2>
			{friends.map((friend) => {
				return (
					<FriendItem
						key={friend.userId}
						userName={friend.userName}
						userSurname={friend.userSurname}
						img={friend.img}
					/>
				);
			})}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		friends: state.users.friends,
	};
};
export default compose(withAuthRedirect, connect(mapStateToProps))(Friends);
