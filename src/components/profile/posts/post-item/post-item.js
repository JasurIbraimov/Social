import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faTimes } from '@fortawesome/free-solid-svg-icons'
import IconButton from '../../../assets/buttons/icon-button';
import './post-item.scss';
const PostItem = ({post, likeCount, dislikeCount}) => {

	return (
		<div className='post'>
			<div className='post__del'>
				<IconButton icon={faTimes} color='#e74c3c'/>
			</div>
			<div className='post__content'>
				{post}
			</div>
			<div className='post__stat'>
				<span className='post__count'>{likeCount}</span>
				<button className='post__btn'><FontAwesomeIcon  icon={faThumbsUp}/></button>
				<span className='post__count'>{dislikeCount}</span>
				<button className='post__btn post__btn_dislike' ><FontAwesomeIcon icon={faThumbsDown}/></button>
			</div>
		</div>
	)
};

export default PostItem;