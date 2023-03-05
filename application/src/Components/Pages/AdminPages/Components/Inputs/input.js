import React from "react";

import './input.css';

const Input = props =>{
    return<>
        <input type={props.type} id = {props.id} placeholder = {props.placeholder} />
    </>
}
export default Input;