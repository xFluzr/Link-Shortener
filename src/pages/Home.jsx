import React, { useState } from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import ShortenLink from '../components/ShortenLink';
import ValidationBar from '../components/ValidationBar';

const Home = () => {
  const [isValid,setIsValid]=useState(false);
  const [showValidationBar,setShowValidationBar]=useState(false);
  const [links,setLinks]=useState(null);

  let message=`${!isValid?'Link Invalid':'Link Valid'}`

  return (
    <>
        {showValidationBar&&<ValidationBar message={message} isValid={isValid}/>}
        <Navbar/>
        <ShortenLink links={links} setLinks={setLinks} setIsValid={setIsValid} isValid={isValid} setShowValidationBar={setShowValidationBar} />
        <Footer/>
    </>
  )
}

export default Home