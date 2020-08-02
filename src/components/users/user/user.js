import React from 'react';
import Friend from '../../assets/friend';
import user from '../../assets/friend/user.png';
import './user.scss';
import { Link } from 'react-router-dom';
import UsersService from '../../services/users-api';
const User = ({userId, userFollow, userName, status, img, followUser, unfollowUser, followingInProcess, setFollowingInProcess}) => {
	const service = new UsersService();
	return (
		<div className='user'>
			<div className='user__avatar'>
				<Link to={`profile/${userId}`}>
					<Friend 
						img={img ? img : user}/>
				</Link>
				{
					userFollow ? <button 
					disabled={followingInProcess.some(id => id === userId)}
						onClick={() => {
							setFollowingInProcess(true, userId);
							service.unfollowUsers(userId)
							.then (response => {
								console.log(response.data);
								if(response.data.resultCode === 0) {
									unfollowUser(userId)
								}
								setFollowingInProcess(false, userId);
							})
							}  
						}
						className='user__btn user__btn_sub'>отписаться
					</button> 
					: <button 
						disabled={followingInProcess.some(id => id === userId)}
						onClick={() => {
							setFollowingInProcess(true, userId);
							service.followUsers(userId)
							.then (response => {
								console.log(response.data)
								if(response.data.resultCode === 0) {
									followUser(userId)
									setFollowingInProcess(false, userId);
								}
								})
							}    
						}
						className='user__btn user__btn_unsub'>подписаться
					</button>
				}
			</div>
			<div className='user__box'>
				<div className='user__info'>
					<h2 className='user__name'>{userName}</h2>
					<span className='user__status'>{status}</span>
				</div>
			</div>
		</div>
	);
};

export default User;