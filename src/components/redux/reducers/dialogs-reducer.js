import { SEND_MESSAGE } from '../action-types/dialogs-action-types';
const initialState = {
	dialogsData: [{ id: 1, label: 'Андрей' }],
	messageData: [
		{
			id: 1,
			label: 'Андрей',
			text: 'Привет как дела? Я изучаю)',
			img:
				'https://images.pexels.com/photos/4597126/pexels-photo-4597126.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		},
	],
};
const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE: {
			const newMessage = {
				id: 1,
				label: state.messageData[0].label,
				text: action.messageText,
				img: state.messageData[0].img,
			};
			if (action.messageText === '') {
				return state;
			}
			return {
				...state,
				messageData: [...state.messageData, newMessage],
			};
		}
		default:
			return state;
	}
};

export default dialogsReducer;
