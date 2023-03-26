import React, { useState } from "react";

import axios from "axios";
import Input from "../../Inputs/input";
import Button from "../../Buttons/button"
import './Residentportal.css'
import swal from 'sweetalert';

const Residentportal = props =>{

    const[flatno,setFlatno] = useState('')
    const[name,setName] = useState('')
    const[fammembers,setfammembers] = useState('')
    const [phone,setPhone] =useState('')

    
    const flatnoHandler =event=>{setFlatno(event.target.value) };
    const nameHandler =event=>{setName(event.target.value)};
    const fammembersHandler =event=>{setfammembers(event.target.value)};
    const phoneHandler =event=>{setPhone(event.target.value) };
    

    const submitCreateHandler =async(event)=>{
        
        event.preventDefault()
        try {

            const resp= await axios.post('http://localhost:3000/adfirstpage/resiportal',{
                flatno ,
                name,
                fammembers,
                phone
               
             });
             console.log(resp.data)
             console.log(resp.status)
             swal("Data Has been Inserted");
            
             
             
         } catch (error) {
             console.log("maybe problem in gaurdPortal page data")
         }
         
         
    }

    const submitUpdateHandler =async(event)=>{
        
        event.preventDefault()
        try {

            const resp= await axios.patch('http://localhost:3000/adfirstpage/resiportal',{
                flatno ,
                name,
                fammembers,
                phone
               
             });
             console.log(resp.data)
             console.log(resp.status)
             swal("Data Has been Inserted");
            
             
             
         } catch (error) {
             console.log("maybe problem in gaurdPortal page data")
         }
         
         
    }

    const submitSearchHandler =async(event)=>{
        
        event.preventDefault()
        try {

            const resp= await axios.patch('http://localhost:3000/adfirstpage/resiportal',{
                flatno ,
                name,
                fammembers,
                phone
               
             });
             console.log(resp.data)
             console.log(resp.status)
             swal("Data Has been Inserted");
            
             
             
         } catch (error) {
             console.log("maybe problem in gaurdPortal page data")
         }
         
         
    }

    const submitDeleteHandler =async(event)=>{
        
        event.preventDefault()
        try {

            const resp= await axios.patch('http://localhost:3000/adfirstpage/resiportal',{
                flatno ,
                name,
                fammembers,
                phone
               
             });
             console.log(resp.data)
             console.log(resp.status)
             swal("Data Has been Inserted");
            
             
             
         } catch (error) {
             console.log("maybe problem in gaurdPortal page data")
         }
         
         
    }









    return <div className="residentportal">

            <label htmlFor="flatno" id="label_flatno"> Flat No </label>
            <Input id ="flatno"  placeholder = " Enter Flat Number" type ="text"  onBlur={flatnoHandler}/>

            <label htmlFor="owner" id="label_owner"> Name of Owner</label>
            <Input id ="ownername"  placeholder = " Name of Owner" type ="text"  onBlur={nameHandler}/>

            <label htmlFor="fmember" id="label_fmember"> Family members</label>
            <Input id ="fmember"  placeholder = " Enter Family Members" type ="number"  onBlur={fammembersHandler}/>

            <label htmlFor="phnumber" id="label_phnumber"> Phone Number</label>
            <Input id ="phnumber"  placeholder = " Enter Mobile Number" type ="number"  onBlur={phoneHandler}/>
            
            
            <Button value ="SEARCH" id= "resiportal_search_btn" onClick={submitSearchHandler}/>
            <Button value ="UPDATE" id= "resiportal_update_btn" onClick={submitUpdateHandler}/>
            <Button value ="DELETE" id= "resiportal_delete_btn" onClick ={submitDeleteHandler}/>
            <Button value ="Create" id= "resiportal_create_btn" onClick={submitCreateHandler}/>

    </div>
}

export default Residentportal;