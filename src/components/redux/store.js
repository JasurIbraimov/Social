import {sidebarReducer, profileReducer, dialogsReducer} from './reducers';

const store = {
	_state: {
		profile: {
			postData: [
				{id: 1, text: 'Я люблю тебя Ару', likeCount: 12, dislikeCount: 0},
				{id: 2, text: 'Я люблю React и понимаю что нужен Redux', likeCount: 10, dislikeCount: 0}
			],
			newPostText: ''
		},
		dialogs: {
			dialogsData: [
				{id: 1, label: 'Жасур'},
				{id: 2, label: 'Ару'},
				{id: 3, label: 'Мама'},
				{id: 4, label: 'Сестра'},
				{id: 5, label: 'Бабушка'}
			],
			messageData: [
				{id: 1, label: 'Жасур', text: 'Привет как дела? Я изучаю)', img: 'https://images.pexels.com/photos/4597126/pexels-photo-4597126.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
				{id: 2, label: 'Ару', text: 'Иду обедать', img: 'https://images.pexels.com/photos/213780/pexels-photo-213780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
				{id: 3, label: 'Мама', text: 'Бабушка нормально', img: 'https://images.pexels.com/photos/1122409/pexels-photo-1122409.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
				{id: 4, label: 'Сестра', text: 'Сегодня все!', img: 'https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
				{id: 5, label: 'Бабушка', text: 'Все хорошо!', img: 'https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
			],
			newMessageText: ''
		},
		sidebar: {
			friends: [
				{id: 1, label: 'Жасур', img: 'https://images.pexels.com/photos/4597126/pexels-photo-4597126.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
				{id: 2, label: 'Ару', img: 'https://images.pexels.com/photos/213780/pexels-photo-213780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
				{id: 3, label: 'Мама', img: 'https://images.pexels.com/photos/1122409/pexels-photo-1122409.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
			]
		} 
	},
	_emit() {
		console.log('')
	},
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._emit = observer;
	},
	dispatch(action) {
		this._state.dialogs = dialogsReducer(this._state.dialogs, action);
		this._state.profile = profileReducer(this._state.profile, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);
		this._emit();
	}
}

export default store;
