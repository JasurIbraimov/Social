import React from 'react';
import './message-item.scss';
import { Route } from 'react-router';
import Friend from '../../../assets/friend';
const MessageItem = ({id, label, text, img}) => {
	return (
	<Route path={`/dialogs/${id}`}>
		<div className='message'>
			<Friend label={label} img={img}/>
			<div className='message__box'>
				<span className='message__item'>{text}</span>
			</div>
		</div>
	</Route>
	)
} 

export default MessageItem;