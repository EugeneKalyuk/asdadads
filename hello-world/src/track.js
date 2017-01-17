import React, {Component} from 'react';
import {connect} from 'react-redux';

class Track extends Component {
	render(){
		return(
			<div>{this.props.track.name}</div>
		)
	}
}

function mapStateToProps(state, ownProps) {
	console.log(ownProps);
	return {
		track: state.tracks.find(track => track.id === Number(ownProps.params.id))
	}
}

export default connect(
	mapStateToProps
)(Track)