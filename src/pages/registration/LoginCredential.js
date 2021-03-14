import React, { useState, useRef } from 'react';
import { AvForm, AvField, Button } from 'availity-reactstrap-validation';

function LoginCredential(){

  const[email, setEmail] = useState(null);
  const[password, setPassword] = useState(null);
  const[confirmPassword, setConfirmPassword] = useState(null);
  const formRef = useRef(null);

  const handleValidSubmit = (event, values) => {
    let register = {
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
    }
    console.log(register);
    
    setEmail(values.email);
    setPassword(values.password);
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
        <Button type="submit" color="primary">Next</Button>
      </AvForm>
    </>
  );
}

export default LoginCredential;
