import React, { Component, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withSuspense } from '../hoc/withSuspense';
import HeaderContainer from '../header';
import Aside from '../aside/';
import Profile from '../profile';
import Dialogs from '../dialogs';
import Login from '../login';
import WelcomePage from '../welcome-page';
import UsersContainer from '../users';
import Friends from '../friends';
import './app.scss';
const MusicContainer = lazy(() => import('../music'));
const Settings = lazy(() => import('../settings'));
const News = lazy(() => import('../news'));
class App extends Component {
	render() {
		return (
			<div className='app-wrapper'>
				<Router>
					<HeaderContainer />
					<Aside isAuth={this.props.isAuth} />
					<Switch>
						<Route path='/profile/:userId?'>
							<Profile />
						</Route>
						<Route path='/dialogs'>
							<Dialogs />
						</Route>
						<Route path='/news'>{withSuspense(News)}</Route>
						<Route path='/friends'>
							<Friends />
						</Route>
						<Route path='/music'>{withSuspense(MusicContainer)}</Route>
						<Route path='/users'>
							<UsersContainer />
						</Route>
						<Route path='/settings'>{withSuspense(Settings)}</Route>
						<Route path='/login'>
							<Login />
						</Route>
						<Route path='/'>
							<WelcomePage />
						</Route>
					</Switch>
				</Router>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
	};
};
export default connect(mapStateToProps)(App);
