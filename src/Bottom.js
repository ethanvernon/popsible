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
			<Container className='bottom-container' style={{fontSize:12, height:36, marginTop:12}}>
				<Row>
					<Col sm='3'>
						<p>EN / Chinese / Chinese</p>
					</Col>
					<Col sm={{ size: 2, order: 1, offset: 6 }}>
						<p>Privacy policy</p>
					</Col>
					<Col sm={{ size: 1, order: 2 }}>
						<p>Copyright</p>
					</Col>					
				</Row>
			</Container>
		</div>
		);
  }
}