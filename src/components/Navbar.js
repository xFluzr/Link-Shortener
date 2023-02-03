import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h2 className='navbar__logo'>ShortURL</h2>
       <ul className='navbar__links'>
            <li className='navbar__link'>About</li>
        </ul>   
    </nav>
  )
}

export default Navbar