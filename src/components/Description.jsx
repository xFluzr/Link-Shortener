import React from 'react';
import { motion } from 'framer-motion';
import './Description.css';

const Description = () => {
  return (
    <motion.div className='content__wrapper'
      initial={{y:-200}}
      animate={{y:0}}
      transition={{duration:0.4}}
    >
        <section className='content__tutorial'>
            <h3>How does it Work?</h3>
            <p>You have just to put your link in input field and press GET LINK</p>
        </section>
        <section className='content__tutorial'>
            <h3>Does it cost something?</h3>
            <p>NO. It's completly Free. Moreover this app work 24/7 so you can use whenever you need to.</p>
        </section>
    </motion.div>
  )
}

export default Description