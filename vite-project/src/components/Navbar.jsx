import React from "react";
import { useState } from "react";
import Logo from "../images/WHAT2EAT.png";
import { FiSearch } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import {FiMenu} from "react-icons/fi"
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [toggleMenu, settoggleMenu] = useState(false);

    const handelClick = () => settoggleMenu(!toggleMenu);

    return(
        <nav className={toggleMenu ? 'navcontainer expanded':'navcontainer'}>
            <div className="logo">
                <Link to="/">
                    <img src={Logo}/>
                </Link>
            </div>

                <ul className="navlists">
                    
                        <div className="icons2">
                        <div className="icons-items1">
                            <FiSearch/>
                        </div>                    
                        <div className="icons-items2">
                            <FiShoppingBag/>
                        </div>
                        </div>
                    
                    <li className="home text-white">
                      <Link to="/" onClick={handelClick}>
                        Home 
                      </Link>
                    </li>

                    <li className="about text-white">
                    <Link to="/about" onClick={handelClick}>
                        About 
                      </Link>
                    </li>

                    <li className="menu text-white">
                    <Link to="/menu" onClick={handelClick}>
                        Menu
                      </Link>
                    </li>

                

                    <li className="contact text-white">
                    <Link to="/contact" onClick={handelClick}>
                        Contact
                      </Link>
                    </li>
                </ul>

                <div className="icons">
                    <div className="icons-items1">
                        <FiSearch/>
                    </div>                    
                    <div className="icons-items2">
                        <FiShoppingBag/>
                    </div>
                </div>

                <div className="menuicons" onClick={handelClick}>
                {toggleMenu ? <FiX color="white" size="30"/> : <FiMenu color="white" size="30"/>}
                </div>
        </nav>
    )
}

export default Navbar;