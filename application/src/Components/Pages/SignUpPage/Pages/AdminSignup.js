import React,{useState} from "react";


import axios from "axios";
import {useForm} from 'react-hook-form'
import {Link} from 'react-router-dom';
import Input from '../Components/InputComponents/input '
import Button from '../Components/Button/button'
import { Form } from "react-bootstrap";
import swal from 'sweetalert';



import './AdminSignup.css'




const AdminSignUp =()=>{
    
    const{register,reset,handleSubmit} = useForm();
    const[name ,setName] = useState('')
    const[phoneno,setPhoneno] = useState('')
    const[email,setEmail] = useState('')
    const[socityname,setSocityname] = useState('')
    const[password ,setPassword] = useState('')

    const nameHandler =event=>{setName(event.target.value) };
    const mobHandler =event=>{setPhoneno(event.target.value)};
    const emailHandler =event=>{setEmail(event.target.value)};
    const socNameHandler =event=>{setSocityname(event.target.value)};
    const passwordHandler =event=>{setPassword(event.target.value)};

    const submitHandler =async(event)=>{
        
        event.preventDefault()
        try {

            const resp= await axios.post('http://localhost:3000/who/adsignup',{
                name ,
                phoneno,
                email,
                socityname,
                password
             });
             console.log(resp.data)
             console.log(resp.status)
             swal("Account Has been created");
            
             
             
            
             
             
         } catch (error) {
             console.log("maybe problem in Signin page data")
         }
         
         
    }
    
   

    return(
            <div className="adminSignUp">
               <form >
               <Input type="text" id="signup_admin_inputName"  placeholder="Enter Your Name" onBlur={nameHandler} ref={register} />
                <Input type="number" id="signup_admin_inputMob" placeholder="Enter Your Mobile Number" onBlur={mobHandler}/>
                <Input  type="email" id="signup_admin_inputEmail" placeholder="Enter Your Email" onBlur={emailHandler}/>
                <Input  type="text" id="signup_admin_input_Society_name" placeholder="Enter Your Society Name" onBlur={socNameHandler}/>
                <Input  type="password" id="signup_admin_input_password" placeholder="Create New Password" onBlur={passwordHandler}/>
               
                <Button type="submit" value="Signup" id="btn_signup_admin" onClick={submitHandler} />
                </form>
                <label id="already"> Already have an account? <a href="/who/adsignin">Sign In</a></label>
            </div>
    )
}

export default AdminSignUp;