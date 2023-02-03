import React from 'react'
import { fetchData } from './utils/api'

const App = () => {
    const data=fetchData();
    console.log(data)
  return (
    <div></div>
  )
}

export default App