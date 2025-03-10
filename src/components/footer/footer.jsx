import React from 'react';
import "./footer.css";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from '../logo/logo';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footerContainer1">
                <div className="footerContent">
                    <Logo className="logo" />
                    <p>Lorem ipsum dolor sit amet consectetur <br/>adipisicing elit. Dolore, fugit?</p>
                    <div className="footerIcons">
                        <FaInstagram size={12} className='footIcon'/>
                        <FaFacebookF size={12} className='footIcon'/>
                        <FaXTwitter size={12} className='footIcon'/>
                    </div>
                </div>
                <div className="footerContent">
                    <h3>Company</h3>
                    <p>About us</p>
                    <p>Career</p>
                    <p>Services</p>
                </div>
                <div className="footerContent">
                    <h3>Policy</h3>
                    <p>FAQ</p>
                    <p>shipping</p>
                    <p>Privacy</p>
                </div>
                <div className="footerContent">
                    <h3>Get in touch</h3>
                    <p>+2347062864478</p>
                    <p>mbatalawrence@<br/>gmail.com</p>
                </div>
            </div>
            <div className="footerContainer2">
                <p>&copy; 2025 SwiftEats. ALL RIGHTS RESERVED</p>
            </div>
        </div>
    );
}

export default Footer;
