import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Col, Row} from 'reactstrap';
import slide1 from './hotel-slide1.jpg';

export class YourStay extends Component {
	constructor(props) {
		super(props);

		this.state = {
		};

		// this.toggle = this.toggle.bind(this);
	}


	render() {
	return (
		<div className='slideshow'>
			<Container className='description'>
				<Row>
					<Col xs="4">
						<h2>Your Stay</h2>
						<p>Not just a room to wash off your tiredness, also a place to feed up the travellers curiosity.</p>
						<Button>prev</Button>
						<Button>next</Button>
					</Col>

					<Col xs="8">
						<img style={{height:300}}src={slide1}/>
					</Col>
				</Row>
			</Container>
		</div>
    );
  }
}