const initionState = [
		'My home playlist',
		'My work playlist'
]

export default  function playLists(state = initionState, action) {
	switch (action.type){
		case 'ADD_TRACK':
			return {
				...state,
				tracks: [
					...state.tracks,
					action.payload
				]
			};
		case 'DELETE_TRACK':
			return state;
		case 'ADD_PLAYLIST':
			return state;
		case 'DELETE PLAYLIST':
			return state;
		default: return state;
	}
}