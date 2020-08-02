import {AUTH_USER, SET_AUTH_USER_DATA, SET_LOADING} from '../action-types/auth-action-types';
const initialState = {
	email: null,
	login: null,
	id: null,
	isAuth: false,
	isLoading: false
};

const authReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_AUTH_USER_DATA: 
			return {
				...state,
				...action.data
			}
		case AUTH_USER: 
			return {
				...state,
				isAuth: true
			}
		case SET_LOADING: 
			return {
				...state,
				isLoading: action.isLoading
			}
		default:
			return state;
	}

};

export default authReducer;
