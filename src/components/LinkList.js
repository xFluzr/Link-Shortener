import React from 'react'

const LinkList = ({links}) => {
  return (<ul>
        {links===null?"":links.map((item,index)=>(
          <li key={index}><a href={item}>{item}</a></li>
        ))}
      </ul>
 
  )
}

export default LinkList