import React from "react";
import HeroSection from "../components/HeroSection.jsx";
import Section from "../components/Section.jsx";
import ContactSection from "../components/ContactSection.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
    return(
        <div>
            <HeroSection />
            <Section />
            <ContactSection/>
            <Footer/>
        </div>
    )
}

export default Home;