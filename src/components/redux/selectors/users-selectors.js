import { createSelector } from 'reselect';
export const gUsersData = (state) => state.users.usersData;
export const gCurrentPage = (state) => state.users.currentPage;
export const gTotalCount = (state) => state.users.totalCount;
export const gPageSize = (state) => state.users.pageSize;
export const gIsLoading = (state) => state.users.isLoading;
export const gFollowingInProcess = (state) => state.users.followingInProcess;
export const usersDataSelector = createSelector(gUsersData, (users) =>
	users.filter((user) => true)
);
