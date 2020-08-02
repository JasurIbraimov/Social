import {ADD_POST, UPDATE_POST_TEXT, SET_USER_PROFILE} from '../action-types/profile-action-types';
export const addPost = () => ({type: ADD_POST});
export const updatePostText = (text) => ({type: UPDATE_POST_TEXT, text});
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile});