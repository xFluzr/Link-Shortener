import React from 'react';
import './Description.css';

const Description = () => {
  return (
    <div className='content__wrapper'>
        <section className='content__tutorial'>
            <h3>How does it Work?</h3>
            <p>You have just to put your link in input field and press GET LINK</p>
        </section>
        <section className='content__tutorial'>
            <h3>Does it cost something?</h3>
            <p>NO. It's completly Free. Moreover this app work 24/7 so you can use whenever you need to.</p>
        </section>
    </div>
  )
}

export default Description