import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Deals from './Components/Deals'
import Cart from './Components/Cart'
import NotFound from './Components/NotFound'

const App = () => {
  return (
    <div>
    <BrowserRouter>
    
    <Routes>


    <Route path='/' element={<Home/>}/>
    <Route path='/deal' element={<Deals/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='*' element={<NotFound/>}/>

    </Routes>
    
    </BrowserRouter>
      
    </div>
  )
}

export default App

