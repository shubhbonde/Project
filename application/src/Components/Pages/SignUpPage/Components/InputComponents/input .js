import React from "react";

import './Input.css'

const Input = props =>{
    return<>
        <input type={props.type} id = {props.id} placeholder = {props.placeholder} required onBlur={props.onBlur} onChange={props.onChange}/>
    </>
}
export default Input;