import {
	AUTH_AUTHORIZE_USER,
	AUTH_SET_USER_DATA,
	AUTH_SET_USER_LOGIN,
	AUTH_SET_IS_LOADING,
	AUTH_SET_LOGIN_STATUS,
} from '../action-types/auth-action-types';
const initialState = {
	email: null,
	userId: null,
	login: null,
	loginStatus: '',
	isAuth: false,
	isLoading: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTH_SET_USER_DATA:
			return {
				...state,
				...action.data,
			};
		case AUTH_AUTHORIZE_USER:
			return {
				...state,
				isAuth: action.isAuth,
			};
		case AUTH_SET_USER_LOGIN:
			return {
				...state,
				login: action.login,
			};
		case AUTH_SET_IS_LOADING:
			return {
				...state,
				isLoading: action.isLoading,
			};
		case AUTH_SET_LOGIN_STATUS:
			return {
				...state,
				loginStatus: action.loginStatus,
			};

		default:
			return state;
	}
};

export default authReducer;
