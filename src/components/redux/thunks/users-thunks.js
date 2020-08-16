import UsersService from '../../services/users-api';
import {
	setUsers,
	setIsLoading,
	setTotalCount,
	setCurrentPage,
	setFollowingInProcess,
	unfollowUser,
	followUser,
} from '../action-creators/users-action-creators';
const service = new UsersService();
export const getUsers = (currentPage, pageSize) => async (dispatch) => {
	dispatch(setIsLoading(true));
	const data = await service.getUsers(currentPage, pageSize);
	dispatch(setUsers(data.items));
	dispatch(setIsLoading(false));
	dispatch(setTotalCount(data.totalCount));
	dispatch(setCurrentPage(currentPage));
};
const thunk = (dispatch, userId, func) => {
	if (func === followUser) {
		service.followUser(userId).then((response) => {
			if (response.data.resultCode === 0) {
				dispatch(followUser(userId));
			}
			dispatch(setFollowingInProcess(false, userId));
		});
	} else if (func === unfollowUser) {
		service.unfollowUser(userId).then((response) => {
			if (response.data.resultCode === 0) {
				dispatch(unfollowUser(userId));
			}
			dispatch(setFollowingInProcess(false, userId));
		});
	}
};

export const follow = (userId) => (dispatch) => {
	thunk(dispatch, userId, followUser);
};
export const unfollow = (userId) => (dispatch) => {
	thunk(dispatch, userId, unfollowUser);
};
