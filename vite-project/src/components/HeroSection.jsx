import React from "react";
import heroImg from '../images/heroimg.png';
const HeroSection = () => {
    
return(
    <div className="herobanner">
        <div className="herochild">
          <div className="herotag">
                <div className="herotxt mb-5">
                    <h2 className="traveltxt">Travel To </h2>
                    <h4 className="">Any part of the World!</h4>
                </div>

                <div className="heroptag">
                <p>
                Traveling is the most experimental and pleasurable thing that makes one catch fun and also make the visual art of the world present to nature.
                </p>
                </div>

                <div className="registerbtn">
                    <button>Register</button>
                </div>
            </div>

                <div className="heroimg">
                    <img src={heroImg}/>
                </div>
          </div>
    </div>
)
}

export default HeroSection;