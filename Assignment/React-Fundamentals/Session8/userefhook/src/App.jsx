import React from 'react'
import Searchbar from './Components/Searchbar'
import Loginform from './Components/Loginform'
import AddplayList from './Components/AddplayList'
import Feedback from './Components/Feedback'

const App = () => {
  return (
    <div className='d-flex'>
      <div className='same'>
        <h1>👉 useRef Search Baar</h1>
        <Searchbar/>
      </div>
      <div className='same'>
        <h1>👉 Login Form UseRef</h1>
        <Loginform/>
      </div>
      <div className='same'>
        <h1>👉 Add Play List useRef</h1>
        <AddplayList/>
      </div>
      <div className='same'>
        <h1>👉 Feedback Form useRef</h1>
        <Feedback/>
      </div>
      
    </div>
  )
}

export default App
