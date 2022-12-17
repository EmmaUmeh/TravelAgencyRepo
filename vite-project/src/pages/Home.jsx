import React from "react";
import ContactSection from "../components/ContactSection.jsx";
import HeroSection from "../components/HeroSection.jsx";
import Section from "../components/Section.jsx";
import SectionTwo from "../components/SectionTwo.jsx";

const Home = () => {
    return(
        <div>
            <HeroSection />
            <Section />
            <SectionTwo/>
            <ContactSection />
        </div>
    )
}

export default Home;