import React, { useState } from 'react';
import  { useHistory } from 'react-router-dom'
import {  Container, Form, Button, Card, CardHeader, CardBody, CardTitle, CardText, CardFooter, Row , Col } from "reactstrap";
import BasicInfo from "./BasicInfo";
import LoginCredential from "./LoginCredential";
import Message from "./Message";
import styled from "styled-components";
import reg from '../../images/reg.jpg';
import MultiStepProgressBar from "./MultiStepProgressBar";
import {  AvForm, AvField, AvGroup, AvInput, AvFeedback, Label, FormGroup} from 'availity-reactstrap-validation';
import axios from 'axios';

function Registration(){
  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState(null);
  const [address, setAddress] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [message, setMessage] = useState(null);
  const history = useHistory();
  const register=()=>{
    let baseUrl = 'http://192.168.1.138:8000';
    axios.post(`${baseUrl}/user/register`, {
      name:name, 
      address:address, 
      phone:phone, 
      email:email, 
      password:password, 
      message:message
    })
    .then(function (response) {
      if (response.status == 200) {
        console.log("success");
        history.push("/");
      }
    })
    

  }
  const renderSwitch= ()=> {
  switch(currentStep) {
    case 1:
      return <BasicInfo step={setCurrentStep} setName={setName} setAddress={setAddress} setPhone={setPhone}/>;
    case 2:
      return <LoginCredential step={setCurrentStep} setEmail={setEmail} setPassword={setPassword}/>;
    case 3:
      return <Message setMessage={setMessage} register={register}/>;
  }
}

  return (
    <div className="registration-form">
      <Container>
        <Row>
          <Col>
              <h1>Create Account</h1>
              <p>Register to explore more features</p>
              <Card>
               <CardTitle>
                <MultiStepProgressBar currentStep={currentStep} />
              </CardTitle>
                <CardBody>
                  {renderSwitch()}
                </CardBody>
              </Card>
          </Col>
          <Col>
            <img src={ reg } className="reg-img"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Registration;
