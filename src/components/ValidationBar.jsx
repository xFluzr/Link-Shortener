import React from 'react';
import './ValidationBar.css';

const ValidationBar = ({message,isValid,animations}) => {
  return (
    <div className={`validation__bar ${isValid?'valid':'unvalid'} ${animations?'animate':''}`}>
        {message}
    </div>
  )
}

export default ValidationBar