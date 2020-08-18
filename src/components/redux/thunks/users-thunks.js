import UsersService from '../../services/users-api';
import {
	setUsers,
	setTotalCount,
	setCurrentPage,
	setFollowingInProcess,
	unfollowUser,
	followUser,
} from '../action-creators/users-action-creators';
import { setIsLoading } from '../action-creators/app-action-creators';
const service = new UsersService();
export const getUsers = (currentPage, pageSize) => async (dispatch) => {
	dispatch(setIsLoading(true));
	const data = await service.getUsers(currentPage, pageSize);
	dispatch(setUsers(data.items));
	dispatch(setIsLoading(false));
	dispatch(setTotalCount(data.totalCount));
	dispatch(setCurrentPage(currentPage));
};

export const follow = (userId) => (dispatch) => {
	dispatch(setFollowingInProcess(true, userId));
	service.followUser(userId).then((response) => {
		if (response.data.resultCode === 0) {
			dispatch(followUser(userId));
		}
		dispatch(setFollowingInProcess(false, userId));
	});
};
export const unfollow = (userId) => (dispatch) => {
	dispatch(setFollowingInProcess(true, userId));
	service.unfollowUser(userId).then((response) => {
		if (response.data.resultCode === 0) {
			dispatch(unfollowUser(userId));
		}
		dispatch(setFollowingInProcess(false, userId));
	});
};
