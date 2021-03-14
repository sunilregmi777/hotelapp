import React from 'react';
import Slider from "react-slick";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './testimonials.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faSnowflake} from '@fortawesome/free-solid-svg-icons';

import testimonials1 from '../../images/testimonials1.jpg';
import testimonials2 from '../../images/testimonials2.jpg';
import testimonials3 from '../../images/testimonials3.jpg';

function Testimonials(){
	var settings = {
	    dots: true,
	    infinite: true,
	    speed: 500,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows:false,
	    speed: 500,
	    autoplay: true,
	    pauseOnHover:true
	};
	return(
		<div className="testimonials">
			<div className="overlay"></div>
			<Container>
				<Slider {...settings}>
					<div className="testimonials-slider">
						<img src={testimonials1} alt="testimonial-img" />
						<div className="content">
							<p>Donec nec enim turpis. Quisque consequat ipsum libero, et rhoncus augue condimentum a. Integer blandit libero in est interdum vestibulum. In dictum posuere pharetra</p> 
							<span><strong>Sunil Regmi</strong>Kathmandu</span>
						</div>
					</div>
					<div className="testimonials-slider">
						<img src={testimonials2}  alt="testimonial-img" />
						<div className="content">
							<p>Donec nec enim turpis. Quisque consequat ipsum libero, et rhoncus augue condimentum a. Integer blandit libero in est interdum vestibulum. In dictum posuere pharetra</p> 
							<span><strong>Sunil Regmi</strong>Kathmandu</span>
						</div>
					</div>
					<div className="testimonials-slider">
						<img src={testimonials3}  alt="testimonial-img" />
						<div className="content">
							<p>Donec nec enim turpis. Quisque consequat ipsum libero, et rhoncus augue condimentum a. Integer blandit libero in est interdum vestibulum. In dictum posuere pharetra</p> 
							<span><strong>Sunil Regmi</strong>Kathmandu</span>
						</div>
					</div>
				</Slider>
			</Container>
		</div>
	);
}
export default Testimonials;