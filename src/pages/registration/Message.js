import React, { useState, useRef } from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button} from "reactstrap";

function Message(props){

  const formRef = useRef(null);

  const handleValidSubmit = (event, values) => {
    props.setMessage(values.message);
    props.register();
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
        <Button type="submit">Submit</Button>
      </AvForm>
    </>
  );
}

export default Message;
