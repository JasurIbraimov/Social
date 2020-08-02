import {SET_MUSIC_DATA} from '../action-types/music-action-types';
const initialState = {
	musicData: []
};

const musicReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_MUSIC_DATA: 
			return {
				...state, 
				musicData: [...action.musicData]
			}
		default:
			return state;
	}
};

export default musicReducer;