import React, { Component } from 'react'
import {connect} from 'react-redux';
import Header from './header';
import { setAuthUserData, authUser, setLoading} from '../redux/action-creators/auth-action-creators';
import UsersService from '../services/users-api';

class HeaderContainer extends Component {
	service = new UsersService();
	componentDidMount() {
		try {
			this.props.setLoading(true)
			this.service.authUser()
			.then(response => {
				const {data, resultCode} = response.data;
				console.log(response.data); 
				if(resultCode === 0) {
					this.props.authUser()
				}
				this.props.setAuthUserData(data.email, data.login, data.id)
				this.props.setLoading(false)
			})
		} catch (error) {
			this.props.setLoading(false)
		}
	}
	render() {
		return (
			<Header {...this.props}/>
		)
	}
}

const mapStateToProps = (state) => {
	const {auth} = state;
	return {
		email: auth.email,
		login: auth.login,
		id: auth.id,
		isAuth: auth.isAuth,
		isLoading: auth.isLoading
	}
}

export default connect(mapStateToProps, {setAuthUserData, authUser, setLoading})(HeaderContainer);