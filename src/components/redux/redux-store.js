import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {
	profileReducer,
	dialogsReducer,
	sidebarReducer,
	usersReducer,
	authReducer,
	appReducer,
} from './reducers';
const reducers = combineReducers({
	profile: profileReducer,
	dialogs: dialogsReducer,
	sidebar: sidebarReducer,
	users: usersReducer,
	auth: authReducer,
	app: appReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunkMiddleware))
);
export default store;
window.store = store;
