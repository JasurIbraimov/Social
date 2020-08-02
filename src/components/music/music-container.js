import React, { Component } from 'react'
import {connect} from 'react-redux';
import Music from './music';
class MusicContainer extends Component {
	render() {
		return (
			<Music/>
		)
	}
}

export default connect()(MusicContainer);