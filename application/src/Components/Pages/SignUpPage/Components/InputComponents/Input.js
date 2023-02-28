import React from "react";


import Form from 'react-bootstrap/Form';
import './Input.css'

const FormTextExample = props=> {
  return (
    <>
      
      <Form.Control
        type="text"
        id="inputName"
        placeholder="Enter Your Name"
      />

<Form.Control
        type="number"
        id="inputMob"
        placeholder="Enter Your Mobile Number"
      />

       <Form.Control
        type="email"
        id="inputEmail"
        placeholder="Enter Your Email"
      />
      
    </>
  );
}

export default FormTextExample;