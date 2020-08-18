import { DIALOGS_SEND_MESSAGE } from '../action-types/dialogs-action-types';
export const sendMessage = (messageText) => ({
	type: DIALOGS_SEND_MESSAGE,
	messageText,
});
