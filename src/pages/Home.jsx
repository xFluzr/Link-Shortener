import React, { useState } from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import ShortenLink from '../components/ShortenLink';
import ValidationBar from '../components/ValidationBar';

const Home = () => {
  const [isValid,setIsValid]=useState(false);
  const [animations,setAnimations]=useState(false);
  const [links,setLinks]=useState(null);
  console.log(animations)
  let message=`${!isValid?'Link Invalid':'Link Valid'}`

  return (
    <>
        <ValidationBar message={message} isValid={isValid} animations={animations}/>
        <Navbar/>
        <ShortenLink links={links} setLinks={setLinks} setIsValid={setIsValid} isValid={isValid} setAnimations={setAnimations}/>
        <Footer/>
    </>
  )
}

export default Home