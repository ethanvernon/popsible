import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import textLogo from './mern-text-logo.png';
import {Button, Container, Col, Row, Table} from 'reactstrap';


export class Footer extends Component {
	render() {
		return (
		<div className='footer'>
			<Container className='footer-container'>
				<Row noGutters className='footer-row'>
					<Col md="3">
						<img style={{width:150}} src={textLogo}/>
					</Col>
					<Col md="2">
							<p><strong>HOTELS</strong></p>
							<p>Popway Hotel Hong Kong</p>
							<p>Popway Hotel Dotobori</p>
							<p>Popway Residence Tennoji</p>
							<p><strong>OUR BRAND</strong></p>
							<p>About Us</p>
							<p>CSR</p>
					</Col>
					<Col md="2">
							<p><strong>OUR HOTEL BRAND</strong></p>
							<p>Popway Hotel</p>
							<p>Pop Hotel</p>
							<p>Popway Residence</p>
							<p><strong>HAPPENINGS</strong></p>
							<p><strong>RESERVATION</strong></p>
							<p><strong>CONTACT</strong></p>
					</Col>
					<Col md={{ size: 4, offset: 1 }}>
						<Table borderless responsive>
							<tbody>
								<tr>
									<th scope="row">INQUIRIES</th>
									<td>Possible Hospitality Management</td>
								</tr>
								<tr>
									<th scope="row">TEL</th>
									<td>+852 2300 1000</td>
								</tr>
								<tr>
									<th scope="row">OPEN</th>
									<td>09:00 a.m. - 6:00 p.m. HKT<br/>(Close on Sunday and public holidays)</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
			</Container>
		</div>
		);
	}
}