import React from 'react';
import SendButton from '../buttons/send-button';
import { Form, Field } from 'react-final-form';
import './type-form.scss';

const TypeForm = ({ onSubmit, settings, name }) => {
	const { placeholder, rows } = settings;
	const required = (value) => (value ? undefined : '');
	return (
		<Form
			onSubmit={onSubmit}
			render={({ handleSubmit, form, submitting, pristine }) => (
				<form onSubmit={handleSubmit} className='type-form'>
					<Field
						afterSubmit={() => {
							form.reset();
						}}
						name={name}
						validate={required}
					>
						{({ input }) => (
							<div>
								<textarea
									rows={rows}
									{...input}
									placeholder={placeholder}
									className='type-form__textarea'
								/>
							</div>
						)}
					</Field>
					<div>
						<SendButton
							type='submit'
							disabled={submitting || pristine}
							label='&#9998;'
						/>
					</div>
				</form>
			)}
		/>
	);
};

export default TypeForm;
