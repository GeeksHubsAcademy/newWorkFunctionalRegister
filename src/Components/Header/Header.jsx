
import React from 'react';


import {useNavigate} from 'react-router-dom';


import './Header.css';
 
const Header = () => {

    let navigate = useNavigate();
    
     return (
         <div className='headerDesign'>
            <div className="linkDesign" onClick={()=>setTimeout(()=>{navigate("/")},750)}>Home</div>
            <div className="linkDesign" onClick={()=>setTimeout(()=>{navigate("/login")},750)}>Login</div>
            <div className="linkDesign" onClick={()=>setTimeout(()=>{navigate("/register")},750)}>Register</div>
         </div>
     )
}
export default Header;