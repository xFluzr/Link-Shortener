import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1 className='navbar__logo'>Shortify</h1>
       <ul className='navbar__links'>
            <li className='navbar__link'>About</li>
            <li className='navbar__link'>Pricing</li>
        </ul>   
    </nav>
  )
}

export default Navbar