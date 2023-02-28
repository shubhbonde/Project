import React from "react";


import {Form} from 'react-bootstrap'
import Input from '../InputComponents/Input'
import Button from '../Button/button'
import './SignIn.css'

const SignIn =() =>{

    return (
        <div className="signin">
            <Form>
                <Input/>
                <Button/>
            </Form>
            <label id="dont"> Don't have an account? <a href="/signup">Sign up</a></label>

        </div>
    )
}

export default SignIn;