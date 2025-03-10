import React from 'react';
import './section2.css';
import pic1 from "../../assets/v4.jpg";
import pic2 from "../../assets/v3.jpg";
import pic3 from "../../assets/v2.jpg";

const Section2 = () => {
    return (
        <div className='section2'>
            <div className="section2Container">
                <div className="section2Content1">
                    <h2>What to you Experience</h2>
                    <p>Enjoy high quality meals and quisines, top notch delivery to your doorstep and excellent service.</p>
                </div>
                <div className="section2Content2">
                    <div className="content2Card">
                        <div className="card">
                            <img src={pic1} alt="" />
                            <h3>Top Notch cuisines</h3>
                            <p>Enjoy premium local and continental delicacies</p>
                        </div>
                        <div className="card">
                            <img src={pic2} alt="" />
                            <h3>Quality services</h3>
                            <p>Get the best customer experience in the business</p>
                        </div>
                        <div className="card">
                            <img src={pic3} alt="" />
                            <h3>Swift delivery</h3>
                            <p>Get great delicacies delivered to your doorstep</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section2;
