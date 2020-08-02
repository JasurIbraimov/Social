import React, { Component } from 'react'
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {setUserProfile} from '../../redux/action-creators/profile-action-creators';
import Info from './info'
import UsersService from '../../services/users-api';

class InfoContainer extends Component {
	service = new UsersService();

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if(!userId) {
			userId = 9625;
		}
		this.service.getUserProfile(userId)
		.then(response => {
			this.props.setUserProfile(response.data)
			console.log(response.data)
		});
	}
	render() {
		return (
			<Info userProfile={this.props.userProfile}/>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		userProfile: state.profile.userProfile
	}
}
export default connect(mapStateToProps, {setUserProfile})(withRouter(InfoContainer));