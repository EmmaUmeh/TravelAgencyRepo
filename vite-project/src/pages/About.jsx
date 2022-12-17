import React from "react";
import Section from "../components/Section.jsx";
const About = () => {
    const Sectionpad = {
position:'relative',
top:'60px'
    }
    return(
        <div>
            
            <div style={Sectionpad}>
                <Section/>
            </div>
        </div>
    )
}

export default About;