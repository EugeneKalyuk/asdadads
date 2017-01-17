const initionState = [
		'My home playlist',
		'My work playlist'
]

export default  function playLists(state = initionState, action) {
	switch (action.type){
		case 'ADD_PLAYLIST':
			return [
				...state,
				action.payload
			];
		case 'DELETE PLAYLIST':
			return state;
		default: return state;
	}
}