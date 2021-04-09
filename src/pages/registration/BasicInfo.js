import React, { useState, useRef } from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button } from "reactstrap";

function BasicInfo(props) {
  console.log(props)
  
  const formRef = useRef(null);

  const handleValidSubmit = (event, values) => {
    let register = {
      name: values.name,
      address: values.address,
      phone: values.phone,
    }
    props.setName(values.name);
    props.setAddress(values.address);
    props.setPhone(values.phone);
    props.step(2);
  }


  return (
    <>
      <h2 className="step-title">Basic Info</h2>
      <AvForm onValidSubmit={handleValidSubmit} ref={formRef}>
        <AvField
          name="name"
          placeholder="Name"
          type="text"
          validate={{
            required: { value: true },
            pattern: { value: '[a-zA-Z]+', errorMessage: "Please enter a valid name" }
          }}
        />
        <AvField
          name="address"
          placeholder="Address"
          type="text"
          validate={{
            required: { value: true },
            pattern: { value: '[a-zA-Z]+', errorMessage: "Please enter a valid address" }
          }}
        />
        <AvField
          name="phone"
          placeholder="Phone"
          type="number"
          validate={{
            required: { value: true },
            pattern: {
              value: "^(98|97)([0-9]{8}$)",
              errorMessage:
                "10 digit number and starts with 98 or 97",
            },
          }}
        />
        <Button type="submit">Next</Button>
      </AvForm>
    </>
  );
}

export default BasicInfo;
