import React from "react";
import firstSection from '../images/castleimg.png';
import secondSection from '../images/castleimg2.jpg';
import thirdSection from '../images/castlehall.png';
import { FiStar } from "react-icons/fi";
const SectionTwo = () => {
return(
    <div className="sectionimgcollection">
        <div className="fistsectionimg">
            <img src={firstSection}/>

            <div className="filterblur">
               <div className="travelh4">
                    <h4>
                        Traveling around the world makes the world accessible in all sphere.
                        </h4>
               </div>

                <div className="sectionrate">
                  <div className="ratings">
                  <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                  </div>

                    <div className="booknow">
                            <button>Book Now</button>
                        </div>
                </div>

                     

            </div>
        </div>

        <div className="secondsectionimg">
            <img src={secondSection}/>
            <div className="filterblur">
               <div className="travelh4">
                    <h4>
                        Traveling around the world makes the world accessible in all sphere.
                        </h4>
               </div>

                <div className="sectionrate">
                  <div className="ratings">
                  <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                  </div>

                    <div className="booknow">
                            <button>Book Now</button>
                        </div>
                </div>

                     

            </div>
        </div>

        <div className="thirdsectionimg">
            <img src={thirdSection }/>
            <div className="filterblur">
               <div className="travelh4">
                    <h4>
                        Traveling around the world makes the world accessible in all sphere.
                        </h4>
               </div>

                <div className="sectionrate">
                  <div className="ratings">
                  <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                  </div>

                    <div className="booknow">
                            <button>Book Now</button>
                        </div>
                </div>

                     

            </div>
        </div>
    </div>
)
}

export default SectionTwo;