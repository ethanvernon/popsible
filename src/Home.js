import React, { Component } from 'react';
import './App.css';
import {Header} from './Header';
import {YourStay} from './YourStay';
import {Happenings} from './Happenings';
import {Glimpses} from './Glimpses';
import {AboutUs} from './AboutUs';
import {Footer} from './Footer';
import {Bottom} from './Bottom';
import {Main} from './Main';

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

			<Main/>

			<YourStay/>

			<Happenings/>

			<Glimpses/>

			<AboutUs/>

			<Footer/>

			<Bottom/>	

			{
				//<img style={{marginTop:500}} src={mockup}/>
			}
		</div>
		);
	}
}