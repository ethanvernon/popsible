import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Col, Row} from 'reactstrap';
import slide1 from './hotel-slide1.jpg';

export class Glimpses extends Component {
	constructor(props) {
		super(props);

		this.state = {
		};

		// this.toggle = this.toggle.bind(this);
	}


	render() {
	return (
		<div className='glimpses' style={{marginTop:300}}>
			<Container className='glimpses-header'>
				<Row>
					<Col>
						<h2>Glimpses of the Pops</h2>
						<p>Explore our hotel rooms, dining room, reception gym room and more...</p>
					</Col>
					<Col>
						<Button>Prev</Button>
						<Button>Next</Button>
						<div>3 of 10</div>
					</Col>
				</Row>
			</Container>
			<div className="glimpses-slide">
				<div class="current-slide"></div>
			</div>
		</div>
    );
  }
}