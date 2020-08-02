import {createStore, combineReducers} from 'redux';
import {profileReducer, dialogsReducer, sidebarReducer, usersReducer, musicReducer, authReducer} from './reducers';
const reducers = combineReducers({
	profile: profileReducer, 
	dialogs: dialogsReducer, 
	sidebar: sidebarReducer,
	users: usersReducer,
	music: musicReducer,
	auth: authReducer
});
const store = createStore(reducers);
window.store = store;
export default store;