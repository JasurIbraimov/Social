import React from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/thunks/auth-thunks';
import { Redirect } from 'react-router-dom';
import LoginForm from './login-form';

const Login = ({ login, isAuth, loginStatus }) => {
	const onFormSubmit = (data) => {
		login(data.email, data.password, data.rememberMe);
	};
	return (
		<div className='login'>
			{isAuth ? (
				<Redirect to='/profile' />
			) : (
				<LoginForm onSubmit={onFormSubmit} loginStatus={loginStatus} />
			)}
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		loginStatus: state.auth.loginStatus,
	};
};
export default connect(mapStateToProps, { login })(Login);
