import { connect } from 'react-redux';
import { compose } from 'redux';
import Messages from './messages';
import { sendMessage } from '../../redux/action-creators/dialogs-action-creators';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const mapStateToProps = (state) => {
	return {
		messageData: state.dialogs.messageData,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		dispatchedSendMessage: (messageText) => {
			dispatch(sendMessage(messageText));
		},
	};
};
export default compose(
	withAuthRedirect,
	connect(mapStateToProps, mapDispatchToProps)
)(Messages);
