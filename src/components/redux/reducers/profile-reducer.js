import {
	ADD_POST,
	SET_USER_PROFILE,
	SET_USER_STATUS,
} from '../action-types/profile-action-types';
const initialState = {
	postData: [],
	userProfile: null,
	userStatus: '',
};
const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
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
		case SET_USER_PROFILE:
			return {
				...state,
				userProfile: action.userProfile,
			};
		case SET_USER_STATUS:
			return {
				...state,
				userStatus: action.userStatus,
			};
		default:
			return state;
	}
};

export default profileReducer;
