import {
	setAuthUserData,
	setUserLogin,
	authUser,
	setLoading,
} from '../action-creators/auth-action-creators';
import UsersService from '../../services/users-api';

const service = new UsersService();
export const auth = () => async (dispatch) => {
	dispatch(setLoading(true));
	const response = await service.authUser();
	const { data, resultCode } = response.data;
	if (resultCode === 0) {
		dispatch(setUserLogin(data.login));
	}
	dispatch(setLoading(false));
};
export const login = (email, password, rememberMe) => async (dispatch) => {
	dispatch(setLoading(true));
	const response = await service.loginUser(email, password, rememberMe);
	const { resultCode } = response.data;
	if (resultCode === 0) {
		dispatch(setAuthUserData(email, response.data.data.userId));
		dispatch(authUser(true));
		dispatch(auth());
	}
	dispatch(setLoading(false));
};

export const logout = () => async (dispatch) => {
	dispatch(setLoading(true));
	const response = await service.logoutUser();
	const { resultCode } = response.data;
	if (resultCode === 0) {
		dispatch(authUser(false));
		dispatch(setAuthUserData(null, null));
		dispatch(setUserLogin(null));
	}
	dispatch(setLoading(false));
};
