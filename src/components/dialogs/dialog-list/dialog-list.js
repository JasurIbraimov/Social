import React from 'react';
import DialogListItem from './dialog-list-item';
import './dialog-list.scss';
const DialogList = ({dialogsData}) => {
	
	return (
		<section className='dialog-list'>
			<div>
				{
					dialogsData.map(dialog => 
						<DialogListItem 
							key={dialog.id}
							label={dialog.label} 
							id={dialog.id} />)
				}
			</div>
		</section>
	);
}

export default DialogList;