import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
	getProfile,
	getStatus,
	updateStatus,
	updateUserPhotos,
	updateUserProfile,
} from '../../redux/thunks/profile-thunks';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Info from './info';
import { compose } from 'redux';
import Loading from '../../assets/loading';
import ProfileStatus from '../profile-status';
class InfoContainer extends Component {
	setUserProfile = () => {
		const { match, userId, getProfile, getStatus } = this.props;
		let userIdURI = match.params.userId;
		if (!userIdURI) {
			userIdURI = userId;
		}
		getProfile(userIdURI);
		getStatus(userIdURI);
	};
	componentDidMount() {
		this.setUserProfile();
	}
	componentDidUpdate(prevProps) {
		if (this.props.match.params.userId !== prevProps.match.params.userId) {
			this.setUserProfile();
		}
	}
	render() {
		const {
			userProfile,
			updateStatus,
			userStatus,
			isLoading,
			updateUserPhotos,
			updateUserProfile,
		} = this.props;
		const userLoaded = isLoading ? (
			<Loading label='Подгружаем пользователя...' />
		) : (
			<>
				<Info
					updateUserProfile={updateUserProfile}
					updateUserPhotos={updateUserPhotos}
					ownProfile={!this.props.match.params.userId}
					userProfile={userProfile}
					updateStatus={updateStatus}
					userStatus={userStatus}
				/>
				<ProfileStatus
					ownProfile={!this.props.match.params.userId}
					updateStatus={updateStatus}
					userStatus={userStatus}
				/>
			</>
		);
		return <div>{userLoaded}</div>;
	}
}

const mapStateToProps = (state) => {
	const { profile, auth, app } = state;
	return {
		userProfile: profile.userProfile,
		userStatus: profile.userStatus,
		userId: auth.userId,
		isLoading: app.isLoading,
	};
};

export default compose(
	withRouter,
	withAuthRedirect,
	connect(mapStateToProps, {
		getProfile,
		getStatus,
		updateStatus,
		updateUserPhotos,
		updateUserProfile,
	})
)(InfoContainer);
