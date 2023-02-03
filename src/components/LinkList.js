import React from 'react';
import './LinkList.css';

const LinkList = ({links}) => {
  return (<ul className='links-list'>
        {links===null?<li>No LINKS FOUND!</li>:links.map((item,index)=>(
          <ol className='list-item' key={index}><span className='list-number'>{index}</span><a className='link' href={item}>{item}</a></ol>
        ))}
      </ul>
 
  )
}

export default LinkList