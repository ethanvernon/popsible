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
			navClass: 'invis-nav',
			containerClass: 'invis-container'
		};

		this.toggle = this.toggle.bind(this);
		this.closeNav = this.closeNav.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('scroll', this.handleScroll);
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount(){
		window.removeEventListener('scroll', this.handleScroll);
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	closeNav() {
		if (this.state.isOpen == true) {
			this.toggle();
		}
	}

	handleScroll(e) {
		let scroll=parseInt(e.target.scrollingElement.scrollTop);
		let newClass=this.state.navClass;
		let newContainerClass=this.state.containerClass;

		console.log(scroll);
		console.log(this.state.height);

		if (scroll > this.state.height-100) {
			newClass='solid-nav';
			newContainerClass='solid-container';
		} else {
			newClass='invis-nav';
			newContainerClass='invis-container';
		}

		this.setState({
			navClass: newClass,
			containerClass: newContainerClass
		});
	}


	render() {
	return (
		<div className={'navbar-container '+ this.state.containerClass} onScroll={e => this.handleScroll(e)}>
			<Navbar className={this.state.navClass} >
				<NavbarBrand href="/" className="mr-auto"><img src={textLogo}/></NavbarBrand>
				<Nav navbar className='ml-auto book-now'>
				<NavItem>
					book now
				</NavItem>
				</Nav>
				<NavbarToggler onClick={this.toggle} className='mr-2'/>
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav navbar className='ml-auto'>
						<NavItem>
							About
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
    );
  }
}