import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link className='navbar__logo' to='/'>ShortURL</Link>
       <ul className='navbar__links'>
            <Link className='navbar__link' to='/'>Home</Link>
            <Link className='navbar__link' to='/about'>About</Link>
        </ul>   
    </nav>
  )
}

export default Navbar