import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Col, Row} from 'reactstrap';
import slide1 from './hotel-slide1.jpg';

export class Bottom extends Component {
	constructor(props) {
		super(props);

		this.state = {
		};

		// this.toggle = this.toggle.bind(this);
	}


	render() {
	return (
		
		<div className='bottom'>
			<Container className='glimpses-header'>
				<Row>
					<Col>
						<p>EN / Chinese / Chinese</p>
					</Col>
					<Col>
						<p>Privacy policy</p>
					</Col>
					<Col>
						<p>Copyright</p>
					</Col>					
				</Row>
			</Container>
		</div>
		);
  }
}