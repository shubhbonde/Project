import React ,{useState}from "react";


import axios from "axios";
import Input from "../../Inputs/input";
import Buttton from "../../Buttons/button";
import './Gaurdportal.css'
import swal from 'sweetalert';

const Gaurdportal =props =>{

    const[guardid,setGuardid] = useState('')
    const[name,setName] = useState('')
    const[dutytime,setDutytime] = useState('')


    const idHandler =event=>{setGuardid(event.target.value) };
    const nameHandler =event=>{setName(event.target.value)};
    const dutytimeHandler =event=>{setDutytime(event.target.value)};

    
    const submitHandler =async(event)=>{
        
        event.preventDefault()
        try {

            const resp= await axios.post('http://localhost:3000/adfirstpage/gauportal',{
                guardid ,
                name,
                dutytime,
               
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

            const resp= await axios.patch('http://localhost:3000/adfirstpage/gauportal',{
                guardid ,
                name,
                dutytime,
               
             });
             console.log(resp.data)
             console.log(resp.status)
             swal("Data Has been Inserted");
            
             
             
            
             
             
         } catch (error) {
             console.log("maybe problem in gaurdPortal page data")
         }
         
         
    }
  

    return <div className="gaurdportal">
        <label  id="label_gua_id"> Guard ID </label>
        <Input type = "text" id="guaID" placeholder = "Enter Guard ID here" onBlur={idHandler}/>

        <label  id="label_gua_name"> Guard Name </label>
        <Input type = "text" id="guaName" placeholder = "Enter Name here" onBlur={nameHandler}/>

        <label  id="label_gua_time"> Duty Time </label>
        <Input type = "number" id="guaTime" placeholder = "Enter Working Hour here" onBlur={dutytimeHandler}/>

        <Buttton value="SEARCH" id="gua_search_btn"/>
        <Buttton value="UPDATE" id="gua_update_btn" onClick={submitUpdateHandler}/>
        <Buttton value="SAVE" id="gua_save_btn" onClick={submitHandler}/>
        <Buttton value="DELETE" id="gua_delete_btn"/>

    </div>
}

export default Gaurdportal;