import React from "react";

import {Link} from 'react-router-dom'
import Button from '../Button/button'
import './SecondGetStarted.css'

const SecondGetStarted =()=>{
    return(
            <div className="secondGetStarted">
                <Link to="/thirdscreen">
                <Button/>
                </Link>

            </div>
    )
}

export default SecondGetStarted;