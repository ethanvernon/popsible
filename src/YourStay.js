import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Col, Row} from 'reactstrap';
import slide1 from './hotel-slide1-min.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

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
			infinite: true,
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
					<Col md="4" className='your-stay-description'>
						<div className='your-stay-container'>
							<h2 className='your-stay-header'>Your Stay</h2>
							<p className='your-stay-body'>Not just a room to wash off your tiredness, also a place to feed up the travellers curiosity.</p>
							<div className='your-stay-arrows-div'>
								<FontAwesomeIcon icon={ faArrowLeft } size='2x' transform="" color='#ff7d14' className='your-stay-arrow your-stay-left-arrow' />
								<FontAwesomeIcon icon={ faArrowRight } size='2x' transform="" color='#ff7d14' className='your-stay-arrow your-stay-right-arrow'/>
							</div>
						</div>
					</Col>

					<Col md="8" className='your-stay-carousel-col'>
						<div className='your-stay-carousel'>							
							<Slider {...settings} className='your-stay-slider'>
								<div className='your-stay-img your-stay-img-1' id='your-stay1'>
									<div className='your-stay-caption-div'>
										<p className='your-stay-caption'>
											<FontAwesomeIcon icon={ faMapMarkerAlt } size='1x' transform="left-5 shrink-3" color='' className=''/>
											Popway Hotel Hong Kong
										</p>
									</div>
								</div>
								<div className='your-stay-img your-stay-img-2' id='your-stay2'>
									<div className='your-stay-caption-div'>
										<p className='your-stay-caption'>
											<FontAwesomeIcon icon={ faMapMarkerAlt } size='1x' transform="left-5 shrink-3" color='' className=''/>
											Pop Hotel Dotonbori
										</p>
									</div>
								</div>
								<div className='your-stay-img your-stay-img-3' id='your-stay3'>
									<div className='your-stay-caption-div'>
										<p className='your-stay-caption'>
											<FontAwesomeIcon icon={ faMapMarkerAlt } size='1x' transform="left-5 shrink-3" color='' className=''/>
											Popway Residence Tennoji
										</p>
									</div>
								</div>
								<div className='your-stay-img your-stay-img-4' id='your-stay4'>
									<div className='your-stay-caption-div'>
										<p className='your-stay-caption'>
											<FontAwesomeIcon icon={ faMapMarkerAlt } size='1x' transform="left-5 shrink-3" color='' className=''/>
											Pop Hostel Shenzhen
										</p>
									</div>
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