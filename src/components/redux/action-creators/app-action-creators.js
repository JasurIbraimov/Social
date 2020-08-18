import { APP_SET_IS_LOADING } from '../action-types/app-action-types';
export const setIsLoading = (isLoading) => ({
	type: APP_SET_IS_LOADING,
	isLoading,
});
