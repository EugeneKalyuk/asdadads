import { combineReducers } from 'redux';

import tracks from './tracks';
import playLists from './playlists';

export default combineReducers({
	tracks,
	playLists
})