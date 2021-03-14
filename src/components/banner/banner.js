import React from 'react';
import Slider from "react-slick";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './banner.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faSnowflake} from '@fortawesome/free-solid-svg-icons';

import bannerslide1 from '../../images/bannerslide1.jpg';
import bannerslide2 from '../../images/bannerslide2.jpg';
import bannerslide3 from '../../images/bannerslide3.jpg';
import bannerslide4 from '../../images/bannerslide4.jpg';

function Banner(){
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
		<div className="banner">
			<Slider {...settings}>
				<div className="slider-wrapper">
					<img src={bannerslide1} alt="slide1"/>
					<div className="overlay"></div>
					<div className="slider-content">
						<FontAwesomeIcon icon={faCrown} />
						<h1>Om Adhaya Retret</h1>
						<span>Tistung</span>
						<FontAwesomeIcon icon={faSnowflake} />
					</div>	
				</div>
				<div className="slider-wrapper">
					<img src={bannerslide2} alt="slide1"/>
					<div className="overlay"></div>
					<div className="slider-content">
						<FontAwesomeIcon icon={faCrown} />
						<h1>Om Adhaya Retret</h1>
						<span>Tistung</span>
						<FontAwesomeIcon icon={faSnowflake} />
					</div>		
				</div>
				<div className="slider-wrapper">
					<img src={bannerslide3} alt="slide1"/>
					<div className="overlay"></div>
					<div className="slider-content">
						<FontAwesomeIcon icon={faCrown} />
						<h1>Om Adhaya Retret</h1>
						<span>Tistung</span>
						<FontAwesomeIcon icon={faSnowflake} />
					</div>		
				</div>
				<div className="slider-wrapper">
					<img src={bannerslide4} alt="slide1"/>
					<div className="overlay"></div>
					<div className="slider-content">
						<FontAwesomeIcon icon={faCrown} />
						<h1>Om Adhaya Retret</h1>
						<span>Tistung</span>
						<FontAwesomeIcon icon={faSnowflake} />
					</div>		
				</div>
			</Slider>
		</div>
	);
}
export default Banner;