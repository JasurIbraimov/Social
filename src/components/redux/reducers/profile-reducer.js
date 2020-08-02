import {UPDATE_POST_TEXT, ADD_POST, SET_USER_PROFILE} from '../action-types/profile-action-types';
const initialState = {
	postData: [
		{id: 1, text: 'Я люблю тебя Ару', likeCount: 12, dislikeCount: 0},
		{id: 2, text: 'Я люблю React и понимаю что нужен Redux и библиотеку React-Redux', likeCount: 10, dislikeCount: 0}
	],
	newPostText: '',
	userProfile: null 
}
const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_POST_TEXT: 
			return {
				...state,
				newPostText: action.text
			};
		case ADD_POST: 
			const newPost = {
				id: 6, 
				text: state.newPostText,
				likeCount: 0,
				dislikeCount: 0
			}
			if (state.newPostText === '') {
				return state;
			}
			return {
				...state,
				postData: [...state.postData, newPost ],
				newPostText: ''
			};
		case SET_USER_PROFILE: 
			return {
				...state,
				userProfile: action.userProfile
			};
		
		default:
			return state;
	}
};

export default profileReducer;