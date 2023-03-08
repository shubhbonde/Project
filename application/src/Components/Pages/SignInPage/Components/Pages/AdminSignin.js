import React from "react";


import {Form} from 'react-bootstrap'
import Input from "../InputComponents/input ";
import Button from '../Button/button'
import './AdminSignin.css'

const AdminSignIn =() =>{

    return (
        <div className="adminsignin">
            <Form>
               <Input type="number" id="admin_inputnumber" placeholder="Enter Your Mobile Number"/>
               <Input type="password" id="admin_inputpassword" placeholder="Enter Your Password"/>
                <Button type="button" value="LogIn" id="btn_signin_admin"/>
            </Form>
            <label id="dont"> Don't have an account? <a href="/adsignup">Sign up</a></label>

        </div>
    )
}

export default AdminSignIn;