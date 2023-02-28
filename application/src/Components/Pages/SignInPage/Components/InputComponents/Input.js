import React from "react";


import Form from 'react-bootstrap/Form';
import './Input.css'

const InputControls = props => {
    return (
        <>
            <Form.Control
        type="email"
        id="inputemail"
        placeholder="Enter Your Email"
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