import React from "react";


import {Form} from 'react-bootstrap'
import Input from '../InputComponents/Input'
import Button from '../Button/button'
import './AdminSignin.css'

const AdminSignIn =() =>{

    return (
        <div className="adminsignin">
            <Form>
                <Input/>
                <Button/>
            </Form>
            <label id="dont"> Don't have an account? <a href="/adsignup">Sign up</a></label>

        </div>
    )
}

export default AdminSignIn;