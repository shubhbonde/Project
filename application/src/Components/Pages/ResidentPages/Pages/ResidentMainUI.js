import React from "react";

import Input from "../Components/Inputs/input";
import Button from "../Components/Buttons/button"
import './ResidentMainUI.css';

const ResidentMainUI = props =>{
    return <div className="residentmainui">


        <Input type="textarea" id="resiui_notice_txtarea" />
        <ul type ="none" id="resiui_log_ulist">
            <li></li>

        </ul>

        <Button value="Logout" id="resiui_logout_btn"/>


        

    </div>
}

export default ResidentMainUI;