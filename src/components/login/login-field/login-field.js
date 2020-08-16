import React from 'react';
import { Field } from 'react-final-form';
const LoginField = (validate) => {
	const { validator, name, label, inputType, inputPlaceholder } = validate;
	return (
		<Field validate={validator} name={name}>
			{({ input, meta }) => {
				const validateError = meta.error && meta.touched;
				return (
					<div className='login__field'>
						<label className='login__label'>{label}</label>
						<input
							{...input}
							type={inputType}
							className={
								validateError
									? 'login__input login__input_validate'
									: 'login__input'
							}
							placeholder={inputPlaceholder}
						/>
						{validateError && (
							<span className='login__error'>{meta.error}</span>
						)}
					</div>
				);
			}}
		</Field>
	);
};
export default LoginField;
