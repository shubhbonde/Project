import React from "react";

import './button.css'

const Button = props =>{
    return <input type="button" value= {props.value} id={props.id} onClick={props.onClick} />
}

export default Button;