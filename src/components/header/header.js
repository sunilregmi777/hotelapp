import { Container } from 'react-bootstrap';
import {  BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faMapMarkerAlt, faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.png';

function Header(){
	return(
		<Router>
			<header>
				<div className="top-header">
					<Container>
						<div className="top-header-wrapper">	
							<div className="header-left">
								<span><FontAwesomeIcon icon={faMapMarkerAlt} /> Chitlang, Makwanpur</span>
								<span><FontAwesomeIcon icon={faPhoneAlt} />+977 9813999347</span>
							</div>
							<div className="header-right">
								<ul className="top-menu">
									<li><a href="#">About</a></li>
									<li><a href="#">Blog</a></li>
									<li><a href="#">Faq</a></li>
									<li><a href="#">Contact</a></li>
									<li><Link to={"/registration"}>Login/Register</Link></li>
								</ul>
							</div>
						</div>
					</Container>
				</div>
				<div className="main-header">
					<Container>
						<div className="main-header-wrapper">
							<div className="logo">
								<Link to="/"><img src={logo} alt="logo"/></Link>
							</div>
							<nav>
								<ul>
									<li><Link to="/">Home</Link></li>
									<li><a href="#">Rooms</a></li>
									<li><a href="#">Pages</a></li>
									<li><a href="#">Galleries</a></li>
									<li><a href="#">Places</a></li>
								</ul>
							</nav>
						</div>
					</Container>
				</div>
			</header>
		</Router>
	);
}
export default Header;