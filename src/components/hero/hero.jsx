import React from 'react';
import "./hero.css";
import Food1 from "../../assets/food1.png";

const Hero = () => {
    return (
        <div className='hero'>
                <div className="heroContent1">
                    <h3 className="heroText">Don't just eat, Dine <span>Exquisitely</span></h3>
                    <img src={Food1} alt="hero" className="heroImg"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, Consequuntur incidunt distinctio <br/>praesentium quas qui</p>
                    <button className="enjoyBtn">Enjoy</button>
                </div>
        </div>
    );
}

export default Hero;
