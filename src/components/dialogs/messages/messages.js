import React from 'react';
import MessageItem from './message-item';
import './messages.scss';
import TypeForm from '../../assets/type-form';
const Messages = ({ messageData, dispatchedSendMessage }) => {
	const createMessage = (data) => {
		dispatchedSendMessage(data.messageText);
	};
	return (
		<section className='messages'>
			<div className='messages__box'>
				{messageData.map((message) => (
					<MessageItem
						id={message.id}
						addressId={message.addressId}
						key={message.id}
						label={message.label}
						text={message.text}
						img={message.img}
					/>
				))}
				<TypeForm
					settings={{ placeholder: 'Написать сообщение', rows: '3' }}
					onSubmit={createMessage}
					name='messageText'
				/>
			</div>
		</section>
	);
};

export default Messages;
