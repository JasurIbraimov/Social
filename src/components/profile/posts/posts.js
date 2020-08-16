import React from 'react';
import { connect } from 'react-redux';
import PostItem from './post-item';
import TypeForm from '../../assets/type-form';
import { addPost } from '../../redux/action-creators/profile-action-creators';
import './posts.scss';
const Posts = React.memo(({ postData, addPost }) => {
	const createNewPost = (data) => {
		console.log(data);
		addPost(data.postText);
	};
	return (
		<section className='posts'>
			<h2 className='posts__title'>Мои посты</h2>
			<TypeForm
				settings={{ placeholder: 'Ваши новости', rows: '1' }}
				onSubmit={createNewPost}
				name='postText'
			/>
			{postData.map((post) => (
				<PostItem
					key={post.id}
					id={post.id}
					post={post.text}
					likeCount={post.likeCount}
					dislikeCount={post.dislikeCount}
				/>
			))}
		</section>
	);
});

const mapStateToProps = (state) => ({ postData: state.profile.postData });
export default connect(mapStateToProps, { addPost })(Posts);
