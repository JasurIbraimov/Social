import {UPDATE_MESSAGE_TEXT, SEND_MESSAGE} from '../action-types/dialogs-action-types';
export const updateMessageText = (text) => ({type: UPDATE_MESSAGE_TEXT, text});
export const sendMessage = () => ({type: SEND_MESSAGE});