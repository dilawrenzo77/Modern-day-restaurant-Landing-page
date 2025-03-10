import React from 'react';
import "./logo.css";
import { BiSolidBowlHot } from "react-icons/bi";

const Logo = () => {
    return (
        <div className='logo'>
            <h1 className='logoHead'>SwiftEats</h1>
            <BiSolidBowlHot size={20} className='iconLogo'/>
        </div>
    );
}

export default Logo;
