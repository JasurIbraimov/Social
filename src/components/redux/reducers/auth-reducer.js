import {
	AUTH_USER,
	SET_AUTH_USER_DATA,
	SET_LOADING,
	SET_USER_LOGIN,
} from '../action-types/auth-action-types';
const initialState = {
	email: null,
	userId: null,
	login: null,
	isAuth: false,
	isLoading: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_AUTH_USER_DATA:
			return {
				...state,
				...action.data,
			};
		case AUTH_USER:
			return {
				...state,
				isAuth: action.isAuth,
			};
		case SET_LOADING:
			return {
				...state,
				isLoading: action.isLoading,
			};
		case SET_USER_LOGIN:
			return {
				...state,
				login: action.login,
			};

		default:
			return state;
	}
};

export default authReducer;
