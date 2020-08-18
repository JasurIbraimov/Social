import {
	PROFILE_ADD_POST,
	PROFILE_SET_USER_PROFILE,
	PROFILE_SET_USER_STATUS,
	PROFILE_SET_USER_PHOTOS,
} from '../action-types/profile-action-types';
export const addPost = (postText) => ({ type: PROFILE_ADD_POST, postText });
export const setUserProfile = (userProfile) => ({
	type: PROFILE_SET_USER_PROFILE,
	userProfile,
});
export const setUserStatus = (userStatus) => ({
	type: PROFILE_SET_USER_STATUS,
	userStatus,
});

export const setUserPhotos = (photos) => ({
	type: PROFILE_SET_USER_PHOTOS,
	photos,
});
