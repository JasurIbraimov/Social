import {
	AUTH_USER,
	SET_AUTH_USER_DATA,
	SET_LOADING,
	SET_USER_LOGIN,
} from '../action-types/auth-action-types';
export const setAuthUserData = (email, userId) => ({
	type: SET_AUTH_USER_DATA,
	data: { email, userId },
});
export const setUserLogin = (login) => ({
	type: SET_USER_LOGIN,
	login,
});
export const authUser = (isAuth) => ({ type: AUTH_USER, isAuth });
export const setLoading = (isLoading) => ({ type: SET_LOADING, isLoading });
