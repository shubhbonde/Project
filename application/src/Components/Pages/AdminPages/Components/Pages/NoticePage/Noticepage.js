import React,{useState} from "react";


import axios from "axios";
import Button from "../../Buttons/button";
import "./Noticepage.css";
import swal from 'sweetalert';

const Noticepage = (props) => {
  const[notice,setNotice] = useState('')

  const noticeHandler =event=>{setNotice(event.target.value) };


  
  const submitHandler =async(event)=>{
        
    event.preventDefault()
    try {

        const resp= await axios.post('http://localhost:3000/adfirstpage/ntpage',{
          notice
           
         });
         console.log(resp.data)
         console.log(resp.status)
         swal("Notice Has been Inserted");
         
     } catch (error) {
         console.log("maybe problem in gaurdPortal page data")
     }
     
     
}


  return (
    <div className="noticepage">
      <textarea
        id="noticetxtarea"
        cols="50"
        rows="6"
        placeholder=" Enter Here  New Notice"
        autoFocus={true}
        onBlur={noticeHandler}
      ></textarea>
        <Button value="UPDATE" id="notice_update_btn" onClick={submitHandler}/>

    </div>
  );
};

export default Noticepage;
