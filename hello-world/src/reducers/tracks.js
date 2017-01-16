const initionState = [];

export  default  function tracks(state = initionState, action) {
	switch (action.type){
		case 'ADD_TRACK':
			return [
				...state.tracks,
				action.payload
			];
		case 'DELETE_TRACK':
			return state;
		default: return state;
	}
}