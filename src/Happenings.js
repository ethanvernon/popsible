import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Col, Row} from 'reactstrap';
import slide1 from './hotel-slide1.jpg';

export class Happenings extends Component {
	constructor(props) {
		super(props);

		this.state = {
		};

		// this.toggle = this.toggle.bind(this);
	}


	render() {
	return (
		<div className='happenings'>

			<div className='happenings-description'>
				<h2>Happenings</h2>
				<p>Whether you are a local or new to the neighborhood, join the crowd and enjoy the vibe of these upcoming events.</p>
			</div>

			<Container className='happenings-grid'>
				<Row noGutters className='happenings-row'>
					<Col lg='6' className='left-col'>
						<div class="big big-box"></div>
						<div class="small-box"></div>
						<div class="small-box"></div>
					</Col>

					<Col lg='6' className='right-col'>
						<div class="small-box"></div>
						<div class="small-box"></div>
						<div class="small-box"></div>
						<div class="small-box"></div>
						<div class="small-box"></div>
						<div class="small-box"></div>
					</Col>
				</Row>
			</Container>
		</div>
    );
  }
}