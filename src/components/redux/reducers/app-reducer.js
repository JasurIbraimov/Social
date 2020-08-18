import { APP_SET_IS_LOADING } from '../action-types/app-action-types';
const initialState = {
	isLoading: false,
};
const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case APP_SET_IS_LOADING:
			return {
				...state,
				isLoading: action.isLoading,
			};
		default:
			return state;
	}
};

export default appReducer;
