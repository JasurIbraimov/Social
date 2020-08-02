import {connect} from 'react-redux';
import Messages from './messages';
import {sendMessage, updateMessageText} from '../../redux/action-creators/dialogs-action-creators';

// const MessagesContainer = ({store}) => {
// 	const dispatchedSendMessage = () => {
// 		store.dispatch(sendMessage());
// 	}
// 	const dispatchedUpdateMessageText = (value) => {
// 		store.dispatch(updateMessageText(value));
// 	};
// 	const messageData = store.getState().dialogs.messageData;
// 	const newMessageText = store.getState().dialogs.newMessageText;
// 	return (
// 		<Messages 
// 			newMessageText={newMessageText}
// 			messageData={messageData}
// 			dispatchedSendMessage={dispatchedSendMessage} 
// 			dispatchedUpdateMessageText={dispatchedUpdateMessageText}/>
// 	);
// };

const mapStateToProps = (state) => {
	return {
		messageData: state.dialogs.messageData,
		newMessageText: state.dialogs.newMessageText
	}
} 
const mapDispatchToProps = (dispatch) => {
	return {
		dispatchedSendMessage: () => {
			dispatch(sendMessage())
		},
		dispatchedUpdateMessageText: (value) => {
			dispatch(updateMessageText(value))
		}
	}
}
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)
export default MessagesContainer;