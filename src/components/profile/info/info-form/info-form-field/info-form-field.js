import React from 'react';
import { Field } from 'react-final-form';
const InfoFormField = ({ label, name, component, type }) => {
	return (
		<>
			<label className='info-form__label'>{label}</label>
			<Field
				name={name}
				component={component}
				type={type}
				className='info-form__field'
			/>
		</>
	);
};

export default InfoFormField;
