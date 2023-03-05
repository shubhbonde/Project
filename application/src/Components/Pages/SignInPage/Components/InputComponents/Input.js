import React from "react";


import Form from 'react-bootstrap/Form';
import './Input.css'

const InputControls = props => {
    return (
        <>
            <Form.Control
        type="number"
        id="inputnumber"
        placeholder="Enter Your Mobile Number"
      />

            <Form.Control
        type="password"
        id="inputpassword"
        placeholder="Enter Your Password"
        // <FontAwesomeIcon icon="fa-solid fa-eye" /> //fontAwesome for install fonts
      />
        
        </>
    )
}

export default InputControls;