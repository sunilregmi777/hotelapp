import {useState} from 'react';
import { Container } from 'react-bootstrap';
import {  BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faMapMarkerAlt, faPhoneAlt, faBars} from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.png';
import MediaQuery from 'react-responsive';
import classNames from 'classnames';

function Header(){
	const[showMenu, setShowMenu] = useState(false);
	return(
			<header>
				<div className="top-header">
					<Container>
						<div className="top-header-wrapper">
							<MediaQuery minWidth={767}>
						      	{(matches) =>
						      		 matches ?	
										<div className="header-left">
											<span><FontAwesomeIcon icon={faMapMarkerAlt} /> Chitlang, Makwanpur</span>
											<span><FontAwesomeIcon icon={faPhoneAlt} />+977 9813999347</span>
										</div>:null
									
								}
							</MediaQuery>
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
							<MediaQuery minWidth={767}>
						      {(matches) =>
						      	{
						      		if(matches){
						      			return (
							      			<nav>
												<ul>
													<li><Link to="/">Home</Link></li>
													<li><a href="#">Rooms</a></li>
													<li><a href="#">Pages</a></li>
													<li><a href="#">Galleries</a></li>
													<li><a href="#">Places</a></li>
												</ul>
											</nav>
										)
						      		}
						      		else{
						      			return(
						      			<>
							      			<FontAwesomeIcon icon={faBars} onClick={()=>setShowMenu(!showMenu)}/>
											<div className={classNames("mobile-nav",{"active":showMenu})}>
												<ul>
													<li><Link to="/">Home</Link></li>
													<li><a href="#">Rooms</a></li>
													<li><a href="#">Pages</a></li>
													<li><a href="#">Galleries</a></li>
													<li><a href="#">Places</a></li>
												</ul>
											</div>
										</>
						      			)
						      		}
						        
						      }}
						    </MediaQuery>
						</div>
					</Container>
				</div>
			</header>
	);
}
export default Header;