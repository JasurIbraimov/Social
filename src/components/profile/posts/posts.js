import React from 'react';
import PostItem from './post-item';
import TypeForm from '../../assets/type-form';
import './posts.scss';
const Posts = ({postData, newPostText, dispatchedAddPost, dispatchedUpdatePostText}) => {
	const createNewPost = (e) => {
		e.preventDefault();
		dispatchedAddPost();
	};
	const createPostText = (value) => {
		dispatchedUpdatePostText(value);
	}
	return (
		<section className='posts'>
			<h2 className='posts__title'>Мои посты</h2>
			<TypeForm 
				settings={{placeholder: 'Ваши новости', rows:'1'}}
				newText={newPostText} 
				createItem={createNewPost} 
				writeText={createPostText}/>
			{
				postData.map(post => 
					<PostItem 
						key={post.id}
						id={post.id} 
						post={post.text} 
						likeCount={post.likeCount} 
						dislikeCount={post.dislikeCount}/>)
			}
		</section>
	)
}

export default Posts;