import React from "react";

import {Form} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import Input from '../Components/InputComponents/Input'
import Button from '../Components/Button/button'

import './SignUp.css'



const SignUp =()=>{
    return(
            <div className="signUp">
               <Form>
                <Input name="Enter Your Name" id="name"/>
               
                <Button/>
                </Form>
                <label id="already"> Already have an account? <a href="/signin">Sign In</a></label>
            </div>
    )
}

export default SignUp;