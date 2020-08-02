import {connect} from 'react-redux';
import DialogList from './dialog-list';

// const DialogListContainer = ({store}) => {
// 	const dialogsData = store.getState().dialogs.dialogsData;
// 	return (
// 		<DialogList dialogsData={dialogsData}/>
// 	);
// };

const mapStateToProps = (state) => {
	return {
		dialogsData: state.dialogs.dialogsData
	}
}

const DialogListContainer = connect(mapStateToProps)(DialogList)
export default DialogListContainer;