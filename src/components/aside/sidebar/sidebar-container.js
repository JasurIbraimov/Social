import {connect} from 'react-redux';
import Sidebar from './sidebar';

// const SidebarContainer = ({store}) => {
// 	const friends = store.getState().sidebar.friends
// 	return (
// 		<Sidebar friends={friends}/>
// 	);
// };
const mapStateToProps = (state) => {
	return {
		friends: state.sidebar.friends
	}
}
const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;