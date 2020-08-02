import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeaderContainer from '../header';
import Aside from '../aside/';
import Profile from '../profile';
import Dialogs from '../dialogs';
import Settings from '../settings';
import WelcomePage from '../welcome-page';
import UsersContainer from '../users';
import News from '../news';
import MusicContainer from '../music';
import Friends from '../friends';
import './app.scss';
const App = () => {
	return (
		<div className='app-wrapper'>
			<Router>
				<HeaderContainer/>
				<Aside/>
				<Switch>
					<Route path='/profile/:userId?'>
						<Profile/>
					</Route>
					<Route path='/dialogs'>
						<Dialogs/>
					</Route>
					<Route path='/news'>
						<News/>
					</Route>
					<Route path='/friends'>
						<Friends/>
					</Route>
					<Route path='/music'>
						<MusicContainer/>
					</Route>
					<Route path='/users'>
						<UsersContainer/>
					</Route>
					<Route path='/settings'>
						<Settings/>
					</Route>
					<Route path='/'>
						<WelcomePage/>
					</Route>
				</Switch>
			</Router>
		</div>
	)
}

export default App;