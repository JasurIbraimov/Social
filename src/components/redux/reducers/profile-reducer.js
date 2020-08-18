import {
	PROFILE_ADD_POST,
	PROFILE_SET_USER_PROFILE,
	PROFILE_SET_USER_STATUS,
	PROFILE_SET_USER_PHOTOS,
} from '../action-types/profile-action-types';
const initialState = {
	postData: [],
	userProfile: null,
	userStatus: '',
};
const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case PROFILE_ADD_POST:
			const newPost = {
				id: 6,
				text: action.postText,
				likeCount: 0,
				dislikeCount: 0,
			};
			return {
				...state,
				postData: [...state.postData, newPost],
			};
		case PROFILE_SET_USER_PROFILE:
			return {
				...state,
				userProfile: action.userProfile,
			};
		case PROFILE_SET_USER_STATUS:
			return {
				...state,
				userStatus: action.userStatus,
			};
		case PROFILE_SET_USER_PHOTOS:
			return {
				...state,
				userProfile: {
					...state.userProfile,
					photos: action.photos,
				},
			};
		default:
			return state;
	}
};

export default profileReducer;
