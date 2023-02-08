import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <motion.nav className='navbar'
      initial={{y:-100}}
      animate={{y:0}}
      transition={{duration:.4}}
    >
        <Link className='navbar__logo' to='/'>ShortURL</Link>
       <ul className='navbar__links'>
            <Link className='navbar__link' to='/'>Home</Link>
            <Link className='navbar__link' to='/about'>About</Link>
        </ul>   
    </motion.nav>
  )
}

export default Navbar