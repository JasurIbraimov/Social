import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export const withAuthRedirect = (Component) => {
	const WrappedComponent = (props) => {
		if (!props.isAuth) {
			return <Redirect to='/login' />;
		}
		return <Component {...props} />;
	};
	const mapStateToProps = (state) => {
		return {
			isAuth: state.auth.isAuth,
		};
	};
	return connect(mapStateToProps)(WrappedComponent);
};
