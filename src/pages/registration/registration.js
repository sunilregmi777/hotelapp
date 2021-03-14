import React, { useState } from 'react';
import {  Container, Form, Button, Card, CardHeader, CardBody, CardTitle, CardText, CardFooter, Row , Col } from "reactstrap";
import BasicInfo from "./BasicInfo";
import LoginCredential from "./LoginCredential";
import Message from "./Message";
import styled from "styled-components";
import reg from '../../images/reg.jpg';
import MultiStepProgressBar from "./MultiStepProgressBar";
import {  AvForm, AvField, AvGroup, AvInput, AvFeedback, Label, FormGroup} from 'availity-reactstrap-validation';


function Registration(){
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className="registration-form">
      <Container>
        <Row>
          <Col>
              <h1>Create Account</h1>
              <p>Register to explore more features</p>
              <Card>
                <CardBody>
                  <BasicInfo />
                  <LoginCredential />
                  <Message />
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
