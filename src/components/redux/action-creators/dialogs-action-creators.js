import { SEND_MESSAGE } from '../action-types/dialogs-action-types';
export const sendMessage = (messageText) => ({
	type: SEND_MESSAGE,
	messageText,
});
