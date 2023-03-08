import React from "react";

import Input from "../../Inputs/input";
import Button from "../../Buttons/button"
import './Residentportal.css'

const Residentportal = props =>{
    return <div className="residentportal">

            <label htmlFor="flatno" id="label_flatno"> Flat No </label>
            <Input id ="flatno"  placeholder = " Enter Flat Number" type ="text"/>

            <label htmlFor="owner" id="label_owner"> Name of Owner</label>
            <Input id ="ownername"  placeholder = " Name of Owner" type ="text"/>

            <label htmlFor="fmember" id="label_fmember"> Family members</label>
            <Input id ="fmember"  placeholder = " Enter Family Members" type ="number"/>

            <label htmlFor="phnumber" id="label_phnumber"> Phone Number</label>
            <Input id ="phnumber"  placeholder = " Enter Mobile Number" type ="number"/>
            
            
            <Button value ="SEARCH" id= "resiportal_search_btn"/>
            <Button value ="UPDATE" id= "resiportal_update_btn"/>
            <Button value ="DELETE" id= "resiportal_delete_btn"/>
            <Button value ="Create" id= "resiportal_create_btn"/>

    </div>
}

export default Residentportal;