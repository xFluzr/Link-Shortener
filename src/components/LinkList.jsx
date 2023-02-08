import React from 'react';
import { motion } from 'framer-motion';
import './LinkList.css';

const LinkList = ({links}) => {
  return (<motion.ul className='links-list'
    initial={{x:-600}}
    animate={{x:0}}
    transition={{duration:.4}}
  >
        {links===null?<li>No LINKS FOUND!</li>:links.map((item,index)=>{
          if(index>6 || !item.includes('https')){
            return;
          }
          return <ol className='list-item' key={index}>
            <span className='list-number'>{index/2}</span>
            <a className='link' target='_blank' rel="noreferrer" href={item}>{item}</a>
          </ol>
        }
         
        )}
      </motion.ul>
 
  )
}

export default LinkList