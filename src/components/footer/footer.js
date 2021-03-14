import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare} from '@fortawesome/free-brands-svg-icons';
import logo from '../../images/logo.png';

function Footer(){
	return(
		<footer>
			<div className="top-footer">
				<Container>
					<div className="footer-wrapper">
						<div className="footer-logo">
							<img src={logo} alt="logo"/>
						</div>
						<div className="footer-contact">
							<h1>Contact Us</h1>
							<p><FontAwesomeIcon icon={ faMapMarkerAlt } /> Chitlang, Makwanpur</p>
							<p><FontAwesomeIcon icon={ faPhoneAlt } /> 9813999347</p>
							<p><FontAwesomeIcon icon={ faEnvelopeOpen } />info@bookingchitlang.com</p>
						</div>
						<div className="footer-links">
							<h1>Page site</h1>
							<ul>
								<li><a href="#">Guest Book</a></li>
								<li><a href="#">Gallery</a></li>
								<li><a href="#">Places</a></li>
								<li><a href="#">Restaurant</a></li>
							</ul>
						</div>
						<div className="social-link">
							<h1>Follow us</h1>
							<a href="#"><FontAwesomeIcon icon={faFacebookSquare} /> Facebook</a>
							<a href="#"><FontAwesomeIcon icon={faTwitterSquare} /> Twitter</a>
							<a href="#"><FontAwesomeIcon icon={faInstagramSquare} /> Instagram</a>
						</div>
					</div>
				</Container>
			</div>
			<div className="bottom-footer">
				<Container>
					<p>&copy; 2021 bookingchitlang.com</p>
				</Container>
			</div>
		</footer>
	);
}
export default Footer;