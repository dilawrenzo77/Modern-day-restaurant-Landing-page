import React, { useState } from 'react';
import './navbar.css';
import Logo from '../../components/logo/logo';
import { CiSearch } from "react-icons/ci";
import { IoIosCart } from "react-icons/io";
import { PiSignInThin } from "react-icons/pi";
import Hamburger from "hamburger-react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='navContainer'>
            <div className='navbar'>
                <div className="hamContainer">
                    <Hamburger
                        size={24}
                        toggled={open}
                        toggle={setOpen} />
                    </div>
                    {open && <div className="hamburger">
                        <div>
                            <Hamburger 
                            size={24}
                            toggled={open}
                            toggle={setOpen} />
                        </div>
                        <h3>MENU</h3>
                        <p>Home</p>
                        <p>About</p>
                        <p>How it works</p>
                        <p>Contacts</p>
                        <Logo />
                    </div>
                    }
                <div className="navContent2">
                    <p id='one'>Home</p>
                    <p id='two'>About</p>
                    <p id='three'>How it works</p>
                    <p id='four'>Contacts</p>
                </div>
                <Logo />
                <div className="navContent3">
                    <CiSearch size={20} className='icons'/>
                    <IoIosCart size={20} className='icons'/>
                    <button className="signInBtn"><PiSignInThin size={17} />SignIn</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
