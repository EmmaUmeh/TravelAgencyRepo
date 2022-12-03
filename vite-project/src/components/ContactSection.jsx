import React from "react";
import FoodDeliver from "../images/food_delivery.png";

const ContactSection = () => {
    const Ptag = {
        headtag:'Do you have a question or want to become a seller?',
        ptag:'fill the form and our manager will contact you in the next 48hrs'
    }
    return(
        <div className="contactpage">
                <div>
                <div className="">
                <h4>{Ptag.headtag}</h4>
            </div>
            <div>
                <p>{Ptag.ptag}</p>
            </div>

            <div className="contactinput flex mb-5">
                <div className="mb-5">
                    <input placeholder="Your Name"/>
                </div>

                <div className="ml-4 contactinput2">
                <input placeholder="Your e-mail"/>
                </div>
            </div>

            <div className="contacttextarea">
                <textarea placeholder="your message"></textarea>
            </div>

            <div>
                <button className="border border-orange-500 bg-orange-500 hover:bg-transparent send-btn">Send</button>
            </div>
                </div>


            <div className="fooddeliver">
                <img src={FoodDeliver} alt="" />
            </div>
        </div>
    )
}

export default ContactSection;