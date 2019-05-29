import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Button, Container, Col, Row} from 'reactstrap';


export class Footer extends Component {
	render() {
		return (
		<div className='footer'>
			<Container className='glimpses-header'>
				<Row>
					<Col>
						<div style={{backgroundColor:'blue', width:100, height:100}}></div>
					</Col>
					<Col>
							<p><strong>Hotels</strong></p>
							<p></p>
							<p></p>
							<p></p>
							<p><strong>Hotels</strong></p>
							<p></p>
							<p></p>
					</Col>
					<Col>
							<p><strong>Hotels</strong></p>
							<p></p>
							<p></p>
							<p></p>
							<p><strong>Hotels</strong></p>
							<p><strong>Hotels</strong></p>
							<p><strong>Hotels</strong></p>
					</Col>
					<Col>
						<div style={{float:'right'}}>
							<p><strong>Hotels</strong></p>
							<p><strong>Hotels</strong></p>
							<p><strong>Hotels</strong></p>
						</div>
						<div style={{float:'right'}}>						
							<p><strong>Hotels</strong></p>
							<p><strong>Hotels</strong></p>
							<p><strong>Hotels</strong></p>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
		);
	}
}