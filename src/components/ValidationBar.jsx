import React from 'react';
import './ValidationBar.css';

const ValidationBar = ({message,isValid}) => {
  return (
    <div className={`validation__bar ${isValid?'valid':'unvalid'}`}>
        {message}
    </div>
  )
}

export default ValidationBar