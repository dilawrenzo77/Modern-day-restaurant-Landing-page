import React from 'react';
import "./section3.css";
import pic1 from "../../assets/food2.png";
import pic2 from "../../assets/food4.png";
import pic3 from "../../assets/food5.png";
import pic4 from "../../assets/food7.png";
import { IoIosHeartEmpty } from "react-icons/io";

const Section3 = () => {
    return (
        <div className='section3'>
            <div className="section3Container">
                <h3>Our Popular Menu</h3>
                <div className="section3Content">
                    <div className="card3">
                        <img src={pic1} alt="" />
                        <h4>Lorem ipsum.</h4>
                        <p>lorem ipsum</p>
                        <div className="cardPrice">
                            <p>&#8358;12000</p>
                            <IoIosHeartEmpty size={12}/>
                        </div>
                    </div>
                    <div className="card3">
                        <img src={pic2} alt="" />
                        <h4>Lorem ipsum.</h4>
                        <p>lorem ipsum</p>
                        <div className="cardPrice">
                            <p>&#8358;2000</p>
                            <IoIosHeartEmpty size={12}/>
                        </div>
                    </div>
                    <div className="card3">
                        <img src={pic3} alt="" />
                        <h4>Lorem ipsum.</h4>
                        <p>lorem ipsum</p>
                        <div className="cardPrice">
                            <p>&#8358;2000</p>
                            <IoIosHeartEmpty size={12}/>
                        </div>
                    </div>
                    <div className="card3">
                        <img src={pic4} alt="" />
                        <h4>Lorem ipsum.</h4>
                        <p>lorem ipsum</p>
                        <div className="cardPrice">
                            <p>&#8358;2000</p>
                            <IoIosHeartEmpty size={12}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section3;

