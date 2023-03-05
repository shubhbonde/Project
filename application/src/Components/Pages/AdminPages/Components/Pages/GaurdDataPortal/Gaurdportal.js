import React from "react";

import Input from "../../Inputs/input";
import Buttton from "../../Buttons/button";
import './Gaurdportal.css'

const Gaurdportal =props =>{
    return <div className="gaurdportal">
        <label  id="label_gua_id"> Guard ID </label>
        <Input type = "text" id="guaID" placeholder = "Enter Guard ID here"/>

        <label  id="label_gua_name"> Guard Name </label>
        <Input type = "text" id="guaName" placeholder = "Enter Name here"/>

        <label  id="label_gua_time"> Duty Time </label>
        <Input type = "number" id="guaTime" placeholder = "Enter Working Hour here"/>

        <Buttton value="SEARCH" id="gua_search_btn"/>
        <Buttton value="UPDATE" id="gua_update_btn"/>
        <Buttton value="SAVE" id="gua_save_btn"/>
        <Buttton value="DELETE" id="gua_delete_btn"/>

    </div>
}

export default Gaurdportal;