import {
	ADD_POST,
	SET_USER_PROFILE,
	SET_USER_STATUS,
} from '../action-types/profile-action-types';
export const addPost = (postText) => ({ type: ADD_POST, postText });
export const setUserProfile = (userProfile) => ({
	type: SET_USER_PROFILE,
	userProfile,
});
export const setUserStatus = (userStatus) => ({
	type: SET_USER_STATUS,
	userStatus,
});
