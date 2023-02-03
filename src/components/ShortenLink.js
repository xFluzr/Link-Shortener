import React, { useEffect, useState } from 'react'
import { fetchData } from '../utils/api';
import './ShortLinks.css';

const ShortenLink = () => {
  const [inputValue,setInputValue]=useState('');
  const [isSent,setIsSent]=useState(false);
  const [shortLinks,setShortLinks]=useState(null)

  const inputHanlder=(e)=>{
    setInputValue(e.target.value)
  }

  const submitHandler=(e)=>{
    e.preventDefault();
    setIsSent(true)
    setInputValue('')
    const fetchingData=async()=>{
      try{
        const responseData=await fetchData(`${inputValue}`);
        setShortLinks(responseData)
        console.log(responseData)
      }catch{
        throw Error("Something went wrong");
      }
    }
    fetchingData()
  }

  

  return (
    <>
      <form className='form' onSubmit={submitHandler}>
          <h3>Shorten your link</h3>
          <input type='text' value={inputValue} onChange={inputHanlder}/>
          <button type='submit'>Shorten</button>
      </form>
      <ul>
        {shortLinks===null?'':shortLinks.map((item,index)=>(
          <li key={index}><a href={item}>{item}</a></li>
        ))}
      </ul>
    </>
  )
}

export default ShortenLink