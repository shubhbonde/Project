import React from "react";
import {Link} from "react-router-dom"

import Button from '../Buttons/button'
import './FirstPage.css'

const Adminfirstpage = () =>{
    return <div className="adminfirstpage">
     
     <Link to="ntpage">   
    <Button value="New Notice" id="notice_btn"/>
    </Link>

    <Link to="resiportal">
    <Button value="Resident Data" id="resident_data_btn"/>
    </Link>

    <Link to="gauportal">
    <Button value="Guard Data" id="guard_data_btn"/>
    </Link>
    </div> 


}

export default Adminfirstpage;