import {AUTH_USER, SET_AUTH_USER_DATA, SET_LOADING} from '../action-types/auth-action-types';
export const setAuthUserData = (email, login, id) => ({type: SET_AUTH_USER_DATA, data: {email, login, id}})
export const authUser = () => ({type: AUTH_USER})
export const setLoading = (isLoading) => ({type: SET_LOADING, isLoading})