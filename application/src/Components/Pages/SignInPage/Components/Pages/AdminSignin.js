import React,{useState} from "react";

import axios from "axios";
import {Form} from 'react-bootstrap'
import Input from "../InputComponents/input ";
import Button from '../Button/button'
import './AdminSignin.css'

const AdminSignIn =() =>{

    const[number,setNumber] = useState('')
    const[password,setPassword] = useState('')

    const numberHandler = event =>{
      
       setNumber(event.target.value)
    }
    const passHandler=event =>{
        setPassword(event.target.value)
    }
    const submitHandler= async(event)=>{
        event.preventDefault()
        try {

           const resp= await axios.post('http://localhost:3000/adsignin',{
               number: number,password: password
            });
            console.log(resp.data)
            console.log(resp.status)
            
        } catch (error) {
            console.log("maybe problem in Signin page data")
            
            
        }
       console.log("number="+number)
       console.log("password="+password)

    }


    return (
        <div className="adminsignin">
            <Form>
               <Input type="number" id="admin_inputnumber" placeholder="Enter Your Mobile Number" onBlur={numberHandler}/>
               <Input type="password" id="admin_inputpassword" placeholder="Enter Your Password" onBlur={passHandler}/>
                <Button type="submit" value="LogIn" id="btn_signin_admin" onClick={submitHandler}/>
            </Form>
            <label id="dont"> Don't have an account? <a href="/adsignup">Sign up</a></label>

        </div>
    )
}

export default AdminSignIn;