import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
	getProfile,
	getStatus,
	updateStatus,
} from '../../redux/thunks/profile-thunks';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Info from './info';
import { compose } from 'redux';
class InfoContainer extends Component {
	componentDidMount() {
		const { match, userId, getProfile, getStatus } = this.props;
		let userIdURI = match.params.userId;
		if (!userIdURI) {
			userIdURI = userId;
		}
		getProfile(userId);
		getStatus(userId);
	}
	render() {
		const { userProfile, updateStatus, userStatus } = this.props;
		return (
			<Info
				userProfile={userProfile}
				updateStatus={updateStatus}
				userStatus={userStatus}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	const { profile, auth } = state;
	return {
		userProfile: profile.userProfile,
		userStatus: profile.userStatus,
		userId: auth.userId,
	};
};

export default compose(
	withRouter,
	withAuthRedirect,
	connect(mapStateToProps, { getProfile, getStatus, updateStatus })
)(InfoContainer);
