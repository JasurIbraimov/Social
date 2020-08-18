import {
	USERS_FOLLOW_USER,
	USERS_UNFOLLOW_USER,
	USERS_SET_USERS,
	USERS_SET_TOTAL_COUNT,
	USERS_SET_CURRENT_PAGE,
	USERS_SET_FOLLOWING_IN_PROCESS,
} from '../action-types/users-action-types';
export const followUser = (userId) => ({ type: USERS_FOLLOW_USER, userId });
export const unfollowUser = (userId) => ({ type: USERS_UNFOLLOW_USER, userId });
export const setUsers = (users) => ({ type: USERS_SET_USERS, users });
export const setTotalCount = (totalCount) => ({
	type: USERS_SET_TOTAL_COUNT,
	totalCount,
});
export const setCurrentPage = (currentPage) => ({
	type: USERS_SET_CURRENT_PAGE,
	currentPage,
});

export const setFollowingInProcess = (followingProcess, userId) => ({
	type: USERS_SET_FOLLOWING_IN_PROCESS,
	followingProcess,
	userId,
});
