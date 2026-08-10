import React from 'react'
import LikeButton from './Components/Likebutton'
import Searchbaar from './Components/Searchbaar'
import Loginform from './Components/Loginform'
import Playlisadd from './Components/Playlisadd'
import LoginformUpdate from './Components/LoginformUpdate'

const App = () => {
  return (
    <div style={{display:'flex',flexWrap:'wrap'}}>
     <div style={{display:'flex'}}>
       <h1> 👉 Like Button Counter</h1>
      <LikeButton/>
      <hr></hr>
      <h1> 👉 Search Baar</h1>
      <Searchbaar/>
      <hr></hr>
      <h1> 👉 Login Form</h1>
      <Loginform/>
     </div>
     
      
      <div style={{display:'flex',textAlign:'center',marginTop:'5vw'}}>

      <h1> 👉 Play list Add </h1>
      <Playlisadd/>
      <hr></hr>
      <h1> 👉 Login form Update </h1>
      <LoginformUpdate/>
      </div>
    </div>
  )
}

export default App
