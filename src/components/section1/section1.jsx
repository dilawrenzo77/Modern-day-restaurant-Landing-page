import React from 'react';
import "./section1.css";
import pic1 from "../../assets/pic2.jpg";

const Section1 = () => {
    return (
        <div className='section1'>
            <div className="section1Container">
                <img src={pic1} alt="section1" />
                <p>The experience of Quality Dining</p>
                <button className="exploreBtn">Explore</button>
            </div>
        </div>
    );
}

export default Section1;
