import React from 'react';
import './LinkList.css';

const LinkList = ({links}) => {
  return (<ul className='links-list'>
        {links===null?<li>No LINKS FOUND!</li>:links.map((item,index)=>{
          if(index>6 || !item.includes('https')){
            return;
          }
          return <ol className='list-item' key={index}><span className='list-number'>{index/2}</span><a className='link' target='_blank' rel="noreferrer" href={item}>{item}</a></ol>
        }
         
        )}
      </ul>
 
  )
}

export default LinkList