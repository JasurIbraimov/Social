import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import LoginField from '../login-field';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	required,
	composeValidators,
	minPasswordLength,
	mustMatch,
} from '../../helpers/validators';
import './login-form.scss';

const LoginForm = ({ onSubmit, loginStatus }) => {
	const [visible, setVisible] = useState(false);
	const [visibleConfirm, setVisibleConfirm] = useState(false);
	return (
		<Form
			onSubmit={onSubmit}
			render={(props) => {
				return (
					<form className='login__form' onSubmit={props.handleSubmit}>
						<LoginField
							validator={required}
							name='email'
							label='Имя пользователя'
							inputPlaceholder='Введите имя пользователя'
							inputType='email'
						/>
						<div className='login__password'>
							<LoginField
								validator={composeValidators(required, minPasswordLength(5))}
								name='password'
								label='Пароль'
								inputPlaceholder='Введите пароль'
								inputType={visible ? 'text' : 'password'}
							/>
							<span
								onClick={() => setVisible(!visible)}
								className='login__password-eye'
							>
								<FontAwesomeIcon icon={visible ? faEye : faEyeSlash} />
							</span>
						</div>
						<div className='login__password'>
							<LoginField
								validator={composeValidators(
									required,
									mustMatch(props.values.password)
								)}
								name='confirm'
								label='Потверждение пароля'
								inputPlaceholder='Введите пароль заново'
								inputType={visibleConfirm ? 'text' : 'password'}
							/>
							<span
								onClick={() => setVisibleConfirm(!visibleConfirm)}
								className='login__password-eye'
							>
								<FontAwesomeIcon icon={visibleConfirm ? faEye : faEyeSlash} />
							</span>
						</div>
						<Field name='rememberMe' type='checkbox'>
							{({ input, meta }) => (
								<div className='login__field login__field_checkbox'>
									<label className='login__label'>Запомнить меня</label>
									<input {...input} type='checkbox' className='login__input' />
									{meta.error && meta.touched && (
										<span className='login__error'>{meta.error}</span>
									)}
								</div>
							)}
						</Field>
						<div className='login__field login__field_buttons'>
							<button
								className='login__btn'
								type='submit'
								disabled={props.submitting || props.pristine}
							>
								Submit
							</button>
							<button
								className='login__btn login__btn_reset'
								type='button'
								onClick={props.form.reset}
								disabled={props.submitting || props.pristine}
							>
								Reset
							</button>
						</div>
						{loginStatus === 'failure' ? (
							<div className='login__form-failure'>
								Неправильный пароль или имя пользователя!
							</div>
						) : null}
					</form>
				);
			}}
		/>
	);
};
export default LoginForm;
