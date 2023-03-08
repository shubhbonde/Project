import React from "react";
import {Link} from "react-router-dom"

import Button from '../Buttons/button'
import './FirstPage.css'

const Adminfirstpage = () =>{
    return <div className="adminfirstpage">
     
     <Link to="/adfirstpage/ntpage">   
    <Button value="New Notice" id="notice_btn"/>
    </Link>

    <Link to="/adfirstpage/resiportal">
    <Button value="Resident Data" id="resident_data_btn"/>
    </Link>

    <Link to="/adfirstpage/gauportal">
    <Button value="Guard Data" id="guard_data_btn"/>
    </Link>
    </div> 


}

export default Adminfirstpage;