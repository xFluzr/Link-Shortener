import React, {useState } from 'react'
import { fetchData } from '../utils/api';
import LinkList from './LinkList';
import './ShortLinks.css';

const ShortenLink = () => {
  const [inputValue,setInputValue]=useState('');
  const [links,setLinks]=useState(null)

  const inputHanlder=(e)=>{
    setInputValue(e.target.value)
  }

  const submitHandler=(e)=>{
    e.preventDefault();
    setInputValue('');
    const fetchingData=async()=>{
      try{
        const responseData=await fetchData(`${inputValue}`);
        setLinks(responseData)

      }catch{
        throw Error("Something went wrong");
      }
    }
    fetchingData()
  }

  

  return (
    <main>
      <form className='form' onSubmit={submitHandler}>
          <h1 className='main-title'>Shorten your link</h1>
          <div className='form__input-wrapper'> 
            <input className='form__input-item form-input'type='text' value={inputValue} onChange={inputHanlder}/>
            <button className='form__input-item form-btn'type='submit'>Shorten</button>
          </div>
         
      </form>
      <LinkList links={links}/>
    </main>
  )
}

export default ShortenLink