import {
	AUTH_AUTHORIZE_USER,
	AUTH_SET_USER_DATA,
	AUTH_SET_USER_LOGIN,
	AUTH_SET_IS_LOADING,
	AUTH_SET_LOGIN_STATUS,
} from '../action-types/auth-action-types';
export const setAuthUserData = (email, userId) => ({
	type: AUTH_SET_USER_DATA,
	data: { email, userId },
});
export const setUserLogin = (login) => ({
	type: AUTH_SET_USER_LOGIN,
	login,
});
export const authSetIsLoading = (isLoading) => ({
	type: AUTH_SET_IS_LOADING,
	isLoading,
});
export const authUser = (isAuth) => ({ type: AUTH_AUTHORIZE_USER, isAuth });
export const setLoginStatus = (loginStatus) => ({
	type: AUTH_SET_LOGIN_STATUS,
	loginStatus,
});
