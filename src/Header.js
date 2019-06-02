import React, { Component } from 'react';
import textLogo from './anthead-logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Collapse,
  NavbarToggler} from 'reactstrap';
import { Controller, Scene } from 'react-scrollmagic';

export class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
			width: 0,
			height: 0,
			scroll: 0,
			navClass: 'invis-nav',
			containerClass: 'invis-container',
			showNav: false,
			darkFontOnly: false
		};

		this.toggle = this.toggle.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}


	//on load, create event listeners for our scroll position and screen width
	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('scroll', this.handleScroll);
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	//remove event listeners in the case our component unmounts
	componentWillUnmount(){
		window.removeEventListener('scroll', this.handleScroll);
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	//if anything resizes, update our width and height to reflect the changed window dimensions
	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	//called whenever the hamburger icon is clicked
	toggle() {
		let newClass;
		let newContainerClass;
		let darkFonts;

		//if we're closing nav and we're past the top of page
		if (this.state.scroll > this.state.height-100 && this.state.showNav) {
			//make sure fonts are dark
			darkFonts=true;
		}

		//if we're closing nav and we're not past top of page
		if (this.state.scroll < this.state.height-100 && this.state.showNav) {
			//make nav invisible and reset font colors to light
			newClass='invis-nav';
			newContainerClass='invis-container';
			this.setState({
				navClass: newClass,
				containerClass: newContainerClass
			});
			darkFonts=false;
		}

		//if we're opening the nav
		if (!this.state.showNav) {
			//make the fonts dark
			darkFonts=true		
		}

		this.setState({
			isOpen: !this.state.isOpen,
			showNav: !this.state.showNav,
			darkFontOnly: darkFonts
		});
	}

	//called whenever the user scrolls up or down the page
	handleScroll(e) {
		let scroll=parseInt(e.target.scrollingElement.scrollTop);
		let newClass=this.state.navClass;
		let newContainerClass=this.state.containerClass;

		//console.log(scroll);
		//console.log(this.state.height);

		//we're past the top, make the nav solid
		if (scroll > this.state.height-100) {
			newClass='solid-nav';
			newContainerClass='solid-container';
		}
		//we're at the top, make the nav transparent
		else if (scroll < this.state.height-100) {
			newClass='invis-nav';
			newContainerClass='invis-container';
		}

		this.setState({
			navClass: newClass,
			containerClass: newContainerClass,
			scroll: scroll
		});

		//console.log(this.state.scroll);
	}


	render() {		

		let showNav='';
		let darkFont='';

		//if the nav is supposed to be showing, we need to have dark fonts and open the nav
		if (this.state.showNav) {
			showNav='show';
			darkFont='dark-nav-items';
		}

		return (

			<div className={'navbar-container '+ this.state.containerClass} onScroll={e => this.handleScroll(e)}>
				<Navbar className={this.state.navClass} >
					<NavbarBrand href="/" className="mr-auto"><img src={textLogo}/></NavbarBrand>
					<Nav navbar className={'ml-auto book-now '+darkFont}>
					<NavItem>
						book now
					</NavItem>
					</Nav>
					<div onClick={this.toggle} className={'navbar-toggler-icon '+darkFont} >
					</div>
				</Navbar>



						<div className={'collapse-menu-container '+showNav}>
							<ul className='collapse-list'>
								<li className='collapse-list-item'>Navlink</li>
								<li className='collapse-list-item'>Navlink</li>
								<li className='collapse-list-item'>Navlink</li>
							</ul>
						</div>
			</div>
		);
	}
}
/*

				<NavbarToggler onClick={this.toggle} className='mr-2'/>
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav navbar horizontal='right' className='ml-auto'>
						<NavItem>
							About
						</NavItem>
					</Nav>
				</Collapse>*/