import React from "react";

import './button.css';

const Button = props =>{
    return <input type={props.type} value= {props.value} id={props.id} />
}

export default Button;