import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Col, Row} from 'reactstrap';
import slide1 from './hotel-slide1.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export class YourStay extends Component {
	constructor(props) {
		super(props);

		this.state = {
		};

		// this.toggle = this.toggle.bind(this);
	}


	render() {

		var settings = {
			dots: false,
			infinite: false,
			speed: 500,
			slidesToShow: 2.5,
			slidesToScroll: 1,
			autoplay: false,
			fade:false,
			pauseOnHover: false, 
			responsive: [
				{
				breakpoint: 767,
				settings: {
					slidesToShow: 1.25,
					slidesToScroll: 1
					}
				}]
		};

	return (
		<div className='your-stay'>
			<Container className='your-stay-container'>
				<Row>
					<Col md="5" className='your-stay-description'>
					<div className='your-stay-container'>
						<h2 className='your-stay-header'>Your Stay</h2>
						<p>Not just a room to wash off your tiredness, also a place to feed up the travellers curiosity.</p>
						<Button>prev</Button>
						<Button>next</Button>
						</div>
					</Col>

					<Col md="7" className='your-stay-carousel-col'>
						<div className='your-stay-carousel'>							
							<Slider {...settings} className='your-stay-slider'>
								<div className='your-stay-img your-stay-img-1' id='your-stay1'>
								</div>
								<div className='your-stay-img your-stay-img-2' id='your-stay2'>
								</div>
								<div className='your-stay-img your-stay-img-3' id='your-stay3'>
								</div>
								<div className='your-stay-img your-stay-img-4' id='your-stay4'>
								</div>
							</Slider>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
    );
  }
}