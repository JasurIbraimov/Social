import React from 'react';
import MessageItem from './message-item';
import './messages.scss';
import TypeForm from '../../assets/type-form';
const Messages = ({messageData, newMessageText, dispatchedSendMessage, dispatchedUpdateMessageText}) => {
	const createMessage = (e) => {
		e.preventDefault();
		dispatchedSendMessage()
	}
	const createMessageText = (value) => {
		dispatchedUpdateMessageText(value)
	};
	return (
		<section className='messages'>
			<div className='messages__box'>
				{
					messageData.map(message => 
						<MessageItem 
							id={message.id}
							addressId={message.addressId}
							key={message.id}
							label={message.label} 
							text={message.text} 
							img={message.img} />)
				}
				<TypeForm 
				settings={{placeholder: 'Написать сообщение', rows: '5'}}
				newText={newMessageText}
				createItem={createMessage} 
				writeText={createMessageText}/>
			</div>
			
		</section>
	)
}

export default Messages;