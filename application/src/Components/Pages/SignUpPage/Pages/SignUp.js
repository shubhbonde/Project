import React from "react";

import {Form} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import Input from '../Components/InputComponents/input '
import Button from '../Components/Button/button'

import './SignUp.css'



const SignUp =()=>{
    return(
            <div className="signUp">
               <Form>
                <Input type="text" id="signup_user_inputName"  placeholder="Enter Your Name"/>
                <Input type="number" id="signup_user_inputMob" placeholder="Enter Your Mobile Number"/>
                <Input  type="email" id="signup_user_inputEmail" placeholder="Enter Your Email"/>
                <Input  type="text" id="signup_user_input_Society_name" placeholder="Enter Your Society Name"/>
                <Input  type="password" id="signup_user_input_password" placeholder="Create New Password"/>
                <Button type="submit" value="Signup" id="btn_signup_user"/>
                </Form>
                <label id="already"> Already have an account? <a href="/resisignin">Sign In</a></label>
            </div>
    )
}

export default SignUp;