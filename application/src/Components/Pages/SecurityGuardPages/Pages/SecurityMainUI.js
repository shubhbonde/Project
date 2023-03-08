import React from "react";

import Input from "../Components/Inputs/input";
import Button from "../Components/Buttons/button"
import './SecurityMainUI.css';

const SecurityMainUI = props =>{
    return <div className="securitymainui">

        <label id="label_secui_resiname">Resident Name</label>
        <Input type="text" id="secui_resiname" placeholder ="Enter Name Here"/>

        <label id="label_secui_flatno">Flat NO.</label>
        <Input type="number" id="secui_flatno" placeholder ="Enter Flat no. Here"/>

        <label id="label_secui_visiname">Visitor Name</label>
        <Input type="text" id="secui_visiname" placeholder ="Enter Name Here"/>

        <label id="label_secui_motive">Visit Purpose</label>
        <select name="" id="secui_motive">
            <option value="" disabled selected>Select Below</option>
            <option value="">Maid</option>
            <option value="">Delivery</option>
            <option value="">Guest</option>
            <option value="">Services</option>
        </select>

        <Button value ="Search" id="secui_search_btn"/>
        <Button value ="Send Request" id="secui_request_btn"/>


        {/* past reqests need to complete */}
        <ul type="none"> 
            <li>Requests </li>
        </ul>


    </div>
}

export default SecurityMainUI;