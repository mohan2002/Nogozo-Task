import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../Images/logo.png"

import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBars, FaHeart, FaHome, FaShoppingCart, FaUser } from "react-icons/fa";
import logores from "../Images/resimage.png"
function Navbar() {
    const[open,setOpen] = useState(false)
    return (
        <div className="nav-comp">
            

 
            <div className="navbar-comp">
                <img className="logo" src={logo}/>

                <div className="right">
                    <div>
                        <FaHome/>
                    </div>

                    <div className="heart">
                        <FaHeart/>
                    </div>

                    <div>
                        <FaShoppingCart/>
                    </div>

                    <div>
                        <FaUser/>
                    </div>
                    
                    
                    
                    


                    
                    <div className="menuitem" onClick={() =>{setOpen(!open)}}>
                        <FaBars/>
                    </div>
                    
                    
                </div>
            </div>

            
        </div>
    )
}

export default Navbar
