import React from 'react';
import Friend from '../../assets/friend';
import user from '../../assets/friend/user.png';
import './user.scss';
import { Link } from 'react-router-dom';
import UsersService from '../../services/users-api';
const User = ({userId, userFollow, userName, status, img, followUser, unfollowUser}) => {
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
						style={{backgroundColor: '#2ecc71'}}
						onClick={() => service.unfollowUsers(userId)
						.then (response => {
							console.log(response.data);
							if(response.data.resultCode === 0) {
								unfollowUser(userId)
							}
						})
						}  
						className='user__btn'>отписаться
					</button> 
					: <button 
						style={{backgroundColor: '#3498db'}}
						onClick={() => service.followUsers(userId)
							.then (response => {
								console.log(response.data)
								if(response.data.resultCode === 0) {
									followUser(userId)
								}
							})
							}    
						className='user__btn'>подписаться
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