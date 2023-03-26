import React,{useState} from "react";
import { useHistory} from 'react-router-dom';
import axios from "axios";
import {Form} from 'react-bootstrap'
import Input from '../InputComponents/input '
import Button from '../Button/button'
import './WatchmenSignin.css'

const WatchSignIn =() =>{
    const history =useHistory();
    const[phoneno,setPhoneno] = useState('')
    const[password,setPassword] = useState('')

    const numberHandler = event =>{
      
        setPhoneno(event.target.value)
    }
    const passHandler=event =>{
        setPassword(event.target.value)
    }
    const submitHandler= async(event)=>{
        event.preventDefault()
        try {

           const resp= await axios.post('http://localhost:3000/who/secsignin',{
            phoneno,password
            });
            console.log(resp.data)
            console.log(resp.status)

            if(resp.data.code === 500)
            {
               alert("User Not Found")
            }
            if(resp.data.code === 404)
            {
               alert("Credentials  are Wrong  ")
            }
            if(resp.data.code === 200)
            {
               history.push("/secui");
            }
            
        } catch (error) {
            console.log("maybe problem in admin signin  page data")
            
            
        }
     
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