import {
	FOLLOW_USER,
	UNFOLLOW_USER,
	SET_USERS,
	SET_TOTAL_COUNT,
	SET_CURRENT_PAGE,
	SET_IS_LOADING,
	SET_FOLLOWING_IN_PROCESS,
} from '../action-types/users-action-types';
const initialState = {
	usersData: [],
	friends: [
		{
			userId: 1,
			follow: false,
			userName: 'Андрей',
			userSurname: 'Александров',
			status: 'Привет всем!',
			img:
				'https://images.pexels.com/photos/4597126/pexels-photo-4597126.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
			location: { cityName: 'Temirtay', countryName: 'Kazakhstan' },
		},
		{
			userId: 2,
			follow: false,
			userName: 'Саша',
			userSurname: 'Иванов',
			status: 'Привет всем!!',
			img:
				'https://images.pexels.com/photos/213780/pexels-photo-213780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			location: { cityName: 'Temirtay', countryName: 'Kazakhstan' },
		},
		{
			userId: 3,
			follow: false,
			userName: 'Алекс',
			userSurname: 'Рик',
			status: 'Привет всем!!',
			img:
				'https://images.pexels.com/photos/1122409/pexels-photo-1122409.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			location: { cityName: 'Aktau', countryName: 'Kazakhstan' },
		},
	],
	pageSize: 5,
	totalCount: 0,
	currentPage: 1,
	isLoading: false,
	followingInProcess: [],
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW_USER:
			return {
				...state,
				usersData: state.usersData.map((user) => {
					if (user.id === action.userId) {
						return {
							...user,
							followed: true,
						};
					}
					return user;
				}),
			};
		case UNFOLLOW_USER:
			return {
				...state,
				usersData: state.usersData.map((user) => {
					if (user.id === action.userId) {
						return {
							...user,
							followed: false,
						};
					}
					return user;
				}),
			};
		case SET_USERS:
			return {
				...state,
				usersData: [...action.users],
			};
		case SET_TOTAL_COUNT:
			return {
				...state,
				totalCount: action.totalCount,
			};
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage,
			};
		case SET_IS_LOADING:
			return {
				...state,
				isLoading: action.isLoading,
			};
		case SET_FOLLOWING_IN_PROCESS:
			return {
				...state,
				followingInProcess: action.followingProcess
					? [...state.followingInProcess, action.userId]
					: state.followingInProcess.filter(
							(userId) => action.userId !== userId
					  ),
			};
		default:
			return state;
	}
};

export default usersReducer;
