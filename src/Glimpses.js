import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Col, Row} from 'reactstrap';
import slide1 from './hotel-slide1.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export class Glimpses extends Component {
	constructor(props) {
		super(props);

		this.state = {
		};

		// this.toggle = this.toggle.bind(this);
	}


	render() {

		var settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: false,
			fade:false,
			pauseOnHover: false, 
			className: "center",
			centerMode: true,
			responsive: [
				{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
					}
				}]
		};

		return (		
			<div className='glimpses' style={{marginTop:300, marginBottom:300}}>
				<Container className='glimpses-container'>
					<Row className='glimpses-row'>
						<Col md="8">
							<h2 className='glimpses-heading'>Glimpses of the Pops</h2>
							<p>Explore our hotel rooms, dining room, reception gym room and more...</p>
						</Col>
						<Col md="4" className='glimpses-toggle'>
							<Button>Prev</Button>
							<Button>Next</Button>
							<div className='glimpes-tab-number'>3 of 10</div>
						</Col>
					</Row>
				</Container>
				
				<Slider {...settings} className='glimpses-slider'>
					<div>
						<div className='glimpses-img glimpses-img-1'/>
					</div>
					<div>
						<div className='glimpses-img glimpses-img-2'/>
					</div>
					<div>
						<div className='glimpses-img glimpses-img-3'/>
					</div>
					<div>
						<div className='glimpses-img glimpses-img-4'/>
					</div>
				</Slider>
			</div>
	    );
  }
}