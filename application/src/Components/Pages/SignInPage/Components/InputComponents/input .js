import React from "react";

import './Input.css'

const Input = props =>{
    return<>
        <input type={props.type} id = {props.id} placeholder = {props.placeholder} required onChange={props.onChange} onBlur={props.onBlur}/>
    </>
}
export default Input;