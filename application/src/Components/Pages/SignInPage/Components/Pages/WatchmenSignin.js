import React from "react";


import {Form} from 'react-bootstrap'
import Input from '../InputComponents/Input'
import Button from '../Button/button'
import './WatchmenSignin.css'

const WatchSignIn =() =>{

    return (
        <div className="watchsignin">
            <Form>
                <Input/>
                <Button/>
            </Form>
            <label id="dont"> Don't have an account? <a href="/secsignup">Sign up</a></label>

        </div>
    )
}

export default WatchSignIn;