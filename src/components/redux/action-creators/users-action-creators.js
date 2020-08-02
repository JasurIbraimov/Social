import {FOLLOW_USER, UNFOLLOW_USER, SET_USERS, SET_TOTAL_COUNT, SET_CURRENT_PAGE, SET_IS_LOADING} from '../action-types/users-action-types';
export const followUser = (userId) => ({type: FOLLOW_USER, userId});
export const unfollowUser = (userId) => ({type: UNFOLLOW_USER, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setIsLoading = (isLoading) => ({type: SET_IS_LOADING, isLoading});