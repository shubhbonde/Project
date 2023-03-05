import React from "react";

import {Link} from 'react-router-dom'
import Button from "../Button/button";

import './third_GetStarted.css'

const ThirdGetStarted =()=>{
    return(
            <div className="ThirdGetStarted">
                <Link to="who" >
                <Button/>
                </Link>

            </div>
    )
}

export default ThirdGetStarted;