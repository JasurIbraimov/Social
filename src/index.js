import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import store from './components/redux/redux-store';
import {Provider} from 'react-redux';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
,document.getElementById('root'));	

