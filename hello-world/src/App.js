import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            addTrack: ''
        }
    }
    addTrack(){
        this.props.onAddTrack(this.state.addTrack);
        this.setState({
            addTrack: ''
        })
    }
	handleAddTrack(e){
        this.setState({
            addTrack: e.target.value
        })
    }
  render() {
	  console.log(this.props.tracks);
	  return (
        <div>
            <input type="text" onChange={this.handleAddTrack.bind(this)} value={this.state.addTrack}/>
            <button onClick={this.addTrack.bind(this)}>Add track</button>
            <ul>
                {this.props.tracks.map((track, index) =>
                    <li key={index}>{track}</li>
                )}
            </ul>
        </div>
    );
  }
}

function mapStateToProps(state){
    return({
		    tracks: state.tracks
    })
}

function mapDispatchToProps(dispatch) {
    return({
	    onAddTrack: (name) => {
	        const payload = {
	            id: Date.now().toString(),
		        name
            };
		    dispatch({type: 'ADD_TRACK', payload: trackName})
	    }
    })
}
// mapdispatchtoprops
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
