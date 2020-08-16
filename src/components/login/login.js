import React from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/thunks/auth-thunks';
import { Redirect } from 'react-router-dom';
import LoginForm from './login-form';

const Login = ({ login, isAuth }) => {
	const onFormSubmit = (data) => {
		login(data.email, data.password, data.rememberMe);
	};
	return (
		<div className='login'>
			{isAuth ? (
				<Redirect to='/profile' />
			) : (
				<LoginForm onSubmit={onFormSubmit} />
			)}
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
	};
};
export default connect(mapStateToProps, { login })(Login);
