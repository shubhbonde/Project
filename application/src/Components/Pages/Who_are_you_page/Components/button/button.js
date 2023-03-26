import react from 'react';

import {Link} from 'react-router-dom';

import './button.css'

const Button = () =>{
    return (
     <>  
     <Link to='who/adsignin'> 
    <input type="button" value="Admin"  className='admin_btn'/>
    </Link>
    <Link to= 'secsignin'>
    <input type="button" value="Security Gaurd"  className='security_btn'/>
    </Link>
    <Link to= 'resisignin'>
    <input type="button" value="Resident"  className='resident_btn'/>
    </Link>
    </>
    )
}
export default Button;
