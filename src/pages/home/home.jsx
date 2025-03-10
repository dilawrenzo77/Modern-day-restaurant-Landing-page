import React from 'react';
import './home.css';
import Navbar from '../../components/navbar/navbar';
import Hero from "../../components/hero/hero";
import Section1 from '../../components/section1/section1';
import Section2 from '../../components/section2/section2';
import Section3 from '../../components/section3/section3';
import Section4 from '../../components/section4/section4';
import Footer from '../../components/footer/footer';

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className="homeContainer">
                <Hero />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Footer />
            </div>
        </div>
    );
}

export default Home;
