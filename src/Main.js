import React, { Component } from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export class Main extends Component {

	// initialize our state 

	constructor(props) {
		super(props);

		this.state = {
		};

		//this.handleCopy = this.handleCopy.bind(this);
	}

	render() {
		var settings = {
			dots: true,
			infinite: true,
			speed: 1000,
			autoplaySpeed: 5000,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			fade:true,
			pauseOnHover: false,
			focusOnChange: true
		};
		return (
			<Slider {...settings} className='main-slider'>
				<div className='main main-img-1' id='main'>
				</div>
				<div className='main main-img-2' id='main'>
				</div>
				<div className='main main-img-3' id='main'>
				</div>
				<div className='main main-img-4' id='main'>
				</div>
			</Slider>
		);
	}
}


	
	// render() {
	// 	return (
	// 		<div className='main' id='main'>
	// 			<div className='statement'>
	// 			</div>
	// 		</div>
			
	// 	);
	// }