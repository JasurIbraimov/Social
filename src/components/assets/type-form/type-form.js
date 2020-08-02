import React from 'react';
import SendButton from '../buttons/send-button';
import './type-form.scss';

const TypeForm = ({createItem , writeText, settings, newText}) => {
	const {placeholder, rows} = settings;
	const addText = (e) => {
		const text = e.target.value;
		writeText(text);
	}
	return (
		<form onSubmit={createItem}  className='type-form'>
			<textarea 
				value={newText}
				onChange={addText} 
			 	rows={rows}
				className='type-form__textarea' 
				placeholder={placeholder}/>
			<SendButton label='&#9998;'/>
		</form>
	)
}

export default TypeForm;
