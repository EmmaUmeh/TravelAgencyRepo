import React from "react";
import sectionImg from '../images/man_taking_tourism.png';
import Groupimg from '../images/Group.png';
const Section = () =>{
  const userCounter = {
    counterout: '25+ memebers'
  }
    return(
      <div className="sectionbg">
            <div className="sectionchild">
                  <div className="sectionimg">
                    <img src={sectionImg} alt="sectionimg" />
                  </div>


            <div className="travelsection">
                <div className="exclusivetxt">Exclusive World Trip</div>
                  <div className="taketxt"><h4>Take The Best Weeekend And Enjoy Your Plans</h4></div>
                <div className="sectionptag">
                      <p>
                      Traveling around the world makes the world accessible in all sphere.Our world now based on technology has now involve in world quick transport,fast medium of transporting individuals from one station to another.
                      </p>
                  </div>
                  <div className="groupimg">
                    <div className="group1">
                    <img src={Groupimg} alt="" />
                    </div>
                    
                    <div className="group2">
                    <img src={Groupimg} alt="" />
                    </div>

                   <div className="group3">
                   <img src={Groupimg} alt="" />
                   </div>
                  </div>
                  <div className="spancounter">
                      <span>{userCounter.counterout}</span>
                  </div>

                  <div className="sectionbtn">
                    <div className="contactbtn"><button>Contact Us</button></div>
                    <div className="supportbtn"><button>Support Us</button></div>
                  </div>
            </div>
            </div>
      </div>
    )

  
}


export default Section;