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
		<div className='happenings' style={{marginTop:150}}>

			<div className='happenings-description'>
				<h2>Happenings</h2>
				<p>Whether you are a local or new to the neighborhood, join the crowd and enjoy the vibe of these upcoming events.</p>
			</div>

			<ul className="grid">
				<li className="wide high background-img top-left">
					<div className='big-image space'>
						<div className='big-image-caption'>
							<p className='big-image-top'>Fusion Asian Cuisine</p>
							<p className='big-image-bottom'>April 2019</p>
						</div>
					</div>
				</li>
				<li className="background-img grid-1">
					<div className='space'/>
				</li>
				<li className="background-img grid-2">
					<div className='space'>
						<h3>Art Central</h3>
						<p>18 - 22.09.2019</p>
					</div>
				</li>
				<li className="background-img grid-3">
					<div className='space'>
						<h3>Live Gigs</h3>
						<p>Every Friday, Saturday</p>
					</div>
				</li>
				<li className="background-img grid-4">
					<div className='space'/>
				</li>
				<li className="background-img grid-5">
					<div className='space'/>
				</li>
				<li className="background-img grid-6">
					<div className='space'>
						<h3>Drown into the heatwave</h3>
						<p>July - August</p>
					</div>
				</li>
				<li className="background-img grid-7">
					<div className='space'/>
				</li>
				<li className="background-img grid-8">
					<div className='space'>
						<h3>Coffee Tasting</h3>
						<p>18 - 22.03.2019</p>
					</div>
				</li>
			</ul>

		</div>
    );
  }
}

/*
			<Container className='happenings-grid'>
				<Row noGutters className='happenings-row'>
					<Col md='6' className='left-col'>
						<div className="big big-box"></div>
						<div className="small-box"></div>
						<div className="small-box"></div>
					</Col>

					<Col md='6' className='right-col'>
						<div className="small-box"></div>
						<div className="small-box"></div>
						<div className="small-box"></div>
						<div className="small-box"></div>
						<div className="small-box"></div>
						<div className="small-box"></div>
					</Col>
				</Row>
			</Container>
			*/