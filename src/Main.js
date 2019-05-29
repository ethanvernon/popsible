import React, { Component } from 'react';
import './App.css';

export class Main extends Component {

	// initialize our state 

	constructor(props) {
		super(props);

		this.state = {
		};

		//this.handleCopy = this.handleCopy.bind(this);
	}
	
	render() {
		return (
			<div className='main' id='main'>
				<div className='statement'>
				</div>
			</div>
		);
	}
}