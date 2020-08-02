import React from 'react';
import User from './user';
import './users.scss';
import Loading from '../assets/loading';
const Users = ({usersData, followUser, unfollowUser, totalCount, pageSize, currentPage, setPage, isLoading, followingInProcess, setFollowingInProcess}) => {
	const page = [];
	const value = Math.ceil(totalCount/pageSize);
	for (let i = 1125; i <= value; i++) {
			page.push(i);
	}
	return (
		<div className='users'>
			<h2  className='users__title'>Пользователи</h2>
			{
				page.map(p => {
					return <button 
					onClick={() => setPage(p)}
					key={p} 
					data-label={`${p}`} 
					className={currentPage === p ? `users__btn active` : 'users__btn'}>{p}</button>
				})
			}
			{
				isLoading 
				? <Loading label='Загружаем список пользователей...'/> 
				: usersData.map(user => {
					return (
							<User 
								followingInProcess={followingInProcess}
								setFollowingInProcess={setFollowingInProcess}
								userFollow={user.followed}
								userId={user.id}
								key={user.id}
								img={user.photos.small}
								followUser={followUser}
								unfollowUser={unfollowUser}
								status={user.status}
								userName={user.name}	
							/>
						)
					
				})
			}
		</div>
			
	);
};

export default Users;
