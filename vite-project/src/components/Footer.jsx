import React from "react";
import Logo from "../images/WHAT2EAT.png";
import { Link } from "react-router-dom";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
const Footer = () => {
  
    return(
        <div className="footer pt-4 pb-4 bg-green-500">
            <div className="pb-2 footercont">
            <div className="footerlogo">
                <img src={Logo} alt="logo"/>
            </div>

            <div>
            <ul className="footerlists">
                    
                
                <li className="home text-white">
                  <Link to="/" >
                    Home 
                  </Link>
                </li>

                <li className="about text-white">
                <Link to="/about">
                    About 
                  </Link>
                </li>

                <li className="menu text-white">
                <Link to="/menu">
                    Menu
                  </Link>
                </li>

            

                <li className="contact text-white">
                <Link to="/contact">
                    Contact
                  </Link>
                </li>
            </ul>
            </div>


            <div className="socialhandles">
                <div className="mr-3 facebook"><FiFacebook size="15"/></div>
                <div className=" instagram"><FiInstagram size="15"/></div>
            </div>
            </div>

            <div className="hrtag">
                <hr />
            </div>

            <div className="copyright">
                &copy;Copyright 2022 What2Eat
            </div>
        </div>

    )
}

export default Footer;