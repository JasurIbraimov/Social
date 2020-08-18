import axios from 'axios';
export default class UsersService {
	constructor() {
		this._usersApi = axios.create({
			baseURL: 'https://social-network.samuraijs.com/api/1.0',
			withCredentials: true,
			headers: {
				'API-KEY': '4ac1ad81-cb42-457d-aca2-bea22b6918b1',
			},
		});
	}

	getUsers = async (currentPage, pageSize) => {
		const response = await this._usersApi.get(
			`/users?page=${currentPage}&count=${pageSize}`
		);
		return response.data;
	};
	followUser = async (userId) => {
		return await this._usersApi.post(`/follow/${userId}`);
	};
	unfollowUser = async (userId) => {
		return await this._usersApi.delete(`/follow/${userId}`);
	};
	getUserProfile = async (userId) => {
		return await this._usersApi.get(`/profile/${userId}`);
	};
	authUser = async () => {
		return await this._usersApi.get('/auth/me');
	};
	getUserStatus = async (userId) => {
		return await this._usersApi.get(`/profile/status/${userId}`);
	};
	updateUserStatus = async (status) => {
		return await this._usersApi.put(`/profile/status`, { status });
	};
	loginUser = async (email, password, rememberMe) => {
		return await this._usersApi.post('/auth/login', {
			email,
			password,
			rememberMe,
		});
	};
	logoutUser = async () => {
		return await this._usersApi.delete('/auth/login');
	};
	saveUserPhotos = async (photos) => {
		const formData = new FormData();
		formData.append('image', photos);
		return await this._usersApi.put(`/profile/photo`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});
	};
	saveUserProfile = async (profile) => {
		// console.log({ ...profile });
		return await this._usersApi.put(`/profile`, profile);
	};
}
