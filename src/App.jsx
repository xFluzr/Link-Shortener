import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import React from 'react'
import Home from './pages/Home'
import About from './pages/About'

const router=createBrowserRouter([
  {
    path:'/',
    index:true,
    element:<Home/>
  },
  {
    path:'about',
    element:<About/>
  }
])

const App = () => {
  return <RouterProvider router={router}/>
}

export default App