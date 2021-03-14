import React ,{useState} from 'react';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import DatePicker from "react-datepicker";
import {  AvForm, AvField, AvGroup, AvInput, AvFeedback, Label, FormGroup} from 'availity-reactstrap-validation';
import './availability.scss'
import "react-datepicker/dist/react-datepicker.css";

function AvailabilityForm(){
	 const [startDate, setStartDate] = useState(new Date());
	return(
		<div className="availability">
			<Container>
				<div className="availability-wrapper">
					<h2><FontAwesomeIcon icon={faCheckCircle} />Check<br/> Availability</h2>
					<AvForm>
						<DatePicker 
							selected={startDate} 
							onChange={date => setStartDate(date)} 
							dateFormat="MMMM d, yyyy"
						/>
						<DatePicker 
							selected={startDate} 
							onChange={date => setStartDate(date)} 
							dateFormat="MMMM d, yyyy"
						/>
						<AvField
	                      name="hotel"
	                      type="select"
	                      errorMessage="This is required"
	                      // value={packageInfoTemp.material}
	                      validate={{ required: { value: true } }}
	                    >
	                      <option value="">Select Hotel</option>
	                      <option value="Om adhaya retret">Om adhaya retret</option>
	                      <option value="Chitlang organic village resort">Chitlang organic village resort</option>
	                      <option value="Chitlang resort">Chitlang resort</option>
	                      <option value="Mushroom resort">Mushroom resort</option>
	                      <option value="">Select Hotel</option>
	                      <option value="Om adhaya retret">Om adhaya retret</option>
	                      <option value="Chitlang organic village resort">Chitlang organic village resort</option>
	                      <option value="Chitlang resort">Chitlang resort</option>
	                      <option value="Mushroom resort">Mushroom resort</option>
	                     </AvField>
	                    <AvField
	                      name="adult"
	                      type="select"
	                      errorMessage="This is required"
	                      // value={packageInfoTemp.material}
	                      validate={{ required: { value: true } }}
	                    >
	                      <option value="">Adult</option>
	                      <option value="1">1</option>
	                      <option value="2">2</option>
	                      <option value="3">3</option>
	                      <option value="4">4</option>
	                      <option value="1">5</option>
	                      <option value="2">6</option>
	                      <option value="3">7</option>
	                      <option value="4">8</option>
	                    </AvField>
	                    <AvField
	                      name="child"
	                      type="select"
	                      errorMessage="This is required"
	                      // value={packageInfoTemp.material}
	                      validate={{ required: { value: true } }}
	                    >
	                      <option value="">Child</option>
	                      <option value="none">None</option>
	                      <option value="1">1</option>
	                      <option value="2">2</option>
	                      <option value="3">3</option>
	                      <option value="4">4</option>
	                      <option value="1">5</option>
	                      <option value="2">6</option>
	                      <option value="3">7</option>
	                      <option value="4">8</option>
	                    </AvField>
				          <Button className="button-main">Check</Button>
					</AvForm>
				</div>
			</Container>
		</div>
	);
}
export default AvailabilityForm;