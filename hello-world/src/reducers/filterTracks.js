const initialState = [];

export default  function findTracks(state = initialState, action) {
	switch (action.type){
		case 'FIND_TRACK':
			return action.payload;
		default: return state;
	}
}