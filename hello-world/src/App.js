import React, { Component } from 'react';
import {connect} from 'react-redux';
import {asyncGetTracks} from './actions/tracks';
import Menu from './menu';
import './App.css';
import {Link} from 'react-router';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            addTrack: '',
	        search: ''
        }
    }
    addTrack(){
        this.props.onAddTrack(this.state.addTrack);
	    this.setState({
            addTrack: ''
        })
    }
    findTrack(){
	    this.props.onFindTrack(this.state.search);
	    this.setState({
		    search: ''
	    })
    }
	handleAddTrack(e){
        this.setState({
            addTrack: e.target.value
        })
    }
	handleFindTrack(e){
		this.setState({
			search: e.target.value
		})
	}
  render() {
	  console.log(this.props.ownProps);
	  return (
        <div>
	        <Menu/>
	        <div>
	            <input type="text" onChange={this.handleAddTrack.bind(this)} value={this.state.addTrack}/>
	            <button onClick={this.addTrack.bind(this)}>Add track</button>
	        </div>
	        <div>
		        <input type="text" onChange={this.handleFindTrack.bind(this)} value={this.state.search}/>
		        <button onClick={this.findTrack.bind(this)}>Find track</button>
	        </div>
	        <div>
		        <button onClick={this.props.onGetTracks}>Get Tracks</button>
	        </div>
	        <ul>
                {this.props.tracks.map((track, index) =>
	                <li key={index}>
		                <Link to={`/tracks/${track.id}`}>{track.name}</Link>
	                </li>
                )}
            </ul>
        </div>
    );
  }
}

function mapStateToProps(state, ownProps){
    return({
		    tracks: state.tracks.filter(track => track.name.includes(state.findTracks)),
	        ownProps
    })
}

function mapDispatchToProps(dispatch) {
    return({
	    onAddTrack: (name) => {
	        const payload = {
	            id: Date.now().toString(),
		        name
            };
		    dispatch({type: 'ADD_TRACK', payload})
	    },
	    onFindTrack: (name) => {
	    	dispatch({type: 'FIND_TRACK', payload: name})
	    },
	    onGetTracks: () =>{

	    	dispatch(asyncGetTracks())
	    }

    })
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
