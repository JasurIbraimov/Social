import React from 'react';
import { Form } from 'react-final-form';
import InfoFormField from './info-form-field';
import './info-form.scss';
const InfoForm = ({ onSubmit, initialValues, userProfile }) => {
	return (
		<Form
			initialValues={initialValues}
			onSubmit={onSubmit}
			render={(props) => {
				return (
					<form className='info-form' onSubmit={props.handleSubmit}>
						<InfoFormField
							label='Имя пользователя'
							component='input'
							name='fullName'
							type='text'
						/>
						<InfoFormField
							label='Обо мне'
							component='input'
							name='aboutMe'
							type='text'
						/>
						<InfoFormField
							label='Ищу работу'
							component='input'
							name='lookingForAJob'
							type='checkbox'
						/>
						<InfoFormField
							label='Описание работы'
							component='input'
							name='lookingForAJobDescription'
							type='text'
						/>
						{Object.keys(userProfile.contacts).map((key) => {
							return (
								<InfoFormField
									key={key}
									label={key}
									component='input'
									name={`contacts.${key}`}
									type='text'
								/>
							);
						})}
						<div>
							<button className='info-form__btn'>Сохранить изменения</button>
						</div>
					</form>
				);
			}}
		/>
	);
};
export default InfoForm;
