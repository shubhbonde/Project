import React from "react";


import {Form} from 'react-bootstrap'
import Input from '../InputComponents/input '
import Button from '../Button/button'
import './WatchmenSignin.css'

const WatchSignIn =() =>{

    return (
        <div className="watchsignin">
            <Form>
            <Input type="number" id="watchmen_inputnumber" placeholder="Enter Your Mobile Number"/>
                <Input type="password" id="watchmen_inputpassword" placeholder="Enter Your Password"/>
                <Button  type="button" value="LogIn" id="btn_signin_user"/>
            </Form>
            <label id="dont"> Don't have an account? <a href="/secsignup">Sign up</a></label>

        </div>
    )
}

export default WatchSignIn;