import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h1>MENU</h1>
        <p>
          Take a look at our menu featuring food, drinks, and brunch. 
          If you'd like to place an order, use the "Order Online" 
          button located below the menu.
        </p>
      </div>
    </div>
  );
}

export default Header;
