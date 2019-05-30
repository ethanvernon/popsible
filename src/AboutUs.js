import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Col, Row} from 'reactstrap';
import slide1 from './hotel-slide1.jpg';

export class AboutUs extends Component {
	constructor(props) {
		super(props);

		this.state = {
		};

		// this.toggle = this.toggle.bind(this);
	}


	render() {
	return (
		<div>

			<Container className='about-us-container'>
				<Row>
					<Col md='7'>						
						<div class="about-us-img-div"></div>
					</Col>
					<Col md='5' className='about-us-right'>
						<h2>About Us</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula faucibus velit sit amet ullamcorper. Sed interdum quam vitae odio interdum feugiat.</p>
						<Button>Know More</Button>
					</Col>
				</Row>
			</Container>


			<div className='about-us'>
			</div>

		</div>
    );
  }
}