import axios from 'axios';

export default class UsersService {
	constructor() {
		this._usersApi = axios.create({
			baseURL: 'https://social-network.samuraijs.com/api/1.0',
			withCredentials: true,
			headers: {
				"API-KEY": "4ac1ad81-cb42-457d-aca2-bea22b6918b1"
			}
		});
	}

	getUsers = async (currentPage, pageSize) => {
		return await this._usersApi.get(`/users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
	}
	followUsers = async (userId) => {
		return await this._usersApi.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`);
	}
	unfollowUsers = async (userId) => {
		return await this._usersApi.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`);
	}
	getUserProfile = async (userId) => {
		return await this._usersApi.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
	}
	authUser = async () => {
		return await this._usersApi.get('https://social-network.samuraijs.com/api/1.0/auth/me');
	}
}