import React, { useState, useRef } from 'react';
import { AvForm, AvField, Button } from 'availity-reactstrap-validation';

function Message(){

  const[message, setMessage] = useState(null);
  const formRef = useRef(null);

  const handleValidSubmit = (event, values) => {
    let register = {
      message: values.message,
    }
    console.log(register);
    
    setMessage(values.message);
  }

  return (
    <>
      <h2 className="step-title">Say Something</h2>
      <AvForm onValidSubmit={handleValidSubmit} ref={formRef}>
        <AvField 
          name="message" 
          placeholder="Enter message" 
          errorMessage="A valid password is required"
          type="textarea" 
          validate={{ required: { value: false } }}
        />
        <Button type="submit" color="primary">Submit</Button>
      </AvForm>
    </>
  );
}

export default Message;
