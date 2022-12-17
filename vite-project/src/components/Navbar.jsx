import React from "react";
import { useState } from "react";
import {FiMenu} from "react-icons/fi"
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logoimg from '../images/Travel.png';

const Navbar = () => {
    const [toggleMenu, settoggleMenu] = useState(false);

    const handelClick = () => settoggleMenu(!toggleMenu);

    return(
        <nav className={toggleMenu ? 'navcontainer expanded':'navcontainer'}>
            <div className="logo">
                <Link to="/">
                <Link to="/"  className="logo">
                    <img src={Logoimg}/>
                </Link>
                </Link>
            </div>

                <ul className="navlists">

                    
                    <li className="">
                      <Link to="/" onClick={handelClick} className="linkhome">
                        Home 
                      </Link>
                    </li>

                    <li className="about text-black">
                    <Link to="/about" onClick={handelClick} className="linkabout">
                        About 
                      </Link>
                    </li>

                    <li className="menu text-black">
                    <Link to="/menu" onClick={handelClick} className="linktour">
                        Tour Package
                      </Link>
                    </li>

                

                    <li className="contact text-black">
                    <Link to="/contact" onClick={handelClick} className="linkcontact">
                        Contact Us
                      </Link>
                    </li>
                </ul>


                    <div className="bookingbtn">
                        <button>Book Ticket</button>
                    </div>

                <div className="menuicons" onClick={handelClick}>
                {toggleMenu ? <FiX color="black" size="35"/> : <FiMenu color="black" size="35"/>}
                </div>
        </nav>
    )
}

export default Navbar;