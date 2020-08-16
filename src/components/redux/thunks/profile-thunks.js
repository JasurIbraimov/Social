import UsersService from '../../services/users-api';
import {
	setUserStatus,
	setUserProfile,
} from '../action-creators/profile-action-creators';
const service = new UsersService();
export const getProfile = (userId) => async (dispatch) => {
	const response = await service.getUserProfile(userId);
	dispatch(setUserProfile(response.data));
};
export const getStatus = (userId) => (dispatch) => {
	service.getUserStatus(userId).then((response) => {
		dispatch(setUserStatus(response.data));
	});
};

export const updateStatus = (status) => (dispatch) => {
	service.updateUserStatus(status).then((response) => {
		if (response.resultCode === 0) {
			dispatch(setUserStatus(response.data));
		}
	});
};
