import { combineReducers } from 'redux';

import tracks from './tracks';
import playLists from './playlists';
import findTracks from './filterTracks';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
	routing: routerReducer,
	tracks,
	playLists,
	findTracks
})