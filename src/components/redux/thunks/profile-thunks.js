import UsersService from '../../services/users-api';
import {
	setUserStatus,
	setUserProfile,
	setUserPhotos,
} from '../action-creators/profile-action-creators';
import { setIsLoading } from '../action-creators/app-action-creators';
const service = new UsersService();
export const getProfile = (userId) => async (dispatch) => {
	dispatch(setIsLoading(true));
	const response = await service.getUserProfile(userId);
	dispatch(setUserProfile(response.data));
	dispatch(setIsLoading(false));
};
export const getStatus = (userId) => (dispatch) => {
	service.getUserStatus(userId).then((response) => {
		dispatch(setUserStatus(response.data));
	});
};

export const updateStatus = (status) => async (dispatch) => {
	await service.updateUserStatus(status);
};

export const updateUserPhotos = (photos) => async (dispatch) => {
	const response = await service.saveUserPhotos(photos);
	console.log(response);
	if (response.data.resultCode === 0) {
		dispatch(setUserPhotos(response.data.data.photos));
	}
};

export const updateUserProfile = (profile) => async (dispatch, getState) => {
	const response = await service.saveUserProfile(profile);
	const userId = getState().auth.userId;
	if (response.data.resultCode === 0) {
		dispatch(getProfile(userId));
	}
};
