import React, { useState } from 'react';
import './Navbar.css';
import Navbarimg from '../../assets/Logo_img.png'; 

const Navbar = () => {
    const [menu, setMenu] = useState("menu");

    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                <img src={Navbarimg} alt="Logo" />
                <span className="logo-text">
                    <span className="deep">DEEP</span> <span className="net">NET</span>  <span className="soft"><br></br>SOFT</span>
                </span>
            </div>
            <ul className='navbar-menu'>
                <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>HOME</li>
                <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>MENU</li>
                <li onClick={() => setMenu("make a reservation")} className={menu === "make a reservation" ? "active" : ""}>MAKE A RESERVATION</li>
                <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>CONTACT US</li>
            </ul>
        </div>
    );
}

export default Navbar;