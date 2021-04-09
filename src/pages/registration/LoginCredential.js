import React, { useState, useRef } from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button } from "reactstrap";


function LoginCredential(props) {


  const formRef = useRef(null);

  const handleValidSubmit = (event, values) => {
    let register = {
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
    }
    props.setEmail(values.email);
    props.setPassword(values.password);
    props.step(3);
  }

  return (
    <>
      <h2 className="step-title">Login Credentials</h2>
      <AvForm onValidSubmit={handleValidSubmit} ref={formRef}>
        <AvField
          name="email"
          placeholder="Email"
          type="email"
          errorMessage="A valid email is required"
          validate={{ required: { value: true } }}
        />
        <AvField
          name="password"
          placeholder="Enter Password"
          errorMessage="A valid password is required"
          type="password"
          validate={{ required: { value: true } }}
        />
        <AvField
          name="confirmPassword"
          placeholder="Re-Enter Password"
          errorMessage="password not matched"
          type="password"
          validate={{ required: { value: true } }}
        />
        <Button type="submit">Next</Button>
      </AvForm>
    </>
  );
}

export default LoginCredential;
