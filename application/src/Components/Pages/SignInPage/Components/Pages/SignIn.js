import React from "react";


import {Form} from 'react-bootstrap'
import Input from '../InputComponents/input '
import Button from '../Button/button'
import './SignIn.css'

const SignIn =() =>{

    return (
        <div className="signin">
            <Form>
                <Input type="number" id="user_inputnumber" placeholder="Enter Your Mobile Number"/>
                <Input type="password" id="user_inputpassword" placeholder="Enter Your Password"/>
                <Button type="button" value="LogIn" id="btn_signin_user"/>
            </Form>
            <label id="dont"> Don't have an account? <a href="/signup">Sign up</a></label>

        </div>
    )
}

export default SignIn;