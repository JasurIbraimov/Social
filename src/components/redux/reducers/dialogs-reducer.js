import {UPDATE_MESSAGE_TEXT, SEND_MESSAGE} from '../action-types/dialogs-action-types';
const initialState = {
	dialogsData: [
		{id: 1, label: 'Андрей'},
		{id: 2, label: 'Саша'},
		{id: 3, label: 'Алекс'},
		{id: 4, label: 'Миша'},
		{id: 5, label: 'Роберт'}
	],
	messageData: [
		{id: 1, label: 'Андрей', text: 'Привет как дела? Я изучаю)', img: 'https://images.pexels.com/photos/4597126/pexels-photo-4597126.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
		{id: 2, label: 'Саша', text: 'Иду обедать', img: 'https://images.pexels.com/photos/213780/pexels-photo-213780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
		{id: 3, label: 'Алекс', text: 'Бабушка нормально', img: 'https://images.pexels.com/photos/1122409/pexels-photo-1122409.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
		{id: 4, label: 'Миша', text: 'Сегодня все!', img: 'https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
		{id: 5, label: 'Роберт', text: 'Все хорошо!', img: 'https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
	],
	newMessageText: ''
}
const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_MESSAGE_TEXT: {
			return {
				...state,
				newMessageText: action.text
			};
		}
		case SEND_MESSAGE: {
			const newMessage = {
				id: 1, 
				label: state.messageData[0].label, 
				text: state.newMessageText, 
				img: state.messageData[0].img
			}
			if(state.newMessageText === '') {
				return state;
			}
			return {
				...state,
				messageData: [...state.messageData, newMessage],
				newMessageText: ''
			};
		}
		default:
			return state;
	}
};

export default dialogsReducer;