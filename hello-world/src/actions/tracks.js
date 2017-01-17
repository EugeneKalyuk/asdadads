let mockApiData =[
	{
		id: 1,
		name: 'Enter sandman'
	},
	{
		id: 2,
		name: 'Enter sandmandsa'
	},
	{
		id: 3,
		name: 'Enter sandmanasd'
	},
	{
		id: 4,
		name: 'Enterasd sandmanasd'
	},
	{
		id: 5,
		name: 'Enterasd asdsandmanasd'
	}
]

export const asyncGetTracks = ()=> dispatch => {
	setTimeout(()=>{
		console.log('i got tracks');
		dispatch({type: 'FETCH_TRACKS_SUCCESS', payload: mockApiData})
	}, 2000)
};