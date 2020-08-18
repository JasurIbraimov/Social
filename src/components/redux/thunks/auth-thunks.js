import {
	setAuthUserData,
	setUserLogin,
	authUser,
	authSetIsLoading,
	setLoginStatus,
} from '../action-creators/auth-action-creators';
import UsersService from '../../services/users-api';

const service = new UsersService();
export const auth = () => async (dispatch) => {
	dispatch(authSetIsLoading(true));
	const response = await service.authUser();
	const { data, resultCode } = response.data;
	if (resultCode === 0) {
		dispatch(setUserLogin(data.login));
	}
	dispatch(authSetIsLoading(false));
};
export const login = (email, password, rememberMe) => async (dispatch) => {
	dispatch(authSetIsLoading(true));
	const response = await service.loginUser(email, password, rememberMe);
	const { resultCode } = response.data;
	if (resultCode === 0) {
		dispatch(setLoginStatus('success'));
		dispatch(setAuthUserData(email, response.data.data.userId));
		dispatch(authUser(true));
		dispatch(auth());
	} else {
		dispatch(setLoginStatus('failure'));
	}
	dispatch(authSetIsLoading(false));
};

export const logout = () => async (dispatch) => {
	dispatch(authSetIsLoading(true));
	const response = await service.logoutUser();
	const { resultCode } = response.data;
	if (resultCode === 0) {
		dispatch(authUser(false));
		dispatch(setAuthUserData(null, null));
		dispatch(setUserLogin(null));
	}
	dispatch(authSetIsLoading(false));
};
