import { motion } from 'framer-motion';
import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <motion.footer
      initial={{y:200}}
      animate={{y:0}}
      transition={{duration:0.4}}
    >
        Made By Jakub Jaszcz &copy;2023
    </motion.footer>
  )
}

export default Footer