import React,{useState} from "react";


import axios from "axios";
import Input from '../InputComponents/input '
import Button from '../Button/button'
import './SignIn.css'

const SignIn =() =>{

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

           const resp= await axios.post("http://localhost:3000/resisignin",{
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