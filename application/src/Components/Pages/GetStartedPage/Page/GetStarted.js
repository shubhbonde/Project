import react from 'react';

import './GetStarted.css'
import Button from '../button/button'
import {Link} from 'react-router-dom';

const GetStarted = () =>{
    return <div className="gettingStarted_img">
        <Link to='/secondScreen'>
        <Button  />
        </Link>
     </div> 
}

export default GetStarted;