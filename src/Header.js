import React, { Component } from 'react';
import './App.css';
import textLogo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Collapse,
  NavbarToggler} from 'reactstrap';

export class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
		isOpen: false
		};

		this.toggle = this.toggle.bind(this);
		this.closeNav = this.closeNav.bind(this);
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


	render() {
	return (
		<div className='navbar-container'>
			<Navbar id='white-nav' color='light' light>
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