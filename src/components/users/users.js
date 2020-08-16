import React from 'react';
import User from './user';
import './users.scss';
import Loading from '../assets/loading';
import Paginator from '../assets/paginator';
const Users = ({
	usersData,
	totalCount,
	pageSize,
	currentPage,
	setPage,
	isLoading,
	followingInProcess,
	follow,
	unfollow,
}) => {
	return (
		<div className='users'>
			<h2 className='users__title'>Пользователи</h2>
			<Paginator
				totalCount={totalCount}
				pageSize={pageSize}
				currentPage={currentPage}
				setPage={setPage}
			/>
			{isLoading ? (
				<Loading label='Загружаем список пользователей...' />
			) : (
				usersData.map((user) => {
					return (
						<User
							followingInProcess={followingInProcess}
							userFollow={user.followed}
							userId={user.id}
							key={user.id}
							img={user.photos.small}
							follow={follow}
							unfollow={unfollow}
							status={user.status}
							userName={user.name}
						/>
					);
				})
			)}
		</div>
	);
};

export default Users;
