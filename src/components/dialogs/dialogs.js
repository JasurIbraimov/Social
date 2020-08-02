import React from 'react';
import DialogListContainer from './dialog-list/dialog-list-container';
import MessagesContainer from './messages/messages-container';
import './dialogs.scss';

const Dialogs = () => {
	return (
		<main className='dialogs'>
			{/* <StoreContext.Consumer>
				{
					(store) => (
						<>
							<DialogListContainer store={store}/>
							<MessagesContainer store={store}/>
						</>
					)
				}
			</StoreContext.Consumer> */}
			<DialogListContainer/>
			<MessagesContainer/>
			
		</main>
	)
}

export default Dialogs;