import React,{useState} from "react";
import { useHistory} from 'react-router-dom';

import axios from "axios";
import {Form} from 'react-bootstrap'
import Input from "../InputComponents/input ";
import Button from '../Button/button'
import './AdminSignin.css'

const AdminSignIn =() =>{

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

           const resp= await axios.post('http://localhost:3000/who/adsignin',{
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
                alert("Credentials  is Wrong  ")
             }
             if(resp.data.code === 200)
             {
                history.push("/who/adfirstpage");
             }
            
        } catch (error) {
            console.log("maybe problem in admin signin  page data")
            
            
        }
     

    }


    return (
        <div className="adminsignin">
            <form >
               <Input type="number" id="admin_inputnumber" placeholder="Enter Your Mobile Number" onBlur={numberHandler}/>
               <Input type="password" id="admin_inputpassword" placeholder="Enter Your Password" onBlur={passHandler}/>
                <Button type="submit" value="LogIn" id="btn_signin_admin" onClick={submitHandler}/>
            </form>
            <label id="dont"> Don't have an account? <a href="/who/adsignup">Sign up</a></label>

        </div>
    )
}

export default AdminSignIn;