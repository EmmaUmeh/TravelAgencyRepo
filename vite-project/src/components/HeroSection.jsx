import React from "react";
import HeroImg from '../images/cuate.png';
const HeroSection = () => {
return(
        <div className="herobanner">
            <div className="heroitem">
                    <div>
                    <h2>Authentic Home food in UK</h2>
                </div>

                <div>
                    <p>WHat2Eat is a courier service which authenticate home cook food which is delivered to customers across the globe.</p>
                </div>

                <div className="heroinput">
                    <input placeholder="search food you love"/><div><button>Search</button></div>
                </div>
            </div>

                <div className="heroimg">
                    <img src={HeroImg} alt="heroimage" />
                </div>
        </div>
)
}

export default HeroSection;