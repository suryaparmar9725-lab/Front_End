
import React from 'react'
import UserGreeting from './Components/UserGreeting'
import UserGreetingClass from './Components/UserGreetingClass'
import Miniprofile from './Components/Miniprofile'

function App() {
  return (
    <div>
       <h1>Welcome to React JSX!</h1>


    <h3> // User Greeting Username</h3>
    <h1> 👉 Fundtioncal Component</h1>
    <UserGreeting username='parmar Surendra'/>

    <h1>👉  Class Component</h1>
    <UserGreetingClass username='parmar surendrakumar Cheharbhai'/>

    <h1>👉  MINI Project Using Fundtioncal Component JSX!</h1>
    <Miniprofile/>


    </div>
  )
}

export default App
