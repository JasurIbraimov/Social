import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { logout } from '../redux/thunks/auth-thunks';
const HeaderContainer = (props) => {
	return <Header {...props} />;
};

const mapStateToProps = (state) => {
	const { auth } = state;
	return {
		email: auth.email,
		login: auth.login,
		isAuth: auth.isAuth,
		isLoading: auth.isLoading,
	};
};

export default connect(mapStateToProps, { logout })(HeaderContainer);
