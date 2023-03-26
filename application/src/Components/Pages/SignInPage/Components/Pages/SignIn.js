import React,{useState} from "react";


import axios from "axios";
import { useHistory} from 'react-router-dom';
import Input from '../InputComponents/input '
import Button from '../Button/button'
import './SignIn.css'

const SignIn =() =>{
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

           const resp= await axios.post('http://localhost:3000/who/signin',{
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
               history.push("/resiui");
            }
            
            
        } catch (error) {
            console.log("maybe problem in admin signin  page data")
            
            
        }
     

    }


    return (
        <div className="signin">
            <form action="POST">
                <Input type="number" id="user_inputnumber" placeholder="Enter Your Mobile Number"  onBlur={numberHandler} />
                <Input type="password" id="user_inputpassword" placeholder="Enter Your Password" onBlur={passHandler}/>
                <Button type="submit" value="LogIn" id="btn_signin_user" onClick={submitHandler}/>
            </form>
            <label id="dont"> Don't have an account? <a href="/signup">Sign up</a></label>

        </div>
    )
}

export default SignIn;