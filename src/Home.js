import React, { Component } from 'react';
import './App.css';
import {Header} from './Header';
import {YourStay} from './YourStay';
import {Happenings} from './Happenings';
import {Glimpses} from './Glimpses';
import mockup from './mockup.jpg';

export class Home extends Component {

	// initialize our state 

	constructor(props) {
		super(props);

		this.state = {
			data: [],
			shortenedUrl: null,
			popoverOpen: false,
			popoverHidden: false,
			linksPowered: 0,
			intervalIsSet: false,
			userInput: null
		};

		//this.handleCopy = this.handleCopy.bind(this);
	}
	
	render() {
		return (
			<div className='home'>

			<Header/>

			<div className='main' id='main'>
				<div className='statement'>
				</div>
			</div>

			<YourStay/>

			<Happenings/>

			<Glimpses/>

			<img src={mockup}/>
			
		</div>
		);
	}
}