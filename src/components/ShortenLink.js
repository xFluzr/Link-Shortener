import React, { useState } from 'react'

const Input = () => {
  const [inputValue,setInputValue]=useState('');

  const inputHanlder=(e)=>{
    setInputValue(e.target.value)
  }
  
  return (
    <form>
        <h3>Shorten your link</h3>
        <input type='text' value={inputValue} onChange={inputHanlder}/>
        <button>Shorten</button>
    </form>
  )
}

export default ShortenLink