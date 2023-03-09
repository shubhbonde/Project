import React,{useState} from "react";

import axios from "axios";
import {Form} from 'react-bootstrap'
import Input from '../InputComponents/input '
import Button from '../Button/button'
import './WatchmenSignin.css'

const WatchSignIn =() =>{

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
           
            
        } catch (error) {
            console.log("maybe problem in url ")
            
            
        }
       console.log("number="+number)
       console.log("password="+password)

    }

    return (
        <div className="watchsignin">
            <Form>
            <Input type="number" id="watchmen_inputnumber" placeholder="Enter Your Mobile Number" onBlur={numberHandler}/>
                <Input type="password" id="watchmen_inputpassword" placeholder="Enter Your Password" onBlur={passHandler}/>
                <Button  type="button" value="LogIn" id="btn_signin_user" onClick={submitHandler}/>
            </Form>
            <label id="dont"> Don't have an account? <a href="/secsignup">Sign up</a></label>

        </div>
    )
}

export default WatchSignIn;