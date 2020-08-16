import React, { Component } from 'react';
import { connect } from 'react-redux';
import { follow, getUsers, unfollow } from '../redux/thunks/users-thunks';
import Users from './users';
import {
	gCurrentPage,
	gTotalCount,
	gPageSize,
	gIsLoading,
	gFollowingInProcess,
	gUsersData,
} from '../redux/selectors/users-selectors';
class UsersContainer extends Component {
	componentDidMount() {
		const { currentPage, pageSize, getUsers } = this.props;
		getUsers(currentPage, pageSize);
	}
	setPage = (currentPage) => {
		const { pageSize, getUsers } = this.props;
		getUsers(currentPage, pageSize);
	};
	render() {
		const {
			usersData,
			totalCount,
			pageSize,
			currentPage,
			isLoading,
			followingInProcess,
			follow,
			unfollow,
		} = this.props;
		return (
			<Users
				usersData={usersData}
				totalCount={totalCount}
				pageSize={pageSize}
				currentPage={currentPage}
				setPage={this.setPage}
				follow={follow}
				followingInProcess={followingInProcess}
				unfollow={unfollow}
				isLoading={isLoading}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		usersData: gUsersData(state),
		currentPage: gCurrentPage(state),
		totalCount: gTotalCount(state),
		pageSize: gPageSize(state),
		isLoading: gIsLoading(state),
		followingInProcess: gFollowingInProcess(state),
	};
};

export default connect(mapStateToProps, {
	getUsers,
	follow,
	unfollow,
})(UsersContainer);
