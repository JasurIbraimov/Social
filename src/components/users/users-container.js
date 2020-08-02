import React, { Component } from 'react'
import {connect} from 'react-redux';
import {followUser, unfollowUser, setUsers, setTotalCount, setCurrentPage, setIsLoading, setFollowingInProcess} from '../redux/action-creators/users-action-creators';
import Users from './users';
import UsersService from '../services/users-api';
class UsersContainer extends Component {
	service = new UsersService();
	componentDidMount() {
		this.props.setIsLoading(true);
		const {currentPage, pageSize} = this.props;
		this.service.getUsers(currentPage, pageSize)
		.then(data => {
			this.props.setUsers(data.items);
			this.props.setIsLoading(false);
			this.props.setTotalCount(data.totalCount);
		});
	}
	setPage = (currentPage) => {
		this.props.setIsLoading(true);
		const {pageSize} = this.props;
		this.service.getUsers(currentPage, pageSize)
		.then(data => {
			this.props.setUsers(data.items);
			this.props.setCurrentPage(currentPage);
			this.props.setIsLoading(false);
		});
	}
	render() {
		const {usersData, followUser, unfollowUser, totalCount, pageSize, currentPage, isLoading, followingInProcess, setFollowingInProcess} = this.props;
		return	<Users usersData={usersData}
			followUser={followUser}
			unfollowUser={unfollowUser}
			totalCount={totalCount}
			pageSize={pageSize}
			followUserS={this.followUsersService}
			unfollowUserS={this.unfollowUsersService}
			currentPage={currentPage}
			setPage={this.setPage}
			followingInProcess={followingInProcess}
			setFollowingInProcess={setFollowingInProcess}
			isLoading={isLoading}/>;
	}
}

const mapStateToProps = (state) => {
	const {users} = state;
	return {
		usersData: users.usersData,
		currentPage: users.currentPage,
		totalCount: users.totalCount,
		pageSize: users.pageSize,
		isLoading: users.isLoading,
		followingInProcess: users.followingInProcess
	}
}

export default connect(mapStateToProps, {
	followUser,
	unfollowUser,
	setUsers,
	setTotalCount,
	setCurrentPage,
	setIsLoading,
	setFollowingInProcess
})(UsersContainer);