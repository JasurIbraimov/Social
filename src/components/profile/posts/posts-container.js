import {connect} from 'react-redux';
import Posts from './posts';
import {addPost, updatePostText} from '../../redux/action-creators/profile-action-creators';
// const PostsContainer = ({store}) => {
// 	const dispatchedAddPost = () => {
// 		store.dispatch(addPost());
// 	}
// 	const newPostText = store.getState().profile.newPostText;
// 	const postData = store.getState().profile.postData;
// 	const dispatchedUpdatePostText = (value) => {
// 		store.dispatch(updatePostText(value));
// 	}
// 	return	<Posts 
// 				postData={postData}
// 				newPostText = {newPostText}
// 				dispatchedAddPost={dispatchedAddPost}
// 				dispatchedUpdatePostText={dispatchedUpdatePostText}/>	
// };

const mapStateToProps = (state) => {
	return {
		postData: state.profile.postData,
		newPostText: state.profile.newPostText
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		dispatchedAddPost: () => dispatch(addPost()),
		dispatchedUpdatePostText: (value) => dispatch(updatePostText(value))
	}
}
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)
export default PostsContainer;