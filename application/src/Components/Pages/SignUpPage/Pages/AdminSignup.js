import React from "react";

import {Form} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import Input from '../Components/InputComponents/Input'
import Button from '../Components/Button/button'

import './AdminSignup.css'



const AdminSignUp =()=>{
    return(
            <div className="adminSignUp">
               <Form>
                <Input name="Enter Your Name" id="name"/>
               
                <Button/>
                </Form>
                <label id="already"> Already have an account? <a href="/adsignin">Sign In</a></label>
            </div>
    )
}

export default AdminSignUp;