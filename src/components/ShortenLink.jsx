import React, {useState } from 'react'
import { fetchData } from '../utils/api';
import { motion } from 'framer-motion';
import LinkList from './LinkList';
import './ShortLinks.css';

const ShortenLink = ({links,setLinks,setIsValid,isValid,setAnimations}) => {
  const [inputValue,setInputValue]=useState('');
  
  const inputHanlder=(e)=>{
    setInputValue(e.target.value)
  }

  const submitHandler=(e)=>{
    e.preventDefault();
    setInputValue('');
    setAnimations(true);
    setTimeout(()=>setAnimations(false),4000)
    const fetchingData=async()=>{
        const responseData=await fetchData(`${inputValue}`);
        if(responseData===null){
          setLinks(null);
          setIsValid(false);
        }else{
          setLinks(responseData)
          setIsValid(true)
        } 
    }
   
    fetchingData()
  }

  

  return (
    <main>
      <motion.form className='form' onSubmit={submitHandler}
        initial={{y:-300}}
        animate={{y:0}}
        transition={{duration:.4}}
      >
          <h1 className='main-title'>Shorten your link</h1>
          <div className='form__input-wrapper'> 
            <input className='form__input-item form-input'type='text' value={inputValue} onChange={inputHanlder}/>
            <button className='form__input-item form-btn'type='submit'>Get LINK</button>
          </div>
         
      </motion.form>
      {isValid&&<LinkList links={links}/>}
    </main>
  )
}

export default ShortenLink