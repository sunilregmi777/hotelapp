import React ,{useState} from 'react';
import { Container, Button , Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import './hotels.scss'
import hotel1 from '../../images/hotel1.jpg';
import hotel2 from '../../images/hotel2.jpg';
import hotel3 from '../../images/hotel3.jpg';
import hotel4 from '../../images/hotel4.jpg';
function Hotels(){
	return(
		<div className="hotels">
			<Container>
				<div className="hotels-wrapper">
					<Row>
						<Col lg={3}>
							<h1>Hotels &<br/> Rates</h1>
							<span>lorem ipsum doller</span>
						</Col>
						<Col lg={9}>
							<Row className="hotel-lists">
								<Col lg={6}>
				                  	<img src={hotel1} alt="hotel1"/>
				                  	<div className="price-tag">
				                  		<h2>Delux Room</h2>
				                  		<p>Rs 2500/pax</p>
				                  	</div>
				                    <div className="mask">
				                        <h2>Om Adhaya Retret</h2>
				                        <p>Thaha 9 Tisung</p>
				                        <a href="#" target="_blank" className="info">More Info</a> 
				                    </div>
								</Col>
								<Col lg={6}>
				                  	<img src={hotel2} alt="hotel2"/>
				                  	<div className="price-tag">
				                  		<h2>Single Room</h2>
				                  		<p>Rs 2000/pax</p>
				                  	</div>
				                    <div className="mask">
				                        <h2>Chitlang Mirmire Sallaghari Resort</h2>
				                        <p>Thaha 9 Chitlang</p>
				                        <a href="#" target="_blank" className="info">More info</a> 
				                    </div>
								</Col>
								<Col lg={6}>
				                  	<img src={hotel3} alt="hotel3"/>
				                  	<div className="price-tag">
				                  		<h2>Couple Room</h2>
				                  		<p>Rs 2000/pax</p>
				                  	</div>
				                    <div className="mask">
				                        <h2>Goat Cheese Homestay</h2>
				                        <p>Thaha 9 Chitlang</p>
				                        <a href="#" target="_blank" className="info">More info</a> 
				                    </div>
								</Col>
								<Col lg={6}>
				                  	<img src={hotel4} alt="hotel4"/>
				                  	<div className="price-tag">
				                  		<h2>Tented Room</h2>
				                  		<p>Rs 1500/pax</p>
				                  	</div>
				                    <div className="mask">
				                        <h2>Chitlang Resort Pvt ltd</h2>
				                        <p>Thaha 9 Chitlang</p>
				                        <a href="#" target="_blank" className="info">More info</a> 
				                    </div>
								</Col>
							</Row>
						</Col>
					</Row>
				</div>
			</Container>
		</div>
	);
}
export default Hotels;